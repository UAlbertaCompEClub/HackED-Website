import React, { Component } from 'react';
import { Box, Header, Title, Image, Article } from 'grommet';
import NavLink from "./Components/NavLink"
import { Route } from 'react-router'
import 'grommet-css';
import './App.css';

import Home from "./Screens/Home"

class App extends Component {
	render() {
		return (
			<div>
				<Article>
					<Header fixed pad="none" style={{ backgroundColor: "#DF3131" }}>
						<Box pad={{ horizontal: "large" }}>
							<Title
								onClick={() => { alert("oof") }}
							>
								<Image style={{ width: 167, height: 39 }} src={require('./Public/Logo.png')}></Image>
							</Title>
						</Box>
						<Box
							flex={true}
							justify='end'
							direction='row'
							responsive={false}
							pad={{ horizontal: "large", between: "medium" }}
						>
							<NavLink light href="/about">{"About".toUpperCase()}</NavLink>
							<NavLink light href="/contact">{"Contact".toUpperCase()}</NavLink>
							<NavLink light href="/faq">{"FAQ".toUpperCase()}</NavLink>
							<NavLink light href="/schedule">{"Schedule".toUpperCase()}</NavLink>
							<NavLink light href="/sponsor">{"Sponsor".toUpperCase()}</NavLink>
							<NavLink light href="/profile">{"Login".toUpperCase()}</NavLink>
						</Box>
					</Header>
					<div>
						<Route exact path="/" component={Home} />
					</div>
				</Article>
			</div>
		);
	}
}

export default App;
