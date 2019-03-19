import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={ headerStyle } >
      <nav className="nav nav-justified">
          <h1>Todo List</h1>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/chart">Chart</Link>
          <Link className="nav-link" to="/about">About</Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  marginBottom: '50px',
}
