import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;
