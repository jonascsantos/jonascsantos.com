import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components'
import { theme } from '../styles';

const { loaderDelay, colors } = theme;

const StyledSocialContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;

const StyledSocialIcon = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #f6f6f6;
    cursor: pointer;
    height: 5em;
    margin: 0 15px;
    overflow: hidden;
    position: relative;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 2px 11px var(--box-shadow);
    transition: all 0.7s ease;
    opacity: 0.9;
    transition: all 0.7s ease;

    @media (min-width: 0px) and (max-width: 799px) {
        height: 2.5em;
    }

    &:hover{
        transform: scale(1.02);
        box-shadow: 0px 5px 20px ${colors.boxShadow};
        opacity: 1;
    }
`;



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

    return (
        <TransitionGroup component={null}>
            {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                    <StyledSocialContainer>
                        <a href="https://github.com/jonascsantos" onClick={() => ClickHandler('github')}>
                            <StyledSocialIcon> 
                                <ion-icon name="logo-github" color="dark"></ion-icon>
                            </StyledSocialIcon>
                        </a>
                        <a href="https://www.linkedin.com/in/jonascsantos" onClick={() => ClickHandler('linkedin')}>
                            <StyledSocialIcon> 
                                <ion-icon name="logo-linkedin" color="dark"></ion-icon>
                            </StyledSocialIcon>
                        </a>
                        <a href="https://www.instagram.com/jonas.cass/" onClick={() => ClickHandler('instagram')}>
                            <StyledSocialIcon> 
                                <ion-icon name="logo-instagram" color="dark"></ion-icon>
                            </StyledSocialIcon>
                        </a>
                        <a href="https://twitter.com/jonascsantos_" onClick={() => ClickHandler('twitter')}>
                            <StyledSocialIcon> 
                                <ion-icon name="logo-twitter" color="dark"></ion-icon>
                            </StyledSocialIcon>
                        </a>
                        <a href="mailto:dev@jonascsantos.com" onClick={() => ClickHandler('email')}>
                            <StyledSocialIcon> 
                                <ion-icon name="at" color="dark"></ion-icon>
                            </StyledSocialIcon>
                        </a>
                    </StyledSocialContainer>
                </CSSTransition>
            )}
        </TransitionGroup>

    );
}

export default Social;
