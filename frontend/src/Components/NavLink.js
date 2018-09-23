import React from 'react';
import { Link } from 'react-router-dom'

export default class NavLink extends React.Component {
    state = {

    }
    render() {
        return (
            <div>
                <Link
                    //has props hoverStyle
                    onMouseEnter={() => {
                        if (this.props.onMouseEnter) {
                            this.props.onMouseEnter();
                        }
                        this.setState({ hoverStyle: this.props.hoverStyle })
                    }}
                    onMouseLeave={() => {
                        if (this.props.onMouseLeave) {
                            this.props.onMouseLeave();
                        }
                        this.setState({ hoverStyle: undefined })
                    }}
                    style={
                        {
                            fontFamily: "Open Sans",
                            fontWeight: "500",
                            fontSize: 12,
                            textDecoration: "none",
                            color: this.props.style ? this.props.style.color : this.props.light ? "white" : "black",
                            ...this.props.style,
                            ...this.state.hoverStyle
                        }
                    } to={this.props.href ? this.props.href : undefined}>
                    {this.props.children}
                </Link>
            </div>
        );
    }
}