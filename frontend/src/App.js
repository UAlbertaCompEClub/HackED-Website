import React, { Component } from 'react';
import { Box, Header, Image, Article } from 'grommet';
import { Link } from 'react-router-dom'
import NavLink from "./Components/NavLink"
import { Route } from 'react-router'
import 'grommet-css';
import './App.css';

import Home from "./Screens/Home"
import About from "./Screens/About"
import Contact from "./Screens/Contact"
import Faq from "./Screens/FAQ"
import Schedule from "./Screens/Schedule"
import Sponsor from "./Screens/Sponsor"
import LoginSignUp from "./Screens/LoginSignUp"
// import AdminDash from "./Screens/AdminDashboard"
// import UserDash from "./Screens/UserDashboard"

class App extends Component {
	render() {
		return (
			<div>
				<Article>
					<Header fixed pad="none" style={{ backgroundColor: "#DF3131" }}>
						<Box pad={{ horizontal: "large" }}>
							<Link to="/">
								<Image style={{ width: 167, height: 39 }} src={require('./Public/Logo.png')}></Image>
							</Link>
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
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/faq" component={Faq} />
						<Route exact path="/schedule" component={Schedule} />
						<Route exact path="/sponsor" component={Sponsor} />
						<Route exact path="/profile" component={LoginSignUp} />
					</div>
				</Article>
			</div>
		);
	}
}

export default App;
