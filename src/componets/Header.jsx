import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>Header File</h1>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
    </div>
  )
}

export default Header
