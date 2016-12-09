import React, { Component } from 'react'
import "../../styles/widget/widget.sass"
import "../../styles/widget/image.sass"
import Header from './Header'

class Image extends Component {
  render() {
    // eslint-disable-next-line
    const { title, size, x, y, path, reload } = this.props
    const positionStyle = { top: y, left: x }

    return (
      <article>
        <div className="widget widget--transparent widget--width-1 widget--height-1"
          style={ positionStyle }>
          <Header title={title}/>
          <div className="image-wrapper">
            <img className="widget-image" src={ path } alt={ title }/>
          </div>
        </div>
      </article>
    )
  }
}

export default Image
