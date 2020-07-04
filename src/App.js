import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default App;
