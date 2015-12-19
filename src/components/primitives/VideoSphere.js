import {Entity} from 'aframe-react'
import React from 'react'

export class VideoSphere extends React.Component {
  render() {
    const radius = this.props.radius || 5000
    const segmentsHeight = this.props.segmentsHeight || 64
    const segmentsWidth = this.props.segmentsWidth || 64
    const autoplay = this.props.autoplay || true
    const loop = this.props.loop || true
    const muted = this.props.muted || false
    const crossOrigin = this.props.crossOrigin || 'anonymous'
    const src = this.props.src || ''
    const videoKey = 'video-' + Math.floor(Math.random() * 1000)
    const rotation = this.props.rotation || ''
    const position = this.props.position || ''

    return (
      <Entity
        position={position}>
        <video
          id={videoKey}
          src={src}
          width="1000"
          height="500"
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          crossOrigin={crossOrigin}
          style={{display: 'none'}}></video>
        <Entity
          rotation={rotation}
          geometry={`
                    primitive: sphere;
                    radius: ${radius};
                    segments-width: ${segmentsWidth};
                    segments-height: ${segmentsHeight};`}
          material={`shader: flat; src: #${videoKey};`}
          scale="1 1 -1">
        </Entity>
      </Entity>
    )
  }
}
