import React, { useEffect, useState } from 'react';
import WordLine from './WordLine';
import axios from 'axios';

const Main = () => {
  const [word, setWord] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWord();
  }, []);

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
      setWord(word);
    } catch (error) {
      return undefined;
    }
  };

  return (
    <div>
      {loading ? <p>Retrieving your word...</p> : <WordLine word={word} />}
    </div>
  );
};

export default Main;
