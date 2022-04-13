import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import AddBookButton from './AddBookButton'

const Navigation = () => {
  return (
    <div className= "navigation">
        <NavLink to='/' exact className= "linkStyles" >Home</NavLink>
        <NavLink to='/library' exact className= "linkStyles">Library</NavLink>
        <AddBookButton />
    </div>
  )
}

export default Navigation
