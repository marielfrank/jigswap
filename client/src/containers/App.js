import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPuzzles} from '../actions/puzzleActions';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchPuzzles();
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
          <form>
            <label htmlFor="email">Email: </label>
            <br />
            <input
              name="email"
              id="email"
              type="email"
            />
            <br /><br />
            <label htmlFor="password">Password:</label>
            <br />
            <input
              name="password"
              id="password"
              type="password"
            />
          </form>
          <br />
          <button
            onClick={this.login}
          >
              Login
          </button>
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

export default App = connect(mapStateToProps, {fetchPuzzles})(App);