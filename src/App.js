import React, { useEffect, useState } from 'react';
import './App.css';
import ReactGa from 'react-ga'
import { Loader, Nav, Social, About } from './components';
import styled from 'styled-components'
import { GlobalStyle } from '../src/styles'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { theme, mixins, media } from '../src/styles';

const { colors, fontSizes, fonts, loaderDelay } = theme;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const isHome = true;
  //const isHome = location.pathname === '/'; 
  const [isMounted, setIsMounted] = useState(!isHome);
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
    setTimeout(
      () =>
        setIsMounted(true)
      , 100,
    )
  });

  useEffect(() => {
    ReactGa.initialize('UA-152578899-1', {
        gaOptions: {
          siteSpeedSampleRate: 100
        }
    })
    ReactGa.pageview('/')
  }, [])

  const ClickHandler = (name) => {
    ReactGa.event({
      category: name,
      action: 'Clicked'
    })
  }

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeUpClass = isHome ? 'fadeup' : '';

  return (
    <div className="App">

      <GlobalStyle />

      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
          <StyledContent>
            <Nav isHome={isHome} ClickHandler={ClickHandler} />
            <TransitionGroup component={null}>
              {isMounted && (<CSSTransition classNames={fadeClass} timeout={timeout}>
                <main className="Main">
                  <About isHome={isHome}/>
                  <Social isHome={isHome} ClickHandler={ClickHandler} />
                </main>
              </CSSTransition>
              )}
            </TransitionGroup>
          </StyledContent>
        )}
    </div>
  );
}



export default App;
