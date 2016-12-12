import React, { Component } from 'react'
import '../styles/quote.css'

class Quote extends Component {
  render () {
    return (
      <div className='customer-blockquote'>
        <p className='customer-testimonial'>
          {this.props.quote}
        </p>
        <div className='inner'>
          <img src={this.props.url} role='presentation' />
          <cite>{this.props.name}</cite>
        </div>
      </div>
    )
  }
}

export default Quote
