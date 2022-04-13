import React, { useContext } from 'react'
import { UserContext } from './MyContext'

const Home = () => {
    const {user} = useContext(UserContext)

    if (user.error){
        return (
            <h3>Please Login or Signup</h3>
        )
    } else {
        return (
            <h3>{user.username}'s Personal Library</h3>
        )
    }
  
}

export default Home
