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
      <li style={this.getStyle()} className="list-group-item list-group-item-action">
            <input 
              type="checkbox" 
              onChange={this.props.markComplete.bind(this, id)} 
            /> 
            {' '} {title} { '  ' }
            <button 
              type="button" 
              style={btnStyle} 
              className="btn btn-danger" 
              onClick={this.props.deleteItem.bind(this, id)}
            >
              X
            </button>
      </li>
    )
  }
}

const btnStyle = {
  backgroundColor: '#ef5350',
  border: 'none',
  float: 'right',
  verticalAlign: 'middle',
  paddingTop: '0',
  paddingBottom: '0'
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
