import React from 'react'
import { Link } from 'react-router-dom'

const AddBookButton = () => {
  return (
    <Link to={'/new'}>
        <button>Add a Book</button>
    </Link>
  )
}

export default AddBookButton