import React from 'react'
import { Box } from 'grommet'

import Text from "../Components/Text"

export default class ContactScreen extends React.Component {
	state = {
		title: "",
		email: "",
		question: ""
	}

	render() {
		return (
			<Box full flex justify="center" align="center">
				<Text type="h1" >
					Contact Us
				</Text>
				<a href="mailto:hacked.compeclub.com">hacked@compeclub.com</a>
			</Box>
		);
	}
}