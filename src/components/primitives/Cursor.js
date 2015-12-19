import {Entity} from 'aframe-react'
import React from 'react'

export class Cursor extends React.Component {
  render() {
    const geometry = {
      primitive: 'ring',
      radiusInner: 0.01,
      radiusOuter: 0.016
    }
    const material = {
      color: this.props.color || '#42A5F5',
      shader: 'flat',
      opacity: this.props.opacity || 0.9,
      transparent: true
    }
    return (
      <Entity cursor={this.props} geometry={geometry} material={material}
              position="0 0 -1"/>
    )
  }
}
