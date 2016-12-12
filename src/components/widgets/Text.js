import React, { Component } from 'react'
import "../../styles/widget/widget.scss"
import Header from './Header'

class Text extends Component {
  render() {
    // eslint-disable-next-line
    const { title, size, x, y, message } = this.props
    const positionStyle = { top: y, left: x }

    return (
      <article>
        <div className="widget widget--width-1 widget--height-1" style={ positionStyle }>
          <Header title={title}/>
          <div className="widget__body widget__text">
            { message.one.text }
          </div>
        </div>
      </article>
    )
  }
}

export default Text
