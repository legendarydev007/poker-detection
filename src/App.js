import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';

import './styles/index.css';

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );
}

export default App;