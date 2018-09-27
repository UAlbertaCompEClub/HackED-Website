import React from 'react'

export default class Button extends React.Component {

    state = {}

    render() {

        /* eslint-disable */
        let toShouldShowAsActive = this.state.isHover && this.state.isPressed
        if (toShouldShowAsActive != this.state.shouldShowAsActive) {
            this.setState({ shouldShowAsActive: toShouldShowAsActive })
        }
        /* eslint-enable */

        return (
            <div
                style={{
                    ...styles.button,
                    ...(this.state.isHover ? styles.hovered : {}),
                    ...(this.state.shouldShowAsActive ? styles.active : {})
                }}
                onMouseDown={() => { this.setState({ isPressed: true }) }}
                onMouseEnter={() => { this.setState({ isHover: true }) }}
                onMouseUp={() => { this.setState({ isPressed: false }) }}
                onMouseLeave={() => { this.setState({ isHover: false }) }}
                onClick={this.props.onClick}
            >
                {this.props.children.toUpperCase()}
            </div>
        );
    }
}

let styles = {
    button: {
        userSelect: "none",
        cursor: "pointer",

        fontFamily: "Open Sans",
        fontSize: 14,
        color: "white",

        backgroundColor: "#DF3131",
        paddingLeft: "0.55in",
        paddingRight: "0.55in",
        paddingTop: "0.15in",
        paddingBottom: "0.15in",
        borderRadius: "0.4in",

        marginTop: "1em",
        marginBottom: "1em",
        marginLeft: "1em",
        marginRight: "1em",

        boxShadow: "0 0px 13px rgba(0,0,0,0.15)",
        transition: "all 0.5s ease",
    },
    hovered: {
        boxShadow: "0 0px 17px rgba(0,0,0,0.65)",
        transition: "all 0.5s ease",
    },
    active: {
        boxShadow: "0 0px 13px rgba(0,0,0,0.15)",
        opacity: 0.7
    }
}