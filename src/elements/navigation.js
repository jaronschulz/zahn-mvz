import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'gatsby'

import links, { legalLinks } from '../constants/links'

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
      {legalLinks.map((link, index) => (
        <LinkButton className="legal">
          <LinkWrapper key={`legal-${index}`} to={link.path}>
            <i key={`icon-${index}`}>{link.icon}</i>
            <h4>{link.text}</h4>
          </LinkWrapper>
        </LinkButton>
      ))}
    </aside>
  )
}

export default styled(Navigation)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
`
const LinkWrapper = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  margin-top: -3rem;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  h4 {
    font-size: 1.4rem;
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
  ${breakpoint('desktop')`
  .legal {
    display: none;
  }
  `}
`
const LinkButton = styled.button`
  outline: solid 2px white;
  background: lightgrey;
  padding: 2.2rem;
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

  ${breakpoint('mobile', 'tablet')`
  &.legal{
    background: black;
    & h4 {
      color: white;
    };
    & i {
      color: white;
    };
  }
`};

  ${breakpoint('tablet', 'desktop')`
    width: 110%;
    margin: 0.6rem -0.5rem ;
    padding: 2rem 1rem;
    &.legal {
      display: none;
    };
  `};

  ${breakpoint('desktop')`
  padding: 1.8rem;
  height: 2rem;
  &.legal {
    display: none;
  };
 `};
`
