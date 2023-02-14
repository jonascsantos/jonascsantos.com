import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'
import { theme, mixins, media } from '../styles'
const { colors, fontSizes, fonts } = theme

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${media.tablet`display: block;`};
`
const Sidebar = styled.aside`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.gray};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${fonts.SFMono};
  box-shadow: -10px 0px 30px -15px ${colors.shadowNavy};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`
const NavLinks = styled.nav`
  ${mixins.flexBetween};
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: ${colors.black};
`
const NavList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${fontSizes.lg};
  ${media.thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.md};
  `};
  ${media.tiny`font-size: ${fontSizes.smish};`};
`
const NavLink = styled(Link)`
  ${mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`

const ResumeLink = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
`;

const navLinks = [
  // {
  //   name: 'Blog (Under Development)',
  //   url: 'https://blog.jonascsantos.com'
  // }
  // {
  //     name: 'Projects',
  //     url: '/#projects',
  // },
  // {
  //     name: 'Experience',
  //     url: '/#jobs',
  // },
  // {
  //     name: 'Blog',
  //     url: '/#blog',
  // },
  // {
  //     name: 'Contact',
  //     url: 'https://jonascsantos.com',
  // },
]

const Menu = ({ menuOpen, toggleMenu, ClickHandler }) => {
  const handleMenuClick = e => {
    const target = e.target
    const isLink = target.hasAttribute('href')

    if (isLink) {
      toggleMenu()
    }
  }

  return (
    <Router>
      <StyledContainer
        menuOpen={menuOpen}
        onClick={handleMenuClick}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 1 : -1}
      >
        <Sidebar>
          <NavLinks>
            <NavList>
              {navLinks &&
                navLinks.map(({ url, name }, i) =>
                  /^https?:\/\//.test(url) ? (
                    <a href={url} key={i} onClick={() => ClickHandler(name)} >{name}</a>
                    
                  ) : (
                    <NavListItem key={i}>
                      <NavLink to={url}>{name}</NavLink>
                    </NavListItem>
                  )
                )}
            </NavList>
            <ResumeLink
              href='/resume.pdf'
              target='_blank'
              rel='nofollow noopener noreferrer'
              onClick={() => ClickHandler('resume')}
            >
              Resume
            </ResumeLink>
          </NavLinks>
        </Sidebar>
      </StyledContainer>
    </Router>
  )
}

export default Menu
