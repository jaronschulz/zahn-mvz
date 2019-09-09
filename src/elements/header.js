import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Menu } from 'styled-icons/material'
import { Tooth } from 'styled-icons/fa-solid'

const Header = ({ className, handleClick }) => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <header className={className}>
      <MenuButton onClick={handleClick}>
        <MenuIcon aria-hidden="true" />
      </MenuButton>

      <CompanyLogo to="/">
        <ToothIcon aria-hidden="true" />
        <h1>{site.siteMetadata.title}</h1>
      </CompanyLogo>
      <Headline>{site.siteMetadata.description}</Headline>
    </header>
  )
}

export default styled(Header)`
  position: fixed;
  top: 0;
  background: darkgrey;
  width: 100vw;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuIcon = styled(Menu)`
  width: 2.7rem;
`

const MenuButton = styled.button`
  margin-left: 2rem;
  border: none;
  & :focus,
  & :active {
    outline: none;
  }
  & :hover,
  & :active {
    color: red;
  }
  ${breakpoint('desktop')`
  display: none;
  `};
`

const ToothIcon = styled(Tooth)`
  width: 2rem;
  margin-right: -3rem;
  ${breakpoint('mobile', 'tablet')`
  width: 2rem;
  margin-right: 2rem;
  `};
  ${breakpoint('tablet', 'desktop')`
  width: 1.5rem;
  `};
`

const CompanyLogo = styled(props => <Link {...props} />)`
  display: flex;
  justify-content: space-around;
  margin: 0;
  text-decoration: none;
  color: black;
  width: 19rem;
  h1 {
    font-size: 2.3rem;
    margin-left: 1rem;
  }
  ${breakpoint('mobile', 'tablet')`
  padding-left: 3rem;
  width: 30rem;
  justify-content: space-around;
  h1 {
    margin-left: -5rem;
  }
  `};
  ${breakpoint('tablet', 'desktop')`
  margin-left: -3.7rem;
  width: 17rem;
  h1 {
    font-size: 2rem;
  }
  
  `};
`

const Headline = styled.h3`
  font-size: 1.3rem;
  width: 35rem;
  color: whitesmoke;
  margin-right: 2rem;
  line-height: 1.5rem;
  ${breakpoint('mobile', 'tablet')`
  display: none;
  `};
`
