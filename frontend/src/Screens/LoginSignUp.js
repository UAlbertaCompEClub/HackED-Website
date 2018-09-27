import React from 'react'
import { Box } from 'grommet'

import TextInput from '../Components/TextInput'
import Button from '../Components/Button'

export default class LoginSignUpScreen extends React.Component {
    render() {
        return (
            <Box full justify="center" align="center">
                <TextInput placeholderColor="DF3131">Username</TextInput>
                <TextInput password placeholderColor="DF3131">Password</TextInput>
                <Button>Sign Up</Button>
            </Box>
        );
    }
}