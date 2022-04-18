import React, {useContext} from 'react'
import { UserContext } from './MyContext'
import '../App.css'
import { NavLink } from 'react-router-dom'
import AddBookButton from './AddBookButton'

const Navigation = () => {
  const {user, logout} = useContext(UserContext)

  const logoutUser = () => {
    fetch('/logout')
    .then(()=> {
      logout()
    })
  }

  
  return (
    <div className= "navigation">
        <h1>Hello {user.username}</h1>
        <button onClick={logoutUser}>Logout</button>
        <NavLink to='/' exact className= "linkStyles" >Home</NavLink>
        <NavLink to='/library' exact className= "linkStyles">Library</NavLink>
        <AddBookButton />
    </div>
  )
}

export default Navigation
