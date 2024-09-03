import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Minlayout() {
  return (
    <>
      <Header />
      <Outlet />  {/* This renders the child routes */}
      <Footer />
    </>
  )
}

export default Minlayout