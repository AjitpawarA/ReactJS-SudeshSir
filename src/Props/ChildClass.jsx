import React, { Component } from 'react'

export default class ChildClass extends Component {
  render() {
    return (
      <div>
        <h1>My name is {this.props.name} and my age is {this.props.age}</h1>
      </div>
    )
  }
}
