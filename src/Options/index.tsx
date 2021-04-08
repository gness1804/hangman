import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

interface Props {
  totalGuesses: number;
  setTotalGuesses: Dispatch<SetStateAction<number>>;
  maxWordLength: number;
  setMaxWordLength: Dispatch<SetStateAction<number>>;
}

const Options = ({
  totalGuesses,
  setTotalGuesses,
  maxWordLength,
  setMaxWordLength,
}: Props) => {
  const restoreDefaults = (): void => {
    setMaxWordLength(6);
    setTotalGuesses(6);
  };

  return (
    <div className="options dark">
      <h2 className="options-heading">Set Options</h2>
      <div className="options-total-guesses-container">
        <label htmlFor="totalGuesses" className="options-total-guesses-label">
          Total Guesses
        </label>
        <select
          id="totalGuesses"
          value={totalGuesses}
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
      </div>
      <div className="options-max-word-length-container">
        <label
          htmlFor="maxWordLength"
          className="options-max-word-length-label"
        >
          Max Word Length:
        </label>
        <select
          id="maxWordLength"
          value={maxWordLength}
          onChange={(e) => setMaxWordLength(+e.target.value)}
        >
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
      </div>
      <button className="utility-button" onClick={restoreDefaults}>
        Restore Defaults
      </button>
      <Link className="options-back-home-link" to="/">
        Back to Game
      </Link>
    </div>
  );
};

export default Options;
