import React, { Component } from 'react'
import styled from 'styled-components'
import display from './display.png'

const Wrapper = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 440px;
  }
`

const Circle = styled.div`
  height: 440px;
  width: 440px;
  background-image: url(${display});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 10%;

  @media (max-width: 1024px) {
    height: 380px;
    width: 380px;
  }

  @media (max-width: 850px) {
    height: 300px;
    width: 300px;
    position: relative;
    right: 0;
    margin: auto;
  }
`

class Display extends Component {
  render() {
    return (
      <Wrapper>
        <Circle />
      </Wrapper>
    )
  }
}

export default Display
