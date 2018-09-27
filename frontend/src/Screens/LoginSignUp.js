import React from 'react'
import { Box } from 'grommet'

import { connect } from 'react-redux'

import TextInput from '../Components/TextInput'
import Button from '../Components/Button'

class LoginSignUpScreen extends React.Component {
    render() {
        return (
            <Box full justify="center" align="center">
                {this.props.isSignUp ? this.renderSignUp() : this.renderLogin()}
            </Box>
        );
    }

    renderLogin() {
        return (
            [
                <TextInput placeholderColor="DF3131">Email</TextInput>,
                <TextInput password placeholderColor="DF3131">Password</TextInput>,
                <Box direction="row">
                    <Button>Login</Button>
                </Box>
            ]
        )
    }

    renderSignUp() {
        return (
            [
                <TextInput placeholderColor="DF3131">Email</TextInput>,
                <TextInput placeholderColor="DF3131">First Name</TextInput>,
                <TextInput placeholderColor="DF3131">Last Name</TextInput>,
                <TextInput password placeholderColor="DF3131">Password</TextInput>,
                <TextInput password placeholderColor="DF3131">Confirm Password</TextInput>,
                <Box direction="row">
                    <Button>Sign Up</Button>
                </Box>
            ]
        )
    }
}

function mapStateToProps(state) {
    return {
        isSignUp: state.router.location.hash.split("#")[1] === "signUp"
    }
}
function mapDispatchToProps() {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignUpScreen)