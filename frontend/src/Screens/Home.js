import React from 'react'
import { Box } from 'grommet'
import NavLink from '../Components/NavLink';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Box full align="center">
                <h1 style={styles.requestHackrTitle}>hackr.req("attending?")</h1>
                <Box style={{marginTop: 50}} direction="row" pad={{between: "large"}}>
                    <NavLink href="/profile#signUp" style={styles.titleButton}>hackr.signUp()</NavLink>
                    <NavLink href="/about" style={styles.titleButton}>hackr.learn()</NavLink>
                </Box>
            </Box>
        );
    }
}

let styles = {
    requestHackrTitle: {
        fontFamily: "Hack",
        fontWeight: "400",
        color: "#3F3F3F",
        marginTop: 285
    },
    titleButton: {
        fontSize: 18,
        color: "#DF3131",
        fontFamily: "Hack"
    }
};