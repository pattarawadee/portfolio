import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 70%;
  max-width: 440px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`
const Menu = styled.p`
  font-family: 'Prompt', sans-serif;
  font-size: 18px;

  @media (max-width: 320px) {
    font-size: 16px;
  }
`

class Nav extends Component {
  render() {
    return (
      <Wrapper>
        <Menu>Profile</Menu>
        <Menu>Portfolio</Menu>
        <Menu>Gallery</Menu>
      </Wrapper>
    )
  }
}

export default Nav
