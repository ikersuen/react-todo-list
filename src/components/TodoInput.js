import React, { Component } from 'react'

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBox: ''
    };
  }

  //Set inputBox to target value in inputBox
  update = (event) => {
    this.setState({inputBox: event.target.value});
  }

  //When Submit press button, onUpdate Todos, inputbox go back empty field
  onSubmit = (event) => {
    event.preventDefault()
    this.props.onUpdate(this.state.inputBox)
    this.setState({
        inputBox: ''
    })
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
        <input type='text' value={this.state.inputBox} onChange={this.update} />
        <button>add</button>
        </form>
      </div>
    )
  }
}
