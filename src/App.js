import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with Boss',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  deleteItem = (id) => {
    console.log("delete: " + id);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render() {
    return (
      <div className="App">
      <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
