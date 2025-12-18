import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import { Routes, Route } from 'react-router-dom'
import Resources from './pages/Resources'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resources" element={<Resources/>}></Route>
        </Routes>
    </div>
  )
}

export default App
