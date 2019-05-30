import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";


import Header from './components/header/header'
import Home from './components/home/home'
import Belatrix from './components/belatrix/belatrix';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/filter' component={Belatrix} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
