import React from 'react'
import { Routes, Route }  from 'react-router-dom'
import Home               from './pages/Home'
import ScienceCareer      from './pages/ScienceCareer/ScienceCareerPage'
import ProjectsIndex      from './pages/Projects/index'
import ProjectsLayout     from './pages/Projects/ProjectsLayout'
import SoftwareLayout     from './pages/Projects/Software/SoftwareLayout'
import SoftwareIndex      from './pages/Projects/Software/index'
import ExperimentsLayout  from './pages/Projects/Experiments/ExperimentsLayout'
import ExperimentsIndex   from './pages/Projects/Experiments/index'
import OutreachPage       from './pages/Projects/Outreach'

import NextExperimentPage from './pages/Projects/Experiments/NextExperiment'
import BoldPage from './pages/Projects/Experiments/Bold/BoldPage'
import SabbathHujiPage from './pages/Projects/Experiments/SabbathHuji'
import SurfaceSciencePage from './pages/Projects/Experiments/SurfaceScience/SurfaceSciencePage'
import RitaPage from './pages/Projects/Experiments/RaTagSetup/RitaPage'

import ManhattanPage from './pages/Projects/Software/Manhattan/ManhattanPage'
import RaTagPage from './pages/Projects/Software/RaTag/RaTagPage'
import './App.css'


export default function App() {
  return (
    <Routes>
      <Route path="/"       element={<Home/>}/>
      <Route path="science" element={<ScienceCareer/>}/>

      <Route path="projects" element={<ProjectsLayout/>}>
        <Route index         element={<ProjectsIndex/>}/>
        <Route path="software" element={<SoftwareLayout/>}>
          <Route index            element={<SoftwareIndex/>}/>
          <Route path="manhattan" element={<ManhattanPage/>}/>
          <Route path="RaTag" element={<RaTagPage/>}/>
        </Route>
        <Route path="experiments" element={<ExperimentsLayout/>}>
          <Route index              element={<ExperimentsIndex/>}/>
          <Route path="NextExperiment" element={<NextExperimentPage/>}/>
          <Route path="Bold" element={<BoldPage/>}/>
          <Route path="RitaSetup" element={<RitaPage/>}/>
          <Route path="SabbathHuji" element={<SabbathHujiPage/>}/>
          <Route path="SurfaceScience" element={<SurfaceSciencePage/>}/>
        </Route>
        <Route path="outreach"    element={<OutreachPage/>}/>
      </Route>
    </Routes>
  )
}