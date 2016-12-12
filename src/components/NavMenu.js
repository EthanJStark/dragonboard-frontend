import React, { Component } from 'react'

import '../styles/home_nav.css'

class NavMenu extends Component {
  static defaultProps () {
    return { isOpen: false }
  }

  render () {
    if (this.props.isOpen) {
      return <div className='home-nav-dropdown-container'>
        <div className='home-nav-triangle' />
        <div className='home-nav-dropdown'>
          <ul className='home-nav-dropdown-content'>
            <li><a href='#'>INTEGRATIONS</a></li>
            <li><a href='#'>DASHBOARD EXAMPLES</a></li>
            <li><a href='#'>KPI EXAMPLES</a></li>
          </ul>
        </div>
      </div>
    }
    return null
  }
}

export default NavMenu
