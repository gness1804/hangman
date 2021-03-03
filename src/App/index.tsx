import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Main';
import Victory from '../Victory';
import Defeat from '../Defeat';
import Options from '../Options';
import './index.css';

function App() {
  const [word, setWord] = useState('');
  // const [maxWordLength, setMaxWordLength] = useState(null);
  const [totalGuesses, setTotalGuesses] = useState(6);
  // TODO: fix bug with losing leading to defeat screen with blank word
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hangman!</h1>
        </header>
        <Switch>
          <Route path="/victory">
            <Victory />
          </Route>
          <Route path="/defeat">
            <Defeat word={word} />
          </Route>
          <Route path="/options">
            <Options
              totalGuesses={totalGuesses}
              setTotalGuesses={setTotalGuesses}
            />
          </Route>
          <Route path="/">
            <Main word={word} setWord={setWord} totalGuesses={totalGuesses} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
