import React from 'react'
import { NavLink } from 'react-router-dom'
import AddBookButton from './AddBookButton'

const Navigation = () => {
  return (
    <div>
        <NavLink to='/' exact>Home</NavLink>
        <NavLink to='/library' exact>Library</NavLink>
        <AddBookButton />
    </div>
  )
}

export default Navigation
