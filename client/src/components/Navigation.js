import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import logo from '../logo.svg';
import { logout } from '../actions/authActions';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    render () {
        const navButtons = () => (
            localStorage.token ? (
                <div>
                    <p>
                        <a href="/account">Account</a>
                    </p>
                    <p>
                        <a href="/puzzles/new">Add Puzzle</a>
                    </p>
                    <p>
                        <button onClick={handleLogout} >Log Out</button>
                    </p>
                </div>
            ) : (
                <div>
                    <p>
                        <a href='/login' >Log In</a>
                    </p>
                    <p>
                        <a href='/signup' >Sign Up</a>
                    </p>
                </div>
            )
        );

        const handleLogout = () => {
            logout();
            this.setState({
                redirect: true
            })
        }
        if (!!this.state.redirect) {
            return <Redirect to='/' />
        } else {
            return (
                <nav id="nav">
                    <div id="logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <button className="toggle close">×</button>
                    <p>
                        <a href="/">Puzzles</a>
                    </p>
                    {navButtons}
                </nav>
            )
        }
    }
}
export default Navigation;