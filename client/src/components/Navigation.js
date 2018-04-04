import React from 'react';
import logo from '../logo.svg';
import { logout } from '../actions/authActions';

const Navigation = () => (
    <nav id="nav">
        <div id="logo">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <button className="toggle close">×</button>
        <ul>
            <li>
                <a href="/">Puzzles</a>
            </li>
            <li>
                <a href="/account">Account</a>
            </li>
            <li>
                <a href="/puzzles/new">Add Puzzle</a>
            </li>
            <li>
                <button onClick={logout} >Logout</button>
            </li>
            <li>
                <a href='/login' >Log In</a>
            </li>
            <li>
                <a href='/signup' >Sign Up</a>
            </li>
        </ul>
    </nav>
)

export default Navigation;