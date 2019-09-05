import React from 'react'
import styled from 'styled-components'

const ContentSection = ({ content, className }) => {
  return (
    <section className={className}>
      <h1>CONTENT HERE !!!</h1>
      {content}
    </section>
  )
}

export default styled(ContentSection)`
  height: calc(100vh - 10rem);
  background: burlywood;
`
