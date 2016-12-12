import React, { Component } from 'react'
import NavMenu from './NavMenu'
import '../styles/home_nav.css'
import '../styles/dropdown.css'

class HomeNav extends Component {
  render () {
    return (
      <nav className='home-nav clearfix'>
        <div className='nav-container'>
          <div className='home-nav-left'>
            <a className='logo' href='#'>
              <div className='logo-green-square'>
                <div>D</div>
              </div>
              <img src='/images/logo.svg' role='presentation' />
            </a>
          </div>

          <div className='home-nav-right'>
            <div className='home-nav-menu'>
              <a className='home-nav-grey' href='#'>product</a>
              <a className='home-nav-grey' href='#'>PRICING</a>
              <a className='home-nav-grey' href='#'>BLOG</a>
              <div className='nav-dropdown'>
                <NavMenuButton />
              </div>
              <a className='login-nav' href='#'>LOGIN</a>
              <a className='demo-button' href='#'>BOOK A DEMO</a>
              <input className='trial-input' type='text' placeholder='Email address' />
              <a className='nav-trial-button' href='#'>Free Trial</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
  }
}

let NavMenu = React.createClass({
  getDefaultProps() {
    return {
      isOpen: false
    }
  },

  render() {
    if(this.props.isOpen)
    {
    return <div className="home-nav-dropdown">
      <ul className="home-nav-dropdown-content">
        <li><a href="#">EXAMPLE 1</a></li>
      </ul>
    </div>
    }
    return null
  }
})

let NavMenuButton = React.createClass({
  getInitialState () {
    return {
      isOpen: false
    }
  },

  toggleMenu (event) {
    // event.stopPropagation()
    this.setState({isOpen: !this.state.isOpen})
  },

  onClose () {
    this.setState({isOpen: false})
  },

  componentDidMount () {
    document.body.addEventListener('click', this.onClose)
  },

  componentWillUnmount () {
    document.body.removeEventListener('click', this.onClose)
  },

  render () {
    return <div>
      <a onClick={this.toggleMenu} href='#'>More
          <div className='more-triangle' />
      </a>
      <NavMenu isOpen={this.state.isOpen} />
    </div>
  }
})

export default HomeNav
