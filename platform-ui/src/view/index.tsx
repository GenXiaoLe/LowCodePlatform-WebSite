import React from 'react'

import Menu from './layout/menu'
import Container from './layout/container'
import Option from './layout/options'

class MainApp extends React.Component {
  render () {
    return <div className="App">
      <Menu />
      <Container />
      <Option />
    </div>
  }
}


export default MainApp