import React from 'react'

export default class TextField extends React.Component{
	render() {
		return (
			<textarea style={styles.fieldStyle}>
			</textarea>
		);
	}
}

let styles = {
    fieldStyle: {
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