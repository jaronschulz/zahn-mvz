import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Navigation from './navigation'
import ContentSection from './content-section'

const Main = ({ content, className, visible }) => {
  return (
    <main className={className}>
      <Navigation visible={visible} />
      <ContentSection content={content} />
    </main>
  )
}

export default styled(Main)`
  display: grid;
  margin-top: 6rem;
  height: calc(100vh - 10rem);

  ${breakpoint('mobile', 'tablet')`
  grid-template-rows: ${({ visible }) => (visible ? '1fr 1fr' : '0 1fr')}
  height: calc(100vh - 6rem);

`};

  ${breakpoint('tablet', 'desktop')`
  grid-template-columns: ${({ visible }) => (visible ? '1fr 3.5fr' : '0 1fr')}
  `};

  ${breakpoint('desktop')`
  grid-template-columns: 1.5fr 3fr
`};
`
