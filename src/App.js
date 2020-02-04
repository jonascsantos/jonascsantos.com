import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Router, Link } from 'react-router-dom';
import Test from '.Test.js';
import Test2 from '.Test2.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="navigation">
        <img src={logo} className="logo" alt="logo Image" />
        <div className="navigation-sub">
          <a href="" className="item">Test</a>
          <a href="" className="item">Test 2</a>
        </div>
      </div>
    </div>
  );
}

export default App;
