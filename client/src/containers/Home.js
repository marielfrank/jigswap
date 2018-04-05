import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = ({match}) => {
        
    const welcomeMessage = <h2>Please sign up or log in to start swapping puzzles!</h2>

    return (
        <div id="home">
            { !!localStorage.token ? <Redirect to="/puzzles" /> : welcomeMessage }
        </div>
    );
}

export default Home;