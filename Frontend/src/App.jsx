import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
    </div>
  )
}

export default App
