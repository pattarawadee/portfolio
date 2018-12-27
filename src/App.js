import React, { Component } from 'react'
import Header from './components/header'
import Info from './components/info'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Info />
      </React.Fragment>
    )
  }
}

export default App
