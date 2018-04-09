import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import logo from '../logo.png';
import { logout } from '../actions/authActions';

class Navigation extends Component {

    handleLogout = (e) => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/')
    }

    render () {
        const logoLink = (
            <div id="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            )
    
        const loggedInNav = (
            <nav>
                <Link to="/puzzles">
                    <div id="logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </Link>
                <Link to="/account">Account</Link>
                <Link to="/puzzles/new">Add Puzzle</Link>
                <button onClick={(e) => this.handleLogout(e)} >Log Out</button>
            </nav>
        );
    
        const welcomeNav = (
            <nav>
                <Link to="/">
                    {logoLink}
                </Link>
                <Link to="/login" >Log In</Link>
                <Link to="/signup" >Sign Up</Link>
            </nav>
        )
        return (
            <div>{this.props.isAuthenticated ? loggedInNav : welcomeNav}</div>
        )
    }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation));