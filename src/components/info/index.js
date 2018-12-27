import React, { Component } from 'react'
import styled from 'styled-components'
import Display from './display'
import Content from './content'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`

class Info extends Component {
  render() {
    return (
      <Wrapper>
        <Display />
        <Content />
      </Wrapper>
    )
  }
}

export default Info
