import React, { Component } from 'react'

export default class Todos extends Component {

  render() {
    return (
        <div>{this.props.todo}</div>
    )
  }
}

