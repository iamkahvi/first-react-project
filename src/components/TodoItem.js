import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <li style={this.getStyle()} class="list-group-item list-group-item-action">
          <p style={{ marginTop: '1rem'}} >
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
            { '  ' }
          <button type="button" style={btnStyle} class="btn btn-danger" onClick={this.props.deleteItem.bind(this, id)}>X</button>
          </p>
      </li>
    )
  }
}

const btnStyle = {
  backgroundColor: '#ff0000',
  border: 'none',
  float: 'right',
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
