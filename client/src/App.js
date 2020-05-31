import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Container from './components/Container';


function App() {
  return (
    <div className="App">
      <Router>

      <Header />
      <Container />
      </Router>
    </div>
  );
}

export default App;
