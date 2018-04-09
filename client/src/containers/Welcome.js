import React from 'react';
import { Link} from 'react-router-dom';

const Home = ({match}) => {
        
    const welcomeMessage = <h2>Please <Link to="/signup" >sign up</Link> or <Link to="/login" >log in</Link> to start swapping puzzles!</h2>

    return (
        <div id="home">
            { welcomeMessage }
        </div>
    );
}

export default Home;