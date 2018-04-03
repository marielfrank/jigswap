import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import PuzzleForm from './PuzzleForm';
import User from '../components/User';
import Footer from '../components/Footer';
import '../App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <header className="App-header">
            <h1 className="App-title">Jigswap</h1>
          </header>

          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={User} />
          <Route exact path="/puzzles/new" component={PuzzleForm} />
          <br />

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;