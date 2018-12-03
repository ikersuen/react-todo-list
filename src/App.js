import React, { Component } from 'react';
import logo from './logo.svg';
import TodoInput from './components/TodoInput.js'
import Todos from './components/Todos.js'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <TodoInput/>
        <Todos/>
      </div>
    );
  }
}

export default App;
