import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'gatsby'

import links from '../constants/links'

const Navigation = ({ className, visible }) => {
  return (
    <aside className={className} visible={visible}>
      {links.map((link, index) => (
        <LinkButton>
          <LinkWrapper key={index} to={link.path}>
            <i key={`icon-${index}`}>{link.icon}</i>
            <h4>{link.text}</h4>
          </LinkWrapper>
        </LinkButton>
      ))}
    </aside>
  )
}

export default styled(Navigation)`
  padding: 1rem 2rem;
  background: white;
  height: 100%;

  ${breakpoint('mobile', 'tablet')`
  height: ${({ visible }) => (visible ? 'inherent' : '0')};
  padding: ${({ visible }) => (visible ? '2rem' : '0')};
`};

  ${breakpoint('tablet', 'desktop')`
  width:  ${({ visible }) => (visible ? '100%' : '0')};
  `};

  ${breakpoint('desktop')`
  
 `};
`
const LinkWrapper = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  margin-top: -3rem;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  h4 {
    font-size: 1.5rem;
  }
  ${breakpoint('tablet', 'desktop')`
  justify-content: space-around;
  width: 100%;
  i {
    display: none;
  }
  h4 {
    font-size: 1rem;
    margin-top: 2.25rem;
  }
  `};
`
const LinkButton = styled.button`
  outline: solid 2px white;
  background: lightgrey;
  padding: 2rem;
  width: 100%;
  height: 2rem;
  margin: 0.5rem auto;
  & :active,
  & :hover {
    background: gray;
  }
  & :active > * {
    color: firebrick;
  }

  ${breakpoint('tablet', 'desktop')`
    width: 110%;
    margin: 0.6rem -0.5rem ;
    padding: 1.4rem 1rem;
  `};
`
