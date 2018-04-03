import React from 'react';
import logo from '../logo.svg';

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
                <a href="/logout">Logout</a>
            </li>
        </ul>
    </nav>
)

export default Navigation;