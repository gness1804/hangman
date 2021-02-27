import React from 'react';
import { v4 } from 'uuid';

interface Props {
  word: string;
  successfulLetters: string[];
}

const WordLine = ({ word, successfulLetters }: Props) => {
  return (
    <div>
      {word.split('').map((letter) => {
        if (successfulLetters.includes(letter)) {
          return <div key={v4()}>{letter}</div>;
        } else {
          return <div key={v4()}>__</div>;
        }
      })}
    </div>
  );
};

export default WordLine;
