import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    
    <>
      <div className="bg">
      <h1>NotFound</h1>
    </div>
    <Link to={'/'}>Back to Home</Link>
    </>
  )
}

export default Error