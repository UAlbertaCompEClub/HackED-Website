import React from 'react';

export default class NavLink extends React.Component {
    render() {
        return (
            <div>
                <a style={{ fontFamily: "Open Sans", fontWeight: "500", fontSize: 12, textDecoration: "none", color: this.props.style ? this.props.style.color : this.props.light ? "white" : "black" }} href={this.props.href ? this.props.href : undefined}>
                    {this.props.children}
                </a>
            </div>
        );
    }
}