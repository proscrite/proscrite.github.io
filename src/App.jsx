import React, { useEffect } from 'react'
import { Routes, Route, useLocation }  from 'react-router-dom'
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
import SabatHujiPage from './pages/Projects/Experiments/SabatHuji/SabatHujiPage'
import RitaPage from './pages/Projects/Experiments/RaTagSetup/RitaPage'
import BaSourcePage from './pages/Projects/Experiments/BaSource/BaSourcePage'

import SurfaceSciencePage from './pages/Projects/Experiments/SurfaceScience/SurfaceSciencePage'
import PreparationPage from './pages/Projects/Experiments/SurfaceScience/PreparationPage'
import CharacterizationPage from './pages/Projects/Experiments/SurfaceScience/CharacterizationPage'
import ResultsPage from './pages/Projects/Experiments/SurfaceScience/ResultsPage'

import ManhattanPage from './pages/Projects/Software/Manhattan/ManhattanPage'
import RaTagPage from './pages/Projects/Software/RaTag/RaTagPage'
import SabatSwPage from './pages/Projects/Software/SabatSw/SabatSwPage'
import './App.css'


export default function App() {
  // Global scroll handler:
  // - if location.hash is present, do nothing and let hash handlers (HashLink or page effects) manage scrolling
  // - otherwise scroll to top on navigation
  function ScrollToTop() {
    const location = useLocation();
    useEffect(() => {
      if (location.hash) return;
      window.scrollTo(0, 0);
    }, [location.pathname, location.hash]);
    return null;
  }

  return (
    <>
      <ScrollToTop />
    <Routes>
      <Route path="/"       element={<Home/>}/>
      <Route path="science" element={<ScienceCareer/>}/>

      <Route path="projects" element={<ProjectsLayout/>}>
        <Route index         element={<ProjectsIndex/>}/>
        <Route path="software" element={<SoftwareLayout/>}>
          <Route index            element={<SoftwareIndex/>}/>
          <Route path="manhattan" element={<ManhattanPage/>}/>
          <Route path="RaTag" element={<RaTagPage/>}/>
          <Route path="sabatsw" element={<SabatSwPage/>}/>
        </Route>
        <Route path="experiments" element={<ExperimentsLayout/>}>
          <Route index              element={<ExperimentsIndex/>}/>
          <Route path="NextExperiment" element={<NextExperimentPage/>}/>
          <Route path="Bold" element={<BoldPage/>}/>
          <Route path="RitaSetup" element={<RitaPage/>}/>
          <Route path="SabatHuji" element={<SabatHujiPage/>}/>
          <Route path="BaSource" element={<BaSourcePage/>} />
          <Route path="SurfaceScience" element={<SurfaceSciencePage/>}/>
          <Route path="SurfaceScience/preparation" element={<PreparationPage/>} />
          <Route path="SurfaceScience/characterization" element={<CharacterizationPage/>} />
          <Route path="SurfaceScience/results" element={<ResultsPage/>} />
        </Route>
        <Route path="outreach"    element={<OutreachPage/>}/>
      </Route>
    </Routes>
    </>
  )
}