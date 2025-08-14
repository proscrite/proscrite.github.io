import React from 'react'
import { Routes, Route }  from 'react-router-dom'
import Home               from './pages/Home'
import ScienceCareer      from './pages/ScienceCareer'
import ProjectsIndex      from './pages/Projects/index'
import ProjectsLayout     from './pages/Projects/Layout'
import SoftwareLayout     from './pages/Projects/Software'
import ExperimentsLayout  from './pages/Projects/Experiments/ExperimentsLayout'
import ExperimentsIndex   from './pages/Projects/Experiments/index'
import OutreachPage       from './pages/Projects/Outreach'

import SabbathHujiPage from './pages/Projects/Experiments/SabbathHuji'
import NextExperimentPage from './pages/Projects/Experiments/NextExperiment'
import BoldPage from './pages/Projects/Experiments/Bold'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/"       element={<Home/>}/>
      <Route path="science" element={<ScienceCareer/>}/>

      <Route path="projects" element={<ProjectsLayout/>}>
        <Route index         element={<ProjectsIndex/>}/>
        <Route path="software"    element={<SoftwareLayout/>}/>
        <Route path="experiments" element={<ExperimentsLayout/>}>
          <Route index              element={<ExperimentsIndex/>}/>
          <Route path="SabbathHuji" element={<SabbathHujiPage/>}/>
          <Route path="NextExperiment" element={<NextExperimentPage/>}/>
          <Route path="Bold" element={<BoldPage/>}/>
        </Route>
        <Route path="outreach"    element={<OutreachPage/>}/>
      </Route>
    </Routes>
  )
}