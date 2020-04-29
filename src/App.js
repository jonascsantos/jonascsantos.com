import React, { useEffect, useState } from 'react';
import './App.css';
import Typical from 'react-typical'
import ReactGa from 'react-ga'
import { useLocation } from "react-router-dom";
import { Loader, Nav } from './components';
import styled from 'styled-components'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const isHome = true;
  //const isHome = location.pathname === '/'; 
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    // if (location.hash) {
    //   const id = location.hash.substring(1); // location.hash without the '#'
    //   setTimeout(() => {
    //     const el = document.getElementById(id);
    //     if (el) {
    //       el.scrollIntoView();
    //       el.focus();
    //     }
    //   }, 0);
    // }
  }, [isLoading]);

  useEffect(() => {
    ReactGa.initialize('UA-152578899-1')
    ReactGa.pageview('/')
  }, [])

  const ClickHandler = (name) => {
    ReactGa.event({
      category: name,
      action: 'Clicked'
    })
  }

  return (
    <div className="App">
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
          <StyledContent>
            <Nav isHome={isHome} ClickHandler={() => ClickHandler('resume')}/>
            <main className="Main">
              <div>
                <img
                  src="./images/me.jpeg"
                  className="Photo shadowed"
                  alt="logo"
                />
              </div>
              <h1>Hi, I'm Jonas dos Santos</h1>
              <p>
                I'm {' '}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    'a Fullstack Developer 💻',
                    1500,
                    'a Brazilian student 🇧🇷',
                    1500,
                    'an Open Sourcer ✅',
                    1500,
                    "a designer 🖌️ (still trying xD)",
                    1500,
                    "a dreamer 🚀",
                    3000,
                  ]}
                />
              </p>
              <div class="icon-wrap flex row">
                <a href="https://github.com/jonascsantos" onClick={() => ClickHandler('github')}>
                  <div class="flex shadowed translucent icon">
                    <ion-icon name="logo-github" color="dark"></ion-icon>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/jonascsantos" onClick={() => ClickHandler('linkedin')}>
                  <div class="flex shadowed translucent icon">
                    <ion-icon name="logo-linkedin" color="dark"></ion-icon>
                  </div>
                </a>
                <a href="https://www.instagram.com/jonas.cass/" onClick={() => ClickHandler('instagram')}>
                  <div class="flex shadowed translucent icon">
                    <ion-icon name="logo-instagram" color="dark"></ion-icon>
                  </div>
                </a>
                <a href="https://twitter.com/jonascsantos_" onClick={() => ClickHandler('twitter')}>
                  <div class="flex shadowed translucent icon">
                    <ion-icon name="logo-twitter" color="dark"></ion-icon>
                  </div>
                </a>
                <a href="mailto:jonas.cassiano@hotmail.com" onClick={() => ClickHandler('email')}>
                  <div class="flex shadowed translucent icon">
                    <ion-icon name="at" color="dark"></ion-icon>
                  </div>
                </a>
              </div>
            </main>
          </StyledContent>
        )}
    </div>
  );
}



export default App;
