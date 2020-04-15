import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import Typical from 'react-typical'

function App() {
  return (
    <div className="App">
      <div className="App-header">
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
              "designer 🖌️ (still trying xD)",
              1500,
              "dreamer 🚀",
              3000,
            ]}
          />
        </p>
      <div class="icon-wrap flex row">
        <a href="https://github.com/jonascsantos">
          <div class="flex shadowed translucent icon">
            <ion-icon name="logo-github"></ion-icon>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jonascsantos">
          <div class="flex shadowed translucent icon">
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
        </a>
        <a href="https://www.instagram.com/jonas.cass/">
          <div class="flex shadowed translucent icon">
          <ion-icon name="logo-instagram"></ion-icon>
          </div>
        </a>
        <a href="https://twitter.com/jonascsantos_">
          <div class="flex shadowed translucent icon">
          <ion-icon name="logo-twitter"></ion-icon>
          </div>
        </a>
      </div>
      </div>
    </div>
  );
}



export default App;
