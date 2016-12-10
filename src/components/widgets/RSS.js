import React, { Component } from 'react'
import "../../styles/widget/widget.scss"
import "../../styles/widget/RSS.scss"
import Header from './Header'
import RSSFeedBuilder from './RSSFeedBuilder'

class RSS extends Component {
  render() {
    // eslint-disable-next-line
    const { title, size, x, y } = this.props
    const positionStyle = { top: y, left: x }

    return (
      <article>
        <div className="widget widget--width-2 widget--height-2" style={ positionStyle }>
          <Header title={title}/>
          <div className="widget__RSS-feed">
            <RSSFeedBuilder url="http://www.fakeurl.com"/>
          </div>
        </div>
      </article>
    )
  }
}

export default RSS
