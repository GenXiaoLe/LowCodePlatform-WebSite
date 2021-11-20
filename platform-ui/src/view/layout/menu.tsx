import React from 'react'

import './assets/menu.scss'

class Menu extends React.Component {
  constructor (props: any) {
    super(props)
    this.state = {

    }
  }

  render () {
    return <div className="platform__menu">
      <dl className="platform__menu--white">
        <dt>布局组件</dt>
        <dd></dd>
      </dl>
    </div>
  }
}

export default Menu