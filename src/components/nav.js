import React, { Component, useEffect, useState } from 'react';
import Helmet from 'react-helmet'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { IconLogo } from './icons';
import styled from 'styled-components'
import { throttle } from '../utils'
import { theme, mixins, media } from '../styles';

const { colors, fontSizes, fonts, loaderDelay } = theme;

// const StyledNav = styled.nav`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   font-weight: 700;
//   font-size: 1rem;
//   margin-top: 20px;
//   margin-bottom: 20px;
// `;

const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledLi = styled.li`
    margin-right: 2rem;
`;

//-----------------

const StyledContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.navy};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
  box-shadow: ${props =>
        props.scrollDirection === 'up' ? `0 10px 30px -10px ${colors.shadowNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;

const StyledNav = styled.nav`
  ${mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${colors.lightestSlate};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`;

const StyledLogo = styled.div`
  ${mixins.flexCenter};
  a {
    display: block;
    color: ${colors.black};
    width: 42px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: ${colors.black};
      }
    }
    svg {
      fill: none;
      transition: ${theme.transition};
      user-select: none;
    }
  }
`;
const StyledHamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div`
  background-color: ${colors.green};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${colors.green};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
  }
`;
const StyledLink = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const StyledList = styled.ol`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.smish};
  counter-increment: item 1;
  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${colors.green};
    font-size: ${fontSizes.xs};
  }
`;
const StyledListLink = styled.a`
  padding: 12px 10px;
`;
const StyledResumeButton = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.smish};
`;

//-----------------


const Nav = (props) => {
    const [isMounted, setIsMounted] = useState(!props.isHome);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('none');
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        setTimeout(
            () =>
                setIsMounted(true),
            () => {
                window.addEventListener('scroll', () => throttle(handleScroll()));
                window.addEventListener('resize', () => throttle(handleResize()));
            }
            , 100,
        )
        return function cleanup() {
            window.removeEventListener('scroll', () => handleScroll());
            window.removeEventListener('resize', () => handleResize());
        };
    });

    const DELTA = 5;
    const navHeight = 100;
    const { isHome } = props;
    const timeout = isHome ? loaderDelay : 0;
    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome ? 'fadedown' : '';
    const navLinks = [
        {
          name: 'About',
          url: '/#about',
        },
        {
          name: 'Experience',
          url: '/#jobs',
        },
        {
          name: 'Work',
          url: '/#projects',
        },
        {
          name: 'Contact',
          url: '/#contact',
        },
      ];

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleScroll = () => {
        const fromTop = window.scrollY;

        // Make sure they scroll more than DELTA
        if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
            return;
        }
        if (fromTop < DELTA) {
            setScrollDirection('none');
        } else if (fromTop > lastScrollTop && fromTop > navHeight) {
            if (scrollDirection !== 'down') {
                setScrollDirection('down');
            }
        } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
            if (scrollDirection !== 'up') {
                setScrollDirection('up');
            }
        }
        setLastScrollTop(fromTop);
    };

    const handleResize = () => {
        if (window.innerWidth > 768 && menuOpen) {
            toggleMenu();
        }
    };

    // return (
    //     <header className="header">
    //         <StyledNav>
    //             <StyledUl>
    //                 <StyledLi>
    //                     <button class="nav__toggler nav__toggler--close">
    //                         <span></span>
    //                         <span></span>
    //                     </button>
    //                 </StyledLi>
    //                 <StyledLi>

    //                     <a aria-current="page" class="" href="/">Home</a>
    //                 </StyledLi>
    //                 <StyledLi>
    //                     <a href="/projects/">Projects</a></StyledLi><StyledLi><a href="/about/">About</a>
    //                 </StyledLi>
    //                 <StyledLi>
    //                     <a href="https://blog.jonascsantos.com/" rel="noopener noreferrer" target="_blank">Blog</a>
    //                 </StyledLi>
    //                 <StyledLi>
    //                     <a href="/contact/">Contact</a>
    //                 </StyledLi>
    //             </StyledUl>
    //             <button class="nav__toggler nav__toggler--toggle">
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //             </button>
    //         </StyledNav>
    //     </header>
    // );
    return (
        <StyledContainer scrollDirection={scrollDirection}>
            {/* <Helmet>
                <body className={menuOpen ? 'blur' : ''} />
            </Helmet> */}
            <StyledNav>
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames={fadeClass} timeout={timeout}>
                            <StyledLogo tabindex="-1">
                                    <a href="/" aria-label="home">
                                        <IconLogo />
                                    </a>
                            </StyledLogo>
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames={fadeClass} timeout={timeout}>
                            <StyledHamburger onClick={toggleMenu}>
                                <StyledHamburgerBox>
                                    <StyledHamburgerInner menuOpen={menuOpen} />
                                </StyledHamburgerBox>
                            </StyledHamburger>
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <StyledLink>
                    <StyledList>
                        <TransitionGroup component={null}>
                            {isMounted &&
                                navLinks &&
                                navLinks.map(({ url, name }, i) => (
                                    <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                                        <StyledListItem
                                            key={i}
                                            style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                                            <StyledListLink to={url}>{name}</StyledListLink>
                                        </StyledListItem>
                                    </CSSTransition>
                                ))}
                        </TransitionGroup>
                    </StyledList>

                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                                <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                                    <StyledResumeButton
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="nofollow noopener noreferrer">
                                        Resume
                  </StyledResumeButton>
                                </div>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </StyledLink>
            </StyledNav>

            {/* <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} /> */}
        </StyledContainer>
    );
}

export default Nav;
