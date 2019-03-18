import React from 'react'

export default function Header() {
  return (
    <header style={ hdrStyle }>
        <h1>Todo List</h1>
    </header>
  )
}

const hdrStyle = {
  backgroundColor: 'lightgrey',
  padding: '0px',
  textAlign: 'center'
}