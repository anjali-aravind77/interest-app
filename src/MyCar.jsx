//rcc

import React, { Component } from 'react'

export default class MyCar extends Component {

  constructor(){
    super()
    this.state = {
      carName : "polo"
    }
  }

  render() {
    return (
      <div style={{marginLeft:'20px', color:'skyblue',minHeight:'50vh'}} className='bg-rounded p-5'>MyCar
      <input type="text" onChange={e=>this.setState({...this.state,carName:e.target.value})} />
      <h3>my car name is : <span>{this.state.carName}</span></h3>
      </div>
    )
  }
}
