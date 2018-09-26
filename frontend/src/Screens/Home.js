import React from 'react'
import { Box, Footer } from 'grommet'
import NavLink from '../Components/NavLink';

import AboutSection from '../Components/Home/AboutSection';
import Text from '../Components/Text';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <div style={{ background: "linear-gradient(180deg, #DF3131 13.21%, #460000 100%) fixed" }}>
                <Box full flex justify="center" align="center">
                    <Text type="h1" style={styles.requestHackrTitle}>hackr.req("attending?")</Text>
                    <Box align="center" justify="center" direction="row" pad={{ between: "large" }}>
                        <NavLink href="/profile#signUp" style={styles.titleButton}>hackr.signUp()</NavLink>
                        <NavLink href="/about" style={styles.titleButton}>hackr.learn()</NavLink>
                    </Box>
                </Box>
                <Box full="horizontal" align="center">
                    <AboutSection />
                </Box>
                <Footer style={styles.footer}></Footer>
            </div>
        );
    }
}

let styles = {
    centrification: {
        marginTop: 285,
    },
    requestHackrTitle: {
        fontFamily: "Hack",
        fontWeight: "400",
        color: "#D2D2D2",
        lineHeight: 5,
        marginTop: "-144px"
    },
    titleButton: {
        fontSize: 18,
        color: "#FFFFFF",
        fontFamily: "Hack"
    },
    footer: {
        height: "100px",
    }
};