import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [word, setWord] = useState('');

  useEffect(() => {
    getWord();
  }, []);

  const getWord = async (): Promise<string | undefined> => {
    try {
      const res = await axios.get(
        process.env.WORD_ENDPOINT || 'http://localhost:8080',
      );
      const {
        data: { word },
      } = res;
      setWord(word);
    } catch (error) {
      return undefined;
    }
  };

  return (
    <div>
      <p>The word is... {word}</p>
    </div>
  );
};

export default Main;
