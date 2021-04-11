import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Main';
import Victory from '../Victory';
import Defeat from '../Defeat';
import Options from '../Options';
import './index.css';

function App() {
  const [word, setWord] = useState('');
  const [maxWordLength, setMaxWordLength] = useState(6);
  const [totalGuesses, setTotalGuesses] = useState(6);

  const getStoredTotalGuesses = (): number | undefined => {
    const res = sessionStorage.getItem('hangman-total-guesses');
    if (res) return parseInt(res);
    return undefined;
  };

  const getStoredMaxWordLength = (): number | undefined => {
    const res = sessionStorage.getItem('hangman-max-word-length');
    if (res) return parseInt(res);
    return undefined;
  };

  const restoreDefaults = (): void => {
    sessionStorage.setItem('hangman-max-word-length', '6');
    setMaxWordLength(6);

    sessionStorage.setItem('hangman-total-guesses', '6');
    setTotalGuesses(6);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hangman!</h1>
        </header>
        <div className="core-component">
          <Switch>
            <Route path="/victory">
              <Victory />
            </Route>
            <Route path="/defeat">
              <Defeat word={word} />
            </Route>
            <Route path="/options">
              <Options
                totalGuesses={getStoredTotalGuesses() || totalGuesses}
                setTotalGuesses={setTotalGuesses}
                maxWordLength={getStoredMaxWordLength() || maxWordLength}
                setMaxWordLength={setMaxWordLength}
                restoreDefaults={restoreDefaults}
              />
            </Route>
            <Route path="/">
              <Main
                word={word}
                setWord={setWord}
                totalGuesses={getStoredTotalGuesses() || totalGuesses}
                maxWordLength={getStoredMaxWordLength() || maxWordLength}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
