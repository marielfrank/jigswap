import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPuzzles} from '../actions/puzzleActions';
import Navigation from '../components/Navigation';
import Signup from './Signup';
import Login from './Login';
import Footer from '../components/Footer';
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
          <h1 className="App-title">Jigswap</h1>
        </header>
          {this.props.puzzleState.puzzles.map(puz => 
            <div key={puz.id}><h3>{puz.name}</h3><p>{puz.pieces}</p></div>
          )}
        <Signup/>
        <Login/>
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