import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../logo.png';
import { logout } from '../actions/authActions';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    handleLogout = () => {
        this.props.logout();
        // this.setState({
        //     redirect: true
        // })
    }
    render () {
        const navButtons = (
            localStorage.token ? (
                <div>
                    <Link to="/account">Account</Link>
                    <Link to="/puzzles/new">Add Puzzle</Link>
                    <button onClick={this.handleLogout} >Log Out</button>
                </div>
            ) : (
                <div>
                    <Link to='/login' >Log In</Link>
                    <Link to='/signup' >Sign Up</Link>
                </div>
            )
        );

        // if (!!this.state.redirect) {
        //     return <Redirect to='/login' />
        // } else {
            return (
                <nav>
                    <Link to="/">
                        <div id="logo">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </Link>
                    {navButtons}
                </nav>
            )
        // }
    }
}

export default Navigation = connect(null, {logout})(Navigation)