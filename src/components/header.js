import React from 'react'
import styled from 'styled-components'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <h1>HEADER HERE !!!</h1>
    </header>
  )
}

export default styled(Header)`
  width: 100vw;
  position: fixed;
  top: 0;
  height: 6rem;
  background: lavender;
`
