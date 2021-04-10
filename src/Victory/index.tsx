import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Victory = () => {
  return (
    <div className="victory dark">
      <h2 className="victory-heading">You Win!</h2>
      <p className="victory-play-again-message">Play again!</p>
      <Link className="victory-back-home-link" to="/">
        New Game
      </Link>
    </div>
  );
};

export default Victory;
