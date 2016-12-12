import React, { Component } from 'react'
import "../../styles/widget/widget.scss"
import QRCodeImage from './QRCodeImage'
import Header from './Header'

class QRCode extends Component {
  render() {
    // eslint-disable-next-line
    const { title, x, y, size, url } = this.props
    const positionStyle = { top: y, left: x }

    return (
      <article>
        <div className="widget widget--width-1 widget--height-1" style={ positionStyle }>
          <Header title={ title }/>
          <div className="widget__body widget--flex-center">
            <QRCodeImage url={ url }/>
          </div>
        </div>
      </article>
    )
  }
}

export default QRCode
