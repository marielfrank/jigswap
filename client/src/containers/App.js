import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPuzzles} from '../actions/puzzleActions';
import {signup} from '../actions/authActions';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '', 
      password: ''
    };
  }

  componentDidMount() {
    this.props.fetchPuzzles();
  }

  handleOnChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSignup = (e) => {
    e.preventDefault();
    console.log(e)
    this.props.signup(this.state);
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jigswap</h1>
          <h2>Because puzzles are for sharing</h2>
        </header>
          {this.props.puzzleState.puzzles.map(puz => 
            <div key={puz.id}><h3>{puz.name}</h3><p>{puz.pieces}</p></div>
          )}
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
        <br />

        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    puzzleState: state.puzzles
  }
}

export default App = connect(mapStateToProps, {fetchPuzzles, signup})(App);