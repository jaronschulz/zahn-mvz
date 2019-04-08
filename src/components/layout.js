/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

import { createGlobalStyle } from "styled-components"
import Header from "./header"
import Footer from "./footer"
import Main from "./body"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

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
`
