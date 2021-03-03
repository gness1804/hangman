import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

interface Props {
  totalGuesses: number;
  setTotalGuesses: Dispatch<SetStateAction<number>>;
}

const Options = ({ totalGuesses, setTotalGuesses }: Props) => {
  return (
    <div>
      <h2 className="options">Set Options</h2>
      <label htmlFor="totalGuesses">Total Guesses</label>
      <input
        id="totalGuesses"
        type="number"
        defaultValue={totalGuesses}
        onChange={(e) => setTotalGuesses(+e.target.value)}
      />
      <Link className="options-back-home-link" to="/">
        Back to Game
      </Link>
    </div>
  );
};

export default Options;
