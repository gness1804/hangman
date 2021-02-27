import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 } from 'uuid';
import WordLine from '../WordLine';
import './index.css';

const Main = () => {
  const [word, setWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [letter, setLetter] = useState('');
  const [successfulLetters, setSuccessfulLetters] = useState<string[]>([]);
  const [failedLetters, setFailedLetters] = useState<string[]>([]);

  const totalGuesses = 6;

  useEffect(() => {
    getWord();
  }, []);

  useEffect(() => {
    checkGameStatus();
  });

  const getWord = async (): Promise<string | undefined> => {
    try {
      setLoading(true);
      const res = await axios.get(
        process.env.WORD_ENDPOINT || 'http://localhost:8080',
      );
      setLoading(false);
      const {
        data: { word },
      } = res;
      setWord(word.toLowerCase());
    } catch (error) {
      return undefined;
    }
  };

  const verifyLetter = (): void => {
    if (!letter) {
      alert('Error: you must enter a letter.');
      return;
    }
    if (word.includes(letter))
      setSuccessfulLetters((arr) => [...arr, letter.toLowerCase()]);
    else setFailedLetters((arr) => [...arr, letter.toLowerCase()]);
    setLetter('');
  };

  const checkGameStatus = (): void => {
    if (loading) return;
    if (failedLetters.length > totalGuesses) {
      alert(`You lose! The word was: ${word}.`);
      return;
    }
    if (
      successfulLetters.length > 0 &&
      successfulLetters.length === word.length
    )
      alert('You win!');
  };

  const handleKeydown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') verifyLetter();
  };

  return (
    <div className="main">
      {loading ? (
        <p>Retrieving your word...</p>
      ) : (
        <WordLine word={word} successfulLetters={successfulLetters} />
      )}
      {!loading && (
        <div>
          <p>You have {totalGuesses - failedLetters.length} guesses left.</p>
          <div className="main-inputs-container">
            <label
              htmlFor="letterInput"
              className="main-inputs-container-label"
            >
              Enter a letter:
            </label>
            <input
              id="letterInput"
              type="text"
              className="main-inputs-container-input-field"
              size={1}
              minLength={1}
              maxLength={1}
              onChange={(e) => setLetter(e.target.value.toLowerCase())}
              onKeyDown={(e) => handleKeydown(e)}
              value={letter}
            />
            <button
              onClick={verifyLetter}
              className="main-inputs-container-verify-button"
            >
              Verify Letter
            </button>
          </div>
          <p>Failed Letters:</p>
          <div className="main-failed-letters-container">
            {failedLetters.sort().map((_letter) => (
              <div key={v4()}>{_letter}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
