/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

import styled, {createGlobalStyle} from "styled-components"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <GlobalStyle>
    <Header />
    <ContentWrapper>{children}</ContentWrapper>
    <Footer />
  </GlobalStyle>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const ContentWrapper = styled.main`
  background: pink;
  height: 80vh;
`
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Open Sans', sans-serif;
  color: #262626;
  background:#fff;
}