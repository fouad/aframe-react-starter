import {Entity} from 'aframe-react'
import React from 'react'

export class Plane extends React.Component {
  render () {
    const width = this.props.width || 1.75
    const height = this.props.height || 1.75
    const translate = this.props.translate || '0 0 0'
    const color = this.props.color || 'gray'
    const opacity = this.props.opacity || '1.0'
    const shader = this.props.shader || 'standard'
    const transparent = this.props.transparent || true
    const metalness = this.props.metalness || 0.0
    const roughness = this.props.roughness || 0.5
    const src = this.props.src || ''

    return (
      <Entity geometry={{primitive: 'plane', width, height, translate}}
              material={{color, opacity, shader, transparent, metalness,
                        roughness, side: 'double',
                        src: `url(${src})`}}
              {...this.props}>
        {this.props.children}
      </Entity>
    )
  }
}
