import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../shared/Navber'
import Footer from '../shared/Footer'

const Mainlout = () => {
  return (
    <div>
        <Navber />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Mainlout
