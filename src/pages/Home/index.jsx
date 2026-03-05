import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero';
import Constellation from './Constellation';
import fbiCover     from '../../assets/fbi_cover_v2.png'
import softwareProj from '../../assets/softwareProjects.png'
import ScienceCareer from '../ScienceCareer/ScienceCareerPage'
import FeaturedProjects from './FeaturedProjects';
import SkillsTags from './SkillsTags';
import TerminalFooter from './TerminalFooter'
import FloatingNav from '../../components/FloatingNav';

export default function Home() {
  useEffect(() => {
    // keep background transparent while on this page
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "transparent";
    return () => { document.body.style.backgroundColor = prev || '#242424'; };
  }, []);

  // Scroll Tracker
  return (<>
    <FloatingNav />
    <Hero />

    <Constellation />
       
    
    <div id="science-career" className="science-section" style={{ paddingTop: '2rem' }}>
      <ScienceCareer />
    </div>

    <div id="featured-projects" className="featured-projects-section" style={{ paddingTop: '2rem' }}>
      <FeaturedProjects />
    </div>

    <div id="skills-section" className="skills-section" style={{ paddingTop: '2rem' }}>
      <SkillsTags />
    </div>

    <div id="contact-footer">
      <TerminalFooter />
    </div>

    {/* <div className="panels" style={{ paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>
      <Link to="/science" className="panel">
        <img src={fbiCover} alt="Science career" />
        <div className="panel-title"><h3>Science career</h3></div>
      </Link>
      
      <Link to="/projects" className="panel">
        <img src={softwareProj} alt="Projects & Software" />
        <div className="panel-title"><h3>Projects &amp; Software</h3></div>
      </Link>
    </div> */}
    </>
  )
}
 