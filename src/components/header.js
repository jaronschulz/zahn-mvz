import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import NavMenu from "./nav-menu"
import styled from "styled-components"

const Header = () => (
  <HeaderWrapper>
    <UpperHeader>
      <Link to="/" className="logo-link">
        <h1>LOGO</h1>
      </Link>
      <h3>
        Zentrum für die zahnärztliche und kieferchirurgische Behandlung von
        Menschen mit Behinderung
      </h3>
    </UpperHeader>
    <NavMenu />
  </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.header`
  background: blueviolet;
  height: 10rem;
  .logo-link {
    text-decoration: none;
    color: black;
    text-align: center;
    margin: auto 1rem;
  }
  h3 {
    margin: auto 2rem;
  }
`
const UpperHeader = styled.div`
  background: blanchedalmond;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 7rem;
`
