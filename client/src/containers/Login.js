import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authenticate } from '../actions/authActions';

class Login extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        email: '', 
        password: '',
        redirect: false
      };
    }

    handleOnChange = (e) => {
        const {name, value} = e.target;
        this.setState({
          [name]: value
        });
    }

    handleOnSignup = (e) => {
        e.preventDefault();
        if (this.props.authenticate({email: this.state.email, password: this.state.password})) {
            this.setState({redirect: true})
        }
    }

    render() {
        if (this.state.redirect || !localStorage.token) {
            return <Redirect to="/puzzles"/>
        } else {
            return (
                <div id="login">
                    <h2>Log In</h2>
                    <form onSubmit={this.handleOnSignup}>
                        <label htmlFor="email">Email: </label>
                        <br />
                        <input
                            name="email"
                            id="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleOnChange}
                        />
                        <br /><br />
                        <label htmlFor="password">Password:</label>
                        <br />
                        <input
                            name="password"
                            id="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleOnChange}
                        />
                        <br /><br />
                        <input
                            type="submit"
                            value="Log In"
                        />
                    </form>
                </div>
            );
        }
    }
}

export default Login = connect(null, {authenticate})(Login);