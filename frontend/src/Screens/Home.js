import React from 'react'
import { Box } from 'grommet'
import NavLink from '../Components/NavLink';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Box flex style={{ background: "linear-gradient(180deg, #DF3131 13.21%, #460000 100%)" }} align="center">
                <h1 style={styles.requestHackrTitle}>hackr.req("attending?")</h1>
                <Box style={{ marginTop: 50 }} direction="row" pad={{ between: "large" }}>
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
        color: "#D2D2D2",
        marginTop: 285
    },
    titleButton: {
        fontSize: 18,
        color: "#FFFFFF",
        fontFamily: "Hack"
    }
};