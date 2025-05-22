import React from 'react'
import { Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <Outlet />
    </div>
  )
}

export default Dashboard
