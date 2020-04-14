import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typical from 'react-typical'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I'm Jonas dos Santos</h1>
        <p>
          I'm a {' '}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'developer ',
              1500,
              'Brazilian student',
              1500,
              'Open Sourcer',
              1500,
              "designer (like a 6.2/10 xD)",
              1500,
              "dreamer",
              2000,


            ]}
          />

        </p>
      </header>
    </div>
  );
}

export default App;
