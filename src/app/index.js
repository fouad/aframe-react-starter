import 'aframe-core'
import 'babel-polyfill'
import {Animation, Entity, Scene} from 'aframe-react'
import React from 'react'
import ReactDOM from 'react-dom'
import sample from 'lodash.sample'

import {Camera, Cursor, Light, Sky} from '../components/primitives'

class StarterScene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'orange'
    }
    this.colors = ['red', 'orange', 'yellow', 'green', 'blue']
  }

  changeColor = () => {
    this.setState({
      color: this.colors[Math.floor(Math.random() * colors.length)],
    })
  }

  generateBox (index) {
    const materialOpts = {
      color: sample(this.colors),
      metalness: .6
    }

    return (
      <Entity
        key={`box-${index}`}
        geometry="primitive: box"
        material={materialOpts}
        onClick={this.changeColor}
        position={`${(index - 2) * 7} 0 -7`}>
        <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
      </Entity>
    )
  }

  render () {
    const boxes = [1, 2, 3, 4].map(this.generateBox.bind(this))

    return (
      <Scene>
        <Camera>
          <Cursor/>
        </Camera>

        <Sky/>

        <Light type="ambient" color="#fff"/>
        <Light type="directional" intensity="0.5" position="1 1 0"/>
        <Light type="directional" intensity="1" position="1 1 0"/>

        {boxes}
      </Scene>
    )
  }
}

ReactDOM.render(<StarterScene/>, document.querySelector('.scene-container'))
