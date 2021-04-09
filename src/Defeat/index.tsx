import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

interface Props {
  word: string;
}

const Defeat = ({ word }: Props) => {
  const history = useHistory();

  useEffect(() => {
    if (!word) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, []);

  if (!word) {
    return (
      <div className="defeat-no-word">
        <h2>No word! Redirecting back home.</h2>
      </div>
    );
  }

  return (
    <div className="defeat dark">
      <h2 className="defeat-heading">You Lose!</h2>
      <p>
        The word was: <em>{word}</em>.
      </p>
      <Link to="/">New Game</Link>
    </div>
  );
};

export default Defeat;
