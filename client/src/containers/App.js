import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Navigation from './Navigation';
import Welcome from '../components/Welcome';
import Signup from './Signup';
import Login from './Login';
import PuzzlesContainer from './PuzzlesContainer';
import User from '../components/User';
import Footer from '../components/Footer';
import '../App.css';

class App extends Component {
  
  render() {
    const {isAuthenticated, user} = this.props
    const loggedOut = (
      <div>
        <Route exact path="/" render={() => <Welcome isAuthenticated={isAuthenticated} />} />
        <Route path="/signup" render={() => <Signup isAuthenticated={isAuthenticated} />} />
        <Route path="/login" render={() => <Login isAuthenticated={isAuthenticated} />} />
      </div>
      )
      const loggedIn = (
        <div>
          <Route path="/account" render={() => <User user={user} isAuthenticated={isAuthenticated} />} />
          <Route path="/puzzles" component={PuzzlesContainer} isAuthenticated={isAuthenticated} />
        </div>
        )
    return (
      <Router>
        <div className="App">
          <Navigation isAuthenticated={isAuthenticated} />
          <div id="main-div">
            {isAuthenticated ? loggedIn : loggedOut}
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
      isAuthenticated: state.auth.isAuthenticated,
      user: state.auth.currentUser
  }
}

export default App = connect(mapStateToProps, {})(App);