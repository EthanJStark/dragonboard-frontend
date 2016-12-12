import React, { Component } from 'react'
import '../styles/home_footer.css'

class HomeFooter extends Component {
  render () {
    return (
      <div className='home-footer-nav-container'>
        <ul className='home-footer-nav'>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Careers</a></li>
          <li><a href='#'>Team</a></li>
          <li><a href='#'>Partners</a></li>
          <li><a href='#'>Legal</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a className='login-nav' href='#'>Login</a></li>
        </ul>
      </div>
    )
  }
}

export default HomeFooter
