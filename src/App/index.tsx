import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Main';
import Victory from '../Victory';
import './index.css';

function App() {
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
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
