import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 } from 'uuid';
import WordLine from '../WordLine';

const Main = () => {
  const [word, setWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [letter, setLetter] = useState('');
  const [successfulLetters, setSuccessfulLetters] = useState<string[]>([]);
  const [failedLetters, setFailedLetters] = useState<string[]>([]);

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
    if (word.includes(letter))
      setSuccessfulLetters((arr) => [...arr, letter.toLowerCase()]);
    else setFailedLetters((arr) => [...arr, letter.toLowerCase()]);
    setLetter('');
  };

  const checkGameStatus = (): void => {
    if (loading) return;
    if (failedLetters.length > 6) alert('You lose!');
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
    <div>
      {loading ? (
        <p>Retrieving your word...</p>
      ) : (
        <WordLine word={word} successfulLetters={successfulLetters} />
      )}
      {!loading && (
        <div>
          <label htmlFor="letterInput">Enter a letter:</label>
          <input
            id="letterInput"
            type="text"
            size={1}
            minLength={1}
            maxLength={1}
            onChange={(e) => setLetter(e.target.value.toLowerCase())}
            onKeyDown={(e) => handleKeydown(e)}
            value={letter}
          />
          <button onClick={verifyLetter}>Verify Letter</button>
          {failedLetters.sort().map((_letter) => (
            <div key={v4()}>{_letter}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
