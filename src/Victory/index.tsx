import React from 'react';
import { Link } from 'react-router-dom';

const Victory = () => {
  return (
    <div>
      <h2>You Win!</h2>
      <p>Play again!</p>
      <Link to="/">New Game</Link>
    </div>
  );
};

export default Victory;
