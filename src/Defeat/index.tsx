import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.css';

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

  return (
    <div className="defeat dark">
      <h2 className="defeat-heading">
        {word ? 'You Lose!' : 'No word! Redirecting back home.'}
      </h2>
      {word && (
        <p className="defeat-word-display">
          The word was: <em>{word}</em>.
        </p>
      )}
      <Link to="/">{word ? 'New Game' : 'Back Home'}</Link>
    </div>
  );
};

export default Defeat;
