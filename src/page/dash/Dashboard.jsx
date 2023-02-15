import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{width:"100vw"}}>
      Dashboard
      <Outlet />
    </div>
  )
}

export default Dashboard
