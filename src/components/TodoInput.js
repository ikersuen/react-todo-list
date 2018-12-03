import React, { Component } from 'react'
import Todos from './Todos.js'

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBox: '',
      items: new Array(0).fill(0)
    };
  }

  //Set inputBox to target value in inputBox
  update = (event) => {
    this.setState({inputBox: event.target.value});
  }

  //When Submit press button, onUpdate Todos, inputbox go back empty field
  onSubmit = (event) => {
    event.preventDefault()
    this.setState(previousState => ({
        items: [...previousState.items, this.state.inputBox],
        inputBox: ''
    }));
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
        <input type='text' value={this.state.inputBox} onChange={this.update} />
        <button>add</button>
        {this.state.items.map((element) => <Todos todo={element}/>)}
        </form>
      </div>
    )
  }
}
