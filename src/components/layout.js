import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './global-style'
import Header from './header'
import Main from './main'
import Footer from './footer'

const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <GlobalStyle />
      <Header />
      <Main content={children} />
      <Footer />
    </div>
  )
}

export default styled(Layout)`
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`
