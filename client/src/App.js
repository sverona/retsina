import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';

import Word from './views/Word.jsx';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <div>Hello!</div>}></Route>
          <Route path="/word/:word" component={Word}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
