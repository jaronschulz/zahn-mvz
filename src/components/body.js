import React from "react"
import styled from "styled-components"

const Body = () => (
  <BodyWrapper>
    <aside>ASIDE comes here</aside>
    <main>MAIN (pages) sais Hi</main>
  </BodyWrapper>
)

export default Body

const BodyWrapper = styled.section`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  height: calc(100vh - 20rem);
  /* TODO: Seperate into styled componetns etc. */
  aside {
    background: paleturquoise;
  }
  main {
    background: lavenderblush;
  }
`
