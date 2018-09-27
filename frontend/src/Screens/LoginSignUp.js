import React from 'react'
import { Box } from 'grommet'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TextInput from '../Components/TextInput'
import Button from '../Components/Button'
import NavLink from '../Components/NavLink'

class LoginSignUpScreen extends React.Component {

    state = {
        login: {
            email: "",
            pass: "",
        },
        signup: {
            email: "",
            fname: "",
            lname: "",
            pass: "",
            conPass: "",
        },
        errorMessage: ""
    }

    render() {
        return (
            <Box full justify="center" align="center">
                {this.props.isSignUp ? this.renderSignUp() : this.renderLogin()}
                <p style={styles.errorMessage}>{this.state.errorMessage.split('\n').map((item, key) => {
                    return <span key={key}>{item}<br /></span>
                })}</p>
            </Box>
        );
    }

    renderLogin() {
        return (
            [
                <TextInput key={"0"} placeholderColor="DF3131">Email</TextInput>,
                <TextInput key={"1"} password placeholderColor="DF3131">Password</TextInput>,
                <Button onClick={this.validateAndLogIn.bind(this)} key={"2"}>Login</Button>,
                <NavLink onClick={() => { this.setState({ errorMessage: "" }) }} key={"3"} href="#signUp">Haven't made an account? Create one now!</NavLink>
            ]
        )
    }

    renderSignUp() {
        return (
            [
                <TextInput key={"0"} onChange={(event) => { this.setState({ signup: { ...this.state.signup, email: event.target.value } }) }} placeholderColor="DF3131">Email</TextInput>,
                <TextInput key={"1"} onChange={(event) => { this.setState({ signup: { ...this.state.signup, fname: event.target.value } }) }} placeholderColor="DF3131">First Name</TextInput>,
                <TextInput key={"2"} onChange={(event) => { this.setState({ signup: { ...this.state.signup, lname: event.target.value } }) }} placeholderColor="DF3131">Last Name</TextInput>,
                <TextInput key={"3"} onChange={(event) => { this.setState({ signup: { ...this.state.signup, pass: event.target.value } }) }} password placeholderColor="DF3131">Password</TextInput>,
                <TextInput key={"4"} onChange={(event) => { this.setState({ signup: { ...this.state.signup, conPass: event.target.value } }) }} password placeholderColor="DF3131">Confirm Password</TextInput>,
                <Button key={"5"} onClick={this.validateAndSignUp.bind(this)} >Sign Up</Button>,
                <NavLink onClick={() => { this.setState({ errorMessage: "" }) }} key={"6"} href="/profile">Already have an account? Log in!</NavLink>,
            ]
        )
    }

    validateAndSignUp() {
        let userInfo = {
            fname: this.state.signup.fname,
            lname: this.state.signup.lname,
            pass: this.state.signup.pass,
            email: this.state.signup.email,
        }
        let validEmailAndAvail = (validateEmail(userInfo.email)) && (userInfo.email ? true : false)
        let passwordsSame = userInfo.pass === this.state.signup.conPass
        let passwordValidAndAvail = (userInfo.pass.length >= 8) && (userInfo.pass ? true : false)
        let firstNameAvail = userInfo.fname ? true : false
        let lastNameAvail = userInfo.lname ? true : false
        let continuable = validEmailAndAvail && passwordsSame && passwordValidAndAvail && firstNameAvail && lastNameAvail

        if (continuable) {
            console.log("to auth:\n", userInfo)
            this.setState({ errorMessage: "" })
        } else {
            let errorMessage = ""
            if (!validEmailAndAvail) { errorMessage += "Email is invalid\n" }
            if (!passwordsSame) { errorMessage += "Passwords are not the same\n" }
            if (!passwordValidAndAvail) { errorMessage += "Password provided is not valid.\n Passwords must be at least 8 characters long\n" }
            if (!firstNameAvail) { errorMessage += "First Name is not provided\n" }
            if (!lastNameAvail) { errorMessage += "Last Name is not provided\n" }

            this.setState({ errorMessage: errorMessage })
        }
    }

    validateAndLogIn() {
        let userInfo = {
            email: this.state.login.email,
            pass: this.state.login.pass
        }

        let validEmailAndAvail = (validateEmail(userInfo.email)) && (userInfo.email ? true : false)
        let passwordValidAndAvail = (userInfo.pass.length >= 8) && (userInfo.pass ? true : false)
        let continuable = validEmailAndAvail && passwordValidAndAvail

        if (continuable) {
            console.log("to auth:\n", userInfo)
            this.setState({ errorMessage: "" })
        } else {
            let errorMessage = ""
            if (!validEmailAndAvail) { errorMessage += "Email is invalid\n" }
            if (!passwordValidAndAvail) { errorMessage += "Password provided is not valid.\n Passwords must be at least 8 characters long\n" }

            this.setState({ errorMessage: errorMessage })
        }
    }

}
function validateEmail(email) {
    /* eslint-disable */
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    /* eslint-enable */
}

function mapStateToProps(state) {
    return {
        isSignUp: state.router.location.hash.split("#")[1] === "signUp"
    }
}
function mapDispatchToProps(dispatch) {
    return (bindActionCreators({}, dispatch))
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignUpScreen)

let styles = {
    errorMessage: {
        lineHeight: 1.5,
        textAlign: 'center',
        fontFamily: "Open Sans",
        color: "#777777",
        margin: 10,
        fontSize: 14
    }
}