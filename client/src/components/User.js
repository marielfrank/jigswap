import React from 'react';
import PuzzleList from './PuzzleList';

const User = ({user}) => {
    return (
        <div id="user">
        <h2>Your account</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Puzzles you're sharing:</strong></p>
        <PuzzleList puzzles={user.puzzles} />
        </div>
    )
}
export default User;