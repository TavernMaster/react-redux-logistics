import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Price from './Price/Price'
import Contact from './Contact/Contact'
import Blog from './Blog/Blog'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/price' element={<Price/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
    </Routes>
  )
}

export default AppRoutes