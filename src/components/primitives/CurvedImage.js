import {Entity} from 'aframe-react'
import React from 'react'

export class CurvedImage extends React.Component {
  render() {
    const radius = this.props.radius || 1
    const height = this.props.height || 1
    const segmentsRadius = this.props.segmentsRadius || 48
    const thetaStart = this.props.thetaStart || 0
    const thetaLength = this.props.thetaLength || 360
    const opacity = this.props.opacity || 1
    const transparent = this.props.transparent || true
    const src = this.props.src || ''

    return (
      <Entity
        position={this.props.position || ''}
        geometry={`primitive: cylinder;
                  radius: ${radius};
                  height: ${height};
                  segmentsRadius: ${segmentsRadius};
                  segmentsHeight: 1;
                  thetaStart: ${thetaStart};
                  thetaLength: ${thetaLength};
                  openEnded: true`}
        scale={this.props.scale || "1 1 -1"}
        material={`opacity: ${opacity};
                  shader: flat;
                  side: double;
                  transparent: ${transparent};
                  src: url(${src})"`}/>
    )
  }
}
