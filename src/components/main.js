import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Navigation from './navigation'
import ContentSection from './content-section'

const Main = ({ content, className }) => {
  return (
    <main className={className}>
      <Navigation />
      <ContentSection content={content} />
    </main>
  )
}

export default styled(Main)`
  display: grid;
  margin: 6rem 0 4rem 0;
  height: calc(100vh - 10rem);
  background: greenyellow;
  ${Navigation} {
    grid-area: nav;
  }
  ${ContentSection} {
    grid-area: section;
  }
  ${breakpoint('mobile', 'tablet')`
  grid-template-areas: 
  'nav nav nav ' 
  'section section section ' ;
`};

  ${breakpoint('tablet', 'desktop')`
  grid-template-areas: 
  'nav nav nav ' 
  'section section section ' ;
  `};

  ${breakpoint('desktop')`
  grid-template-areas: 
  'nav section section'  ;`};
`
