import React from 'react'
import styled from 'styled-components'

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <h1>FOOTER HERE !!!</h1>
    </footer>
  )
}

export default styled(Footer)`
  width: 100vw;
  position: fixed;
  bottom: 0;
  height: 4rem;
  background: red;
`
