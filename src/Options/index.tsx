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
      <label htmlFor="totalGuesses" className="options-main-label">
        Total Guesses
      </label>
      <select
        id="totalGuesses"
        defaultValue={totalGuesses}
        onChange={(e) => setTotalGuesses(+e.target.value)}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
      <Link className="options-back-home-link" to="/">
        Back to Game
      </Link>
    </div>
  );
};

export default Options;
