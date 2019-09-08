import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'gatsby'
import { Menu } from 'styled-icons/material'
import { Tooth } from 'styled-icons/fa-solid'

const Header = ({ className, handleClick }) => {
  return (
    <header className={className}>
      <MenuButton onClick={handleClick}>
        <MenuIcon aria-hidden="true" />
      </MenuButton>

      <CompanyLogo to="/">
        <ToothIcon aria-hidden="true" />
        <h1>Zahn-MVZ</h1>
      </CompanyLogo>
      <Headline>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
        tenetur!
      </Headline>
    </header>
  )
}

export default styled(Header)`
  position: fixed;
  top: 0;
  background: lavender;
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

const CompanyLogo = styled(props => <Link {...props} />)`
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  text-decoration: none;
  color: black;
  h1 {
    margin-left: 1rem;
  }
  ${breakpoint('mobile', 'desktop')`
  margin-right: 45%;
  `};
`

const ToothIcon = styled(Tooth)`
  width: 3rem;
`

const Headline = styled.h3`
  font-size: 1.3rem;
  color: violet;
  margin-right: 4rem;
  ${breakpoint('mobile', 'desktop')`
  display: none;
  `};
`
