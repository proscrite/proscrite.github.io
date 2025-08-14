import React from 'react'
import { Routes, Route }  from 'react-router-dom'
import Home               from './pages/Home'
import ScienceCareer      from './pages/ScienceCareer'
import ProjectsLayout     from './pages/ProjectsSoftware/Layout'
import ProjectsIndex      from './pages/ProjectsSoftware/Index'
import SoftwareLayout     from './pages/ProjectsSoftware/Software'
import ExperimentsLayout  from './pages/ProjectsSoftware/Experiments'
import OutreachPage       from './pages/ProjectsSoftware/Outreach'

import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/"       element={<Home/>}/>
      <Route path="science" element={<ScienceCareer/>}/>

      <Route path="projects" element={<ProjectsLayout/>}>
        <Route index         element={<ProjectsIndex/>}/>
        <Route path="software"    element={<SoftwareLayout/>}/>
        <Route path="experiments" element={<ExperimentsLayout/>}/>
        <Route path="outreach"    element={<OutreachPage/>}/>
      </Route>
    </Routes>
  )
}