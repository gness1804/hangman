import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { v4 } from 'uuid';
import WordLine from '../WordLine';
import { arraysSameValues } from '../utils/arraysReallyEqual';
import './index.css';
import { WordService } from '../services/wordService';

interface Props {
  word: string;
  setWord: Dispatch<SetStateAction<string>>;
  totalGuesses: number;
  maxWordLength: number;
}

const Main = ({ word, setWord, totalGuesses, maxWordLength }: Props) => {
  const [isError, setIsError] = useState(false);
  const [letter, setLetter] = useState('');
  const [successfulLetters, setSuccessfulLetters] = useState<string[]>([]);
  const [failedLetters, setFailedLetters] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    getWord();
    return () => {
      setFailedLetters([]);
      setSuccessfulLetters([]);
    };
  }, []);

  useEffect(() => {
    checkGameStatus();
  });

  const getWord = async (): Promise<string | undefined> => {
    setIsError(false);
    const isDebugMode = process.env.REACT_APP_MODE === 'debug';
    if (isDebugMode) {
      // enter in a test word to debug
      const word = prompt('Enter in a test word.');
      if (word && typeof word === 'string' && word.length > 1) {
        setWord(word.toLowerCase());
        setFailedLetters([]);
        setSuccessfulLetters([]);
      } else {
        alert(
          'Error: you must enter in a valid word consisting of at least two letters. Please reload the page and try again.',
        );
      }
    } else {
      // a random word is generated for the user.
      try {
        const wordService = new WordService(maxWordLength);
        wordService.setNewWord();
        const _word = wordService.word;
        setWord(_word.toLowerCase());
        setFailedLetters([]);
        setSuccessfulLetters([]);
      } catch (error) {
        setIsError(true);
        return undefined;
      }
    }
  };

  const verifyLetter = (): void => {
    if (!letter || !letter.match(/[a-zA-Z]/)) {
      alert('Error: you must enter a letter.');
      setLetter('');
      return;
    }
    if (word.includes(letter)) {
      setSuccessfulLetters((arr) => [...arr, letter.toLowerCase()]);
    } else if (failedLetters.includes(letter)) {
      alert('Oops! You have already guessed this letter. Please try again.');
      setLetter('');
    } else setFailedLetters((arr) => [...arr, letter.toLowerCase()]);
    setLetter('');
  };

  const checkGameStatus = (): void => {
    const wordUniqueLetters = new Set([...word.split('')]);
    if (failedLetters.length >= totalGuesses) {
      history.push('defeat');
    } else if (
      successfulLetters.length > 0 &&
      arraysSameValues(successfulLetters, Array.from(wordUniqueLetters))
    ) {
      history.push('/victory');
    }
  };

  const handleKeydown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') verifyLetter();
  };

  if (isError) {
    return (
      <div className="main">
        <h2 className="error">
          Something went wrong fetching your word! Please try again later.
        </h2>
        <button
          className="utility-button"
          onClick={() => {
            history.push('/');
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="main">
      <WordLine word={word} successfulLetters={successfulLetters} />
      <div className="main-container">
        <div className="main-top-items-container dark">
          <h2 className="main-total-guesses">
            You have {totalGuesses - failedLetters.length} guesses left.
          </h2>
          <div className="main-inputs-container">
            <label
              htmlFor="letterInput"
              className="main-inputs-container-label main-central-part-label"
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
              className="main-inputs-container-verify-button utility-button"
            >
              Verify Letter
            </button>
          </div>
          <div className="main-failed-letters-container">
            <p className="main-central-part-label main-failed-letters-label">
              Failed Letters:
            </p>
            {failedLetters.length ? (
              <div className="main-failed-letters-list">
                {failedLetters.sort().map((_letter) => (
                  <div key={v4()} className="main-failed-letter">
                    {_letter}
                  </div>
                ))}
              </div>
            ) : (
              <p>None yet! Let&apos;s go for the win!</p>
            )}
          </div>
        </div>
        <div className="main-bottom-items-container light">
          <button
            onClick={getWord}
            className="main-new-word-button utility-button"
          >
            New Word
          </button>
          <Link className="main-options-link" to="/options">
            Options
          </Link>
          <p className="main-reset-warning">
            (Going here will reset the word and your guesses.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
