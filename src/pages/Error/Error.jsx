import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h2>Error 404</h2>
        <p>sorry, This page was not found</p>
        <Link to='/'>Go home</Link>
    
    </div>
  )
}

export default Error