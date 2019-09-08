import React, { useState } from 'react'
import styled from 'styled-components'

import { GlobalStyle } from '../utils'
import { Header, Main, Footer } from '../elements'

const Layout = ({ children, className }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={className}>
      <GlobalStyle />
      <Header handleClick={() => setMenuOpen(!menuOpen)} />
      <Main content={children} visible={menuOpen} />
      <Footer />
    </div>
  )
}

export default styled(Layout)`
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`
