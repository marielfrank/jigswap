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
                <div className="App-title">Jigswap</div>
            </div>
            )
    
        const loggedInNav = (
            <nav>
                <Link to="/puzzles">
                    {logoLink}
                </Link>
                <div id="menuToggle">
                    <input type="checkbox" />
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <ul id="menu">
                        <Link to="/account"><li>Account</li></Link>
                        <Link to="/puzzles/new"><li>Add Puzzle</li></Link>
                        <button onClick={(e) => this.handleLogout(e)} ><li>Log Out</li></button>
                    </ul>
                </div>
            </nav>
        );
    
        const welcomeNav = (
            <nav>
                <Link to="/">
                    {logoLink}
                </Link>
                <div id="menuToggle">
                    <input type="checkbox" />
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <ul id="menu">
                        <Link to="/login" ><li>Log In</li></Link>
                        <Link to="/signup" ><li>Sign Up</li></Link>
                    </ul>
                </div>
            </nav>
        )
        return (
            <div>{this.props.isAuthenticated ? loggedInNav : welcomeNav}</div>
        )
    }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation));