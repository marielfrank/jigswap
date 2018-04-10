import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Navigation from '../components/Navigation';
import Welcome from '../components/Welcome';
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
          <div id="main-div">
            <Route exact path="/" component={Welcome} isAuthenticated={isAuthenticated} />
            <Route path="/signup" component={Signup} isAuthenticated={isAuthenticated} />
            <Route path="/login" component={Login} isAuthenticated={isAuthenticated} />
            <Route path="/account" component={User} isAuthenticated={isAuthenticated} />
            <Route exact path="/puzzles/new" component={PuzzleForm} isAuthenticated={isAuthenticated} crud="create" />
            <Route path="/puzzles" component={Puzzles} isAuthenticated={isAuthenticated} />
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