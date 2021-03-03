import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { v4 } from 'uuid';
import WordLine from '../WordLine';
import './index.css';

interface Props {
  word: string;
  setWord: Dispatch<SetStateAction<string>>;
  totalGuesses: number;
}

const Main = ({ word, setWord, totalGuesses = 6 }: Props) => {
  const [loading, setLoading] = useState(false);
  const [letter, setLetter] = useState('');
  const [successfulLetters, setSuccessfulLetters] = useState<string[]>([]);
  const [failedLetters, setFailedLetters] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    getWord();
    return () => {
      setWord('');
      setFailedLetters([]);
      setSuccessfulLetters([]);
    };
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
      setFailedLetters([]);
      setSuccessfulLetters([]);
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
    if (failedLetters.length >= totalGuesses) {
      history.push('defeat');
    } else if (
      successfulLetters.length > 0 &&
      successfulLetters.length === word.length
    ) {
      history.push('/victory');
    }
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
          <button onClick={getWord}>New Word</button>
          <Link className="main-options-link" to="/options">
            Options
          </Link>
        </div>
      )}
    </div>
  );
};

export default Main;
