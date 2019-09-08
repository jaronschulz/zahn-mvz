import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <h1>FOOTER HERE !!!</h1>
    </footer>
  )
}

export default styled(Footer)`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: black;
  width: 100vw;
  height: 4rem;
  h1 {
    margin-left: 2rem;
    color: white;
  }
  ${breakpoint('mobile', 'tablet')`
  display: none;
`};
`
