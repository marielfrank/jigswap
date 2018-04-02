import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/authActions';

class Signup extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        username: '',
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

    handleOnSignup = (e) => {
        e.preventDefault();
        this.props.signup(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleOnSignup}>
                <label htmlFor="email">Username: </label>
                <br />
                <input
                    name="username"
                    id="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleOnChange}
                />
                <br /><br />
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
                    value="Create Account"
                />
            </form>
        );
    }
}

export default Signup = connect(null, {signup})(Signup);