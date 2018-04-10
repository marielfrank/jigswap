import React from 'react';
import { Link} from 'react-router-dom';

const Home = ({match}) => {
        
    return (
        <div id="home">
            <h2>Welcome to Jigswap, a community devoted to sharing jigsaw puzzles.</h2>
            <p>Please <Link to="/signup" >sign up</Link> or <Link to="/login" >log in</Link> to start swapping puzzles!</p>
        </div>
    );
}

export default Home;