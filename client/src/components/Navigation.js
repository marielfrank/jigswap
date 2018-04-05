import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.png';
import { logout } from '../actions/authActions';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    render () {
        const NavItem = ReactBootstrap.NavItem;
        const handleLogout = () => {
            logout();
            // this.setState({
            //     redirect: true
            // })
        }

        const navButtons = (
            localStorage.token ? (
                <div>
                    <NavItem eventKey={4} title="Account">
                        <Link to="/account">Account</Link>
                    </NavItem>
                    <NavItem eventKey={5} title="Add Puzzle">
                        <Link to="/puzzles/new">Add Puzzle</Link>
                    </NavItem>
                    <NavItem eventKey={6} title="Account">
                        <button onClick={handleLogout} >Log Out</button>
                    </NavItem>
                </div>
            ) : (
                <div>
                    <NavItem eventKey={2} title="Log In">
                        <Link to='/login' >Log In</Link>
                    </NavItem>
                    <NavItem eventKey={3} title="Sign Up">
                        <Link to='/signup' >Sign Up</Link>
                    </NavItem>
                </div>
            )
        );

        // if (!!this.state.redirect) {
        //     return <Redirect to='/login' />
        // } else {
            return (
                <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
                    <NavItem eventKey={1}>
                        <Link to="/">
                            <div id="logo">
                                <img src={logo} className="App-logo" alt="logo" />
                            </div>
                        </Link>
                    </NavItem>
                    {navButtons}
                </Nav>
            )
        // }
    }
}