import React from 'react'
import Register from './Register'
import Login from './Login'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home
      <Outlet />
    </div>
  )
}

export default Home
