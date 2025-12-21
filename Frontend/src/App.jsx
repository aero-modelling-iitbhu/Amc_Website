import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import { Routes, Route } from 'react-router-dom'
import Resources from './pages/Resources'
import Ros from './components/ResourcesComp/Ros'
import Ardupilot from './components/ResourcesComp/Ardupilot'
import PX4Installation from './components/ResourcesComp/Px4'
import DroneComponentSelection from './components/ResourcesComp/DroneComponentSelection'
import Members from './pages/Members'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resources" element={<Resources/>}></Route>
          <Route path="/resources/ros" element={<Ros></Ros>}></Route>
          <Route path="/resources/ardupilot" element={<Ardupilot></Ardupilot>}></Route>
          <Route path="/resources/px4" element={<PX4Installation></PX4Installation>}></Route>
          <Route path="/resources/components" element={<DroneComponentSelection/>}></Route>
          <Route path="/helm" element={<Members/>}></Route>
        </Routes>
    </div>
  )
}

export default App
