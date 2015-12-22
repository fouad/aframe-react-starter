import 'aframe-core'
import 'babel-polyfill'
import {Animation, Entity, Scene} from 'aframe-react'
import React from 'react'
import ReactDOM from 'react-dom'
import sample from 'lodash.sample'
import {cdn} from '../utils'
import {Camera, Cursor, Light, Sky, CurvedImage, VideoSphere} from '../components/primitives'
import {Sphere, Cube, Cylinder, Plane} from '../components/geometries'

class DemoScene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {

    return (
      <Scene>

        <Sphere position="0 1.25 -1" radius="1.25" color="#EF2D5E" />
        <Cube position="-1 0.5 1" rotation="0 45 0" width="1"
              height="1" depth="1" color="#4CC3D9"/>
        <Cylinder position="1 0.75 1" radius="0.5" height="1.5" color="#FFC65D"/>
        <Plane rotation="-90 0 0" width="4" height="4" color="#78C8A4"/>

        <Sky color="#ECECEC"/>
      </Scene>
    )
  }
}

ReactDOM.render(<DemoScene/>, document.querySelector('.scene-container'))
