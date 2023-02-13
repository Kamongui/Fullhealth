import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home
      {/* <div>{getToday}</div> */}
      <section className='container'>
        <Outlet />
      </section>
    </div>
  )
}

export default Home
