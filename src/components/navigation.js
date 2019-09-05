import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Navigation = ({ className }) => {
  return (
    <aside className={className}>
      <h1>NAV HERE !!!</h1>
    </aside>
  )
}

export default styled(Navigation)`
  height: calc(100vh - 10rem);
  background: peachpuff;

  ${breakpoint('mobile', 'tablet')`
`};

  ${breakpoint('tablet', 'desktop')`
  `};

  ${breakpoint('desktop')`
 `};
`
