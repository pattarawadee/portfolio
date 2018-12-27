import React, { Component } from 'react'
import styled from 'styled-components'
import background from './background-header.png'
import Nav from './nav'

const Background = styled.div`
  background-image: url(${background});
  height: 100vh;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
`

class Header extends Component {
  render() {
    return (
      <Background>
        <Nav />
      </Background>
    )
  }
}

export default Header
