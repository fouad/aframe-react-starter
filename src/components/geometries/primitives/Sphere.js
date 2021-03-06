import {Entity} from 'aframe-react'
import React from 'react'

export class Sphere extends React.Component {
  render () {
    const radius = this.props.radius || 1
    const segments_width = this.props.segments_width || 36
    const segments_height = this.props.segments_height || 18
    const translate = this.props.translate || '0 0 0'
    const color = this.props.color || 'gray'
    const opacity = this.props.opacity || '1.0'
    const shader = this.props.shader || 'standard'
    const transparent = this.props.transparent || true
    const metalness = this.props.metalness || 0.0
    const roughness = this.props.roughness || 0.5

    return (
      <Entity geometry={{primitive: 'sphere', radius,
                        segmentsWidth: segments_width,
                        segmentsHeight: segments_height,
                        translate
                      }}
              material={{color, opacity, shader, transparent, metalness, roughness}}
              {...this.props}>
        {this.props.children}
      </Entity>
    )
  }
}
