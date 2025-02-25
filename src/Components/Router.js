import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Dashboard from './AdminDashboard'
import Layout from './Layout'
import Department from './Department'
import Empolyees from './Empolyees'
import Leaves from './Leaves'
import Setting from './Setting'
import Salary from './Salary'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout/>}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/department' element={<Department />} />
            <Route path='/empolyees' element={<Empolyees />} />
            <Route path='/leaves' element={<Leaves />} />
            <Route path='/salary' element={<Salary />} />
            <Route path='/setting' element={<Setting />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router