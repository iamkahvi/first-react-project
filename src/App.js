import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Chart from './components/pages/Chart';
// import uuid from 'uuid';
import axios from 'axios';
import tarantino from './data/tarantino.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
      
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
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  AddTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={ props => (
            <React.Fragment>
              <AddTodo AddTodo={this.AddTodo} />
              <div style={{ margin: 'auto', width: '500px', marginBottom:'50px'}}>
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteItem={this.deleteItem}
                  />
              </div>
              </React.Fragment>
          )} />
          <Route path="/about" render={props => (
            <React.Fragment>
              <div style={{ marginBottom: '50px', width: '500px', margin: 'auto' }}>
                <About />
              </div>
            </React.Fragment>
          )}/>
          <Route path="/chart" render={props => (
            <React.Fragment>
                <Chart 
                  data={tarantino}
                />
            </React.Fragment>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
