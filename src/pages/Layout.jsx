import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Header } from '../components'

function Layout() {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className='flex content-center justify-center items-center'>
    <Outlet />
    </div>
    </>
  )
}

export default Layout