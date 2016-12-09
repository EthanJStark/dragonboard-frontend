import React, { Component } from 'react'
import '../styles/home_body.sass'
import Overlay from './Overlay'
import Quote from './Quote'
import Icons from './Icons'

class HomeBody extends Component {
  render () {
    return (
      <div className='home-main'>
        <Overlay />
        <section className='quotes'>
          <div className='quotes-container'>
            <Quote quote='I found an apple thanks to Dragonboard'
              url='/images/gravity2.png'
              name='Isaac Newton' />
            <Quote quote='We installed Dragonboard, sales are now up by 15%'
              url='images/how-to-draw-john-adams-john-adams_1_000000016809_5.png'
              name='John Adamos, CEO, Adam Apples' />
          </div>
        </section>
        <Icons />
      </div>
    )
  }
}

export default HomeBody
