import React from 'react'

export default class TextInput extends React.Component {


    render() {
        return (
            [
                <style key="0">
                    {
                        " .customInput"
                        + this.props.placeholderColor +
                        "::placeholder { color: #"
                        + (this.props.placeholderColor ? this.props.placeholderColor : "#ACACAC") +
                        " ;} "
                        + ".customInputDef:focus { outline: none; }"
                    }
                </style>,
                <input
                    key="1"
                    placeholder={this.props.children}
                    style={styles.inputStyle}
                    onChange={this.props.onChange}
                    className={"customInputDef customInput" + this.props.placeholderColor}
                    type={this.props.password ? "password" : undefined}
                >
                </input>
            ]
        );
    }
}

let styles = {
    inputStyle: {
        border: "none",
        borderBottom: "1px solid #CCCCCC",
        minWidth: "20em",
        fontSize: 15,
        margin: "1.3em",
        paddingBottom: "0.5em",
        fontFamily: "Open Sans",
        color: "#000000",
        letterSpacing: "0.5px"
    }
}