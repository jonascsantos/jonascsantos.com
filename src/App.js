import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Test from './Test.js';
import Test2 from './Test2.js';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Test} />
        <Route path="/Test2" component={Test2} />

        <div className="navigation">
          <img src={logo} className="logo" alt="logo Image" />
          <div className="navigation-sub">
            <a href="/" className="item">Test</a>
            <a href="/Test2" className="item">Test 2</a>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
