import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Dashboard from './AdminDashboard'
import Layout from './Layout'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout/>}>
            <Route path='/dashboard' element={<Dashboard />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router