import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPuzzles} from './actions/puzzleActions'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchPuzzles();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {console.log(this.props.puzzleState)}
          {this.props.puzzleState.puzzles.map(puz => <div key={puz.id}><h3>{puz.name}</h3><p>{puz.pieces}</p></div>)}
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