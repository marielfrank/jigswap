import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Navigation from '../components/Navigation';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import PuzzleForm from './PuzzleForm';
import Puzzles from './Puzzles';
import User from '../components/User';
import Footer from '../components/Footer';
import '../App.css';

class App extends Component {
  
  render() {
    const {isAuthenticated} = this.props
    return (
      <Router>
        <div className="App">
          <Navigation isAuthenticated={isAuthenticated} />
          <header className="App-header">
            <h1>Jigswap</h1>
          </header>
          <div id="main-div">
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={User} />
            <Route exact path="/puzzles/new" component={PuzzleForm} />
            <Route path="/puzzles" component={Puzzles} />
          <br />
          </div>

          <Footer/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.auth.isAuthenticated
  }
}

export default App = connect(mapStateToProps, {})(App);