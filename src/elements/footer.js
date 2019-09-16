import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'gatsby'

import { legalLinks } from '../constants/links'

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      {legalLinks.map((link, index) => (
        <FooterLink key={index} to={link.path}>
          <i>{link.icon}</i>
          <h4>{link.text}</h4>
        </FooterLink>
      ))}
    </footer>
  )
}

export default styled(Footer)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  background: black;
  width: 100vw;
  height: 4rem;
  h1 {
    margin-left: 2rem;
    color: white;
  }
  ${breakpoint('mobile', 'tablet')`
  display: none;
`};
`
const FooterLink = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 2rem;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  h4 {
    font-size: 1.5rem;
  }
`
