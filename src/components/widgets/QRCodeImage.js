import React, { Component } from 'react'
import qrCodeGenerator from 'qrcode-npm'

class QRCodeImage extends Component {
  static defaultProps = {
    width: 146,
    height: 146
  }

  qrSource() {
    const qr = qrCodeGenerator.qrcode( 4, 'M' )
    qr.addData( this.props.url )
    qr.make()

    const imageTag = qr.createImgTag( 4 )
    return imageTag.replace( '" width="164" height="164"/>', '' ).replace( '<img src="', '' )
  }

  render() {
    return (
      <img src={ this.qrSource() }
      width={ this.props.width }
      height={ this.props.height }
      alt="QR Code"/>
    )
  }
}

export default QRCodeImage
