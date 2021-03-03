import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  word: string;
}

const Defeat = ({ word }: Props) => {
  return (
    <div>
      <h2>You Lose!</h2>
      <p>
        The word was: <em>{word}</em>.
      </p>
      <Link to="/">New Game</Link>
    </div>
  );
};

export default Defeat;
