import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<Home/>} />
        <Route path='/projects' element={<Home/>} />
        <Route path='/price' element={<Home/>} />
        <Route path='/contact' element={<Home/>} />
    </Routes>
  )
}

export default AppRoutes