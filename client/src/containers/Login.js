import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../actions/authActions';

class Login extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        email: '', 
        password: ''
      };
    }

    handleOnChange = (e) => {
        const {name, value} = e.target;
        this.setState({
          [name]: value
        });
    }

    handleOnLogin = (e) => {
        e.preventDefault();
        if (this.props.authenticate(this.state)) {
            this.props.history.push('/puzzles')
        } else {
            window.alert("Sorry, something went wrong. Please try logging in again.")
        }
    }

    render() {
        return (
            <div id="login">
                <h2>Log In</h2>
                <form onSubmit={this.handleOnLogin}>
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

export default Login = withRouter(connect(null, {authenticate})(Login));