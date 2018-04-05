import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import { logout } from '../actions/authActions';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    render () {
        const handleLogout = () => {
            logout();
            // this.setState({
            //     redirect: true
            // })
        }

        const navButtons = (
            localStorage.token ? (
                <div>
                    <p>
                        <Link to="/account">Account</Link>
                    </p>
                    <p>
                        <Link to="/puzzles/new">Add Puzzle</Link>
                    </p>
                    <p>
                        <button onClick={handleLogout} >Log Out</button>
                    </p>
                </div>
            ) : (
                <div>
                    <p>
                        <Link to='/login' >Log In</Link>
                    </p>
                    <p>
                        <Link to='/signup' >Sign Up</Link>
                    </p>
                </div>
            )
        );

        // if (!!this.state.redirect) {
        //     return <Redirect to='/login' />
        // } else {
            return (
                <nav id="nav">
                    <div id="logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <button className="toggle close">×</button>
                    <p>
                        <Link to="/">Puzzles</Link>
                    </p>
                    {navButtons}
                </nav>
            )
        // }
    }
}