import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import Typical from 'react-typical'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://avatars1.githubusercontent.com/u/15957868?s=460&u=0c7bfe98e60a74ee427a1d053f3603d0c4848e04&v=4" className="App-logo shadowed" alt="logo" />
        <h1>Hi, I'm Jonas dos Santos</h1>
        <p>
          I'm a {' '}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'developer 💻',
              1500,
              'Brazilian student 🇧🇷',
              1500,
              'Open Sourcer ✅',
              1500,
              "designer 🖌️ (still trying xD) ",
              1500,
              "dreamer 🚀",
              3000,
            ]}
          />

        </p>

        <a href="https://github.com/bephrem1" target="_blank" rel="noopener noreferrer">
          <img src="images/logos/github.svg" height="30px" alt="GitHub - Social Link" draggable="false" />
        </a>
      </header>
    </div>
  );
}



export default App;
