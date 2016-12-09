import React, { Component } from 'react'
import '../styles/overlay.sass'

class Overlay extends Component {
  render () {
    return (
      <section className='overlay-container'>
        <div className='overlay-img' role='presentation'>
        <div className='overlay-header'>
          <h1 className='overlay-heading'>LIVE TV DASHBOARD SOFTWARE
              <div className='overlay-message'>Focus your teams and improve your KPIs</div>
          </h1>
          <a href='#' className='flat-button trial-button'>Start your free trial</a>
          <a href='#' className='flat-button demo-button'>Book a demo</a>
        </div>
        </div>
      </section>
    )
  }
}

export default Overlay
