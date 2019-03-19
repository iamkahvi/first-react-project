import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault(); // To prevent from submiting to the actual file
    this.props.AddTodo(this.state.title);
    this.setState({ title: '' });
  }

  onAddTodo = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
        <form onSubmit={ this.onSubmit } style={{ display: 'flex', width: '500px', margin: 'auto' }}>
            <input 
              type="text" 
              name="title" 
              placeholder="Add Todo..."
              className="form-control mb-2 mr-sm-2"
              value={ this.state.title }
              onChange={ this.onAddTodo }
            />

            <input
              type="submit"
              value="Submit"
              className="btn btn-primary mb-2"
            />
        </form>
    )
  }
}

export default AddTodo
