import React from 'react'

import './assets/container.scss'

class Container extends React.Component {
  render () {
    return <div className="platform__container--outside">
      <div className="platform__container--interior"></div>
    </div> 
  }
}

export default Container