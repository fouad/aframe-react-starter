import {Entity} from 'aframe-react'
import React from 'react'

export class Sky extends React.Component {
  render() {
    const color = this.props.color || '#73CFF0'
    return (
      <Entity geometry={{primitive: 'sphere', radius: 5000}}
              material={{color, shader: 'flat'}}
              scale="1 1 -1"/>
    )
  }
}
