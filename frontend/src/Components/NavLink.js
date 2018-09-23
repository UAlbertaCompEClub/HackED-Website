import React from 'react';
import { Link } from 'react-router-dom'

export default class NavLink extends React.Component {
    render() {
        return (
            <div>
                <Link style={
                    {
                        fontFamily: "Open Sans",
                        fontWeight: "500",
                        fontSize: 12,
                        textDecoration: "none",
                        color: this.props.style ? this.props.style.color : this.props.light ? "white" : "black",
                        ...this.props.style
                    }
                } to={this.props.href ? this.props.href : undefined}>
                    {this.props.children}
                </Link>
            </div>
        );
    }
}