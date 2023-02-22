import React from 'react'
import { useChequecontext } from '../../Context/ChequeContext'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

const Dashboard = () => {
  const { auth } = useChequecontext()
  const location = useLocation()
  return (
    auth?.userName
      ?<div style={{width:"100vw"}}>
        <Outlet />
      </div>
      : <p>Not authorized</p>
      // <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default Dashboard
