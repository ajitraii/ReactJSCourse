import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
       <h3>Home</h3>
       <button onClick={() => {navigate('/dashboard')}}>Go To Dashboard</button>
    </div>
  )
}

export default Home
