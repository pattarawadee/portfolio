import React, { Component } from 'react'
import styled from 'styled-components'
import Nav from './nav'
import Profile from './profile'

const Wrapper = styled.div`
  width: 45%;
  height: 100%;
  background-color: blue;

  @media (max-width: 768px) {
    width: 100%;
  }
`

class Content extends Component {
  render() {
    return (
      <Wrapper>
        <Nav />
        <Profile />
      </Wrapper>
    )
  }
}

export default Content
