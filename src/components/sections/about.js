import React, {  useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components'
import Typical from 'react-typical'
import { theme } from '../../styles';

const { loaderDelay } = theme;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: middle;
`;

const StyledPhotoContainer = styled.div` 
    flex: 1;
    margin-bottom: 1em;
`;

const About = ({ isHome }) => {
    const [isMounted, setIsMounted] = useState(!isHome);

    useEffect(() => {
        setTimeout(
            () =>
                setIsMounted(true)
            , 100
        )
    });

    const timeout = isHome ? loaderDelay : 0;
    const fadeClass = isHome ? 'fade' : '';
    const fadeUpClass = isHome ? 'fadeup' : '';

    return (
        <TransitionGroup component={null}>
            {isMounted && (
                <CSSTransition classNames={fadeUpClass} timeout={timeout * 18}>
                    <StyledContainer>

                        <StyledPhotoContainer>

                            <img
                                src="./images/me.jpeg"
                                className="Photo shadowed"
                                alt="logo"
                            />
                        </StyledPhotoContainer>
                        <h1>Hi, I'm Jonas dos Santos</h1>
                        <p>
                            I'm {' '}
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'a Fullstack Developer 💻',
                                    1500,
                                    'an Open Sourcer ✅',
                                    1500,
                                    'a music lover 🎶🎸',
                                    1500,
                                    "a travel freak 🌎",
                                    1500,
                                    "a dreamer 🚀",
                                    3000,
                                ]}
                            />
                        </p>
                    </StyledContainer>
                </CSSTransition>
            )}
        </TransitionGroup>

    );
}

export default About;


