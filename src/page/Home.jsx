import React from 'react'
import Register from './Register'
import Login from './Login'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home
      <section className='container'>
        <Outlet />
      </section>
    </div>
  )
}

export default Home
