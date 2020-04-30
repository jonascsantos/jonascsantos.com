import React, { Component, useEffect, useState } from 'react';
import Helmet from 'react-helmet'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Menu } from '../components';
import { IconLogo } from './icons';
import styled from 'styled-components'
import { throttle } from '../utils'
import { theme, mixins, media } from '../styles';

const { colors, fontSizes, fonts, loaderDelay } = theme;

const Social = ({ isHome, ClickHandler }) => {
    const [isMounted, setIsMounted] = useState(!isHome);

    useEffect(() => {
        setTimeout(
            () =>
                setIsMounted(true)
            , 100,
        )
    });

    const timeout = isHome ? loaderDelay : 0;
    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome ? 'fadedown' : '';

    return (
        <TransitionGroup component={null}>
            {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                    <div className="icon-wrap flex row">
                        <a href="https://github.com/jonascsantos" onClick={() => ClickHandler('github')}>
                            <div className="flex shadowed translucent icon">
                                <ion-icon name="logo-github" color="dark"></ion-icon>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/jonascsantos" onClick={() => ClickHandler('linkedin')}>
                            <div className="flex shadowed translucent icon">
                                <ion-icon name="logo-linkedin" color="dark"></ion-icon>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/jonas.cass/" onClick={() => ClickHandler('instagram')}>
                            <div className="flex shadowed translucent icon">
                                <ion-icon name="logo-instagram" color="dark"></ion-icon>
                            </div>
                        </a>
                        <a href="https://twitter.com/jonascsantos_" onClick={() => ClickHandler('twitter')}>
                            <div className="flex shadowed translucent icon">
                                <ion-icon name="logo-twitter" color="dark"></ion-icon>
                            </div>
                        </a>
                        <a href="mailto:jonas.cassiano@hotmail.com" onClick={() => ClickHandler('email')}>
                            <div className="flex shadowed translucent icon">
                                <ion-icon name="at" color="dark"></ion-icon>
                            </div>
                        </a>
                    </div>
                </CSSTransition>
            )}
        </TransitionGroup>

    );
}

export default Social;
