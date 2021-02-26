import React from 'react';
import { v4 } from 'uuid';

interface Props {
  word: string;
}

const WordLine = ({ word }: Props) => {
  return (
    <div>
      {word.split('').map((letter) => (
        <div key={v4()}>{letter}</div>
      ))}
    </div>
  );
};

export default WordLine;
