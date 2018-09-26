import React from 'react'

export default class Text extends React.Component {

    render() {
        let providedStyle = this.props ? this.props.type + "Style" : undefined
        return (
            <p style={
                {
                    ...styles.defStyle,
                    ...(styles[providedStyle] !== "Style" ? styles[providedStyle] ? styles[providedStyle] : {} : {}),
                    ...(this.props ? this.props.style : {})
                }
            }>
                {this.props.children}
            </p>
        );
    }
}

let styles = {
    defStyle: {
        color: "#434343",
        fontFamily: "Open Sans",
        fontSize: 15,
        lineHeight: 2
    },
    h1Style: {
        color: "#000000",
        fontSize: 32,
        lineHeight: 1.5
    },
    h2Style: {
        color: "#000000",
        fontSize: 28,
        lineHeight: 1.5
    },
    h3Style: {
        color: "#000000",
        fontSize: 24,
        lineHeight: 1.5
    },
    h4Style: {
        color: "#000000",
        fontSize: 20,
        lineHeight: 1.5
    },
    h5Style: {
        color: "#000000",
        fontSize: 16,
        lineHeight: 1.5
    },
    h6Style: {
        color: "#000000",
        fontSize: 12,
        lineHeight: 1.5
    },
    displayStyle:{
        color: "#FFFFFF",
        fontSize: 42,
        lineHeight: 1.5,
        fontFamily: "Hack"

    }
}