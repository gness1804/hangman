import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Main';
import Victory from '../Victory';
import Defeat from '../Defeat';
import './index.css';

function App() {
  const [word, setWord] = useState('');
  // TODO: add setting such as max word length, max number of  guesses
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
          <Route path="/">
            <Main word={word} setWord={setWord} totalGuesses={3} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
