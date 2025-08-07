import React from 'react'
import { Link } from 'react-router-dom'
import sabbathImg from '../assets/sabbath_software.png'
import './OutreachPage.css'

const communications = [
  {
    year: 2025,
    type: 'Poster',
    title: 'Nano Center HUJI annual conference',
    link: 'https://nano.huji.ac.il/event/nano-center-annual-conference-2025',
    venue: 'Neve Ilan, Israel'
  },
  {
    year: 2024,
    type: 'Oral (parallel session)',
    title: 'Azrieli Fellows Forum 2024',
    link: 'https://www.youtube.com/embed/4kHX6_VbOJY',
    venue: 'Tel Aviv, Israel'
  },
  {
    year: 2024,
    type: 'Poster',
    title: 'International Conference for High Energy Physics (ICHEP)',
    link: 'https://indico.cern.ch/event/1291157/contributions/5904000/ ',
    venue: 'Prague, Czech Republic',
  },
  {
    year: 2024,
    type: 'Oral (parallel session)',
    title: 'Neutrino conference',
    link:  'https://agenda.infn.it/event/37867/contributions/228379/',
    venue: 'Bicocca, Milan, Italy'
  },
  {
    year: 2024,
    type: 'Poster',
    title: 'Nano Center HUJI annual conference',
    link: 'https://nano.huji.ac.il/event/nano-center-annual-conference-2024',
    venue: "Ma'ale Ha'hamisha, Israel"
  },
  {
    year: 2024,
    type: 'Oral (parallel session)',
    title: 'Israeli Physical Society (IPS)',
    link: 'https://www.israelphysicalsociety.org/conference/69th-annual-meeting/program',
    venue: 'Tel Aviv, Israel'
  },
  {
    year: 2022,
    type: 'Poster',
    title: 'Poster Neutrino 2022',
    link: 'https://www.youtube.com/embed/jwfm_mmw-LY',
    venue: 'Virtually hosted from Seoul, South Korea'
  },
  {
    year: 2022,
    type: 'Oral (parallel session)',
    title: 'International Conference for High Energy Physics (ICHEP)',
    link: 'https://agenda.infn.it/event/28874/contributions/169675/',
    venue: 'Bologna, Italy'
  },
  {
    year: 2022,
    type: 'Oral (parallel session)',
    title: 'XIV CPAN days',
    link: 'https://indico.ific.uv.es/event/6735/registrations/participants',
    venue: 'Leioa, Bilbao, ES'
  },
  {
    year: 2022,
    type: 'Oral (High school talk)',
    title: 'Semana de la ciencia I.E.S. Damián Forment',
    link: 'https://iesalcorisa.es/noticias/497-semana-de-la-ciencia-2022',
    venue: 'Alcorisa, Teruel, ES'
  },
  {
    year: 2021,
    type: 'Oral (workshop)',
    title: 'Café e zenzia: Workshop Laboratorio Subterráneo de Canfranc (LSC)',
    link: 'https://lsc-canfranc.es/blog/',
    venue: 'Canfranc, Huesca, ES'
  },
  {
    year: 2021,
    type: 'Oral (Workshop)',
    title: 'Stephan Schönert Group Meeting ',
    link: 'https://www.e15.ph.tum.de/staff/professors/prof_schoenert/index.html',
    venue: 'Virtually hosted from Technical Üniversität München (TUM), Munich, DE ',
  },
  {
    year: 2021,
    type: 'Oral (parallel session)',
    title: 'Techniques and Instrumentation for Particle Physics (TIPP)',
    link: 'https://indico.cern.ch/event/981823/contributions/4302207/',
    venue: 'Virtually hosted from Triumf, Vancouver, Canada'
  },
  {
    year: 2021,
    type: 'Oral (main session)',
    title: 'Transpyrenean Nanotechnology (TrNano) workshop',
    link: 'https://inma.unizar-csic.es/agenda-eventos/transpyrenean-nanotechnlogy-workshop-trnano-2021-8-y-9-de-abril/',
    venue: 'Virtually hosted from INMA, Zaragoza, ES'
  },
  {
    year: 2021,
    type: 'Oral (main session)',
    title: 'Reunión Ibérica de Vacío (RIVA)',
    link: 'https://aseva.es/conferences/riva-online/program/',
    venue: 'Virtually hosted from UAM (Madrid), ES'
  },
  {
    year: 2020,
    type: 'Poster',
    title: 'Neutrino conference',
    link: 'https://www.youtube.com/embed/0l5_KLsLNuY, https://conferences.fnal.gov/nu2020/',
    venue: 'Virtually hosted from Fermilab, Chicago, US'
  },
  {
    year: 2019,
    type: 'Open doors day',
    title: 'Semana de la ciencia/Zientzia Astea (University of the Basque Country)',
    link: 'https://www.zientzia-astea.ehu.eus/2020/es/index.html',
    venue: 'Tabakalera, Donostia, ES'
  },
  {
    year: 2019,
    type: 'Oral (High school talk)',
    title: 'Semana de la ciencia Gavà (I replaced the speaker J.J. Gomez-Cadenas)',
    link: 'https://www.safagava.edu/es/iv-semana-de-la-ciencia-de-gava/',
    venue: 'Gavà, Cataluña, ES'
  },
  {
    year: 2018,
    type: 'Oral (parallel session)',
    title: 'Deutsches Physikalisches Geschelschalft (DPG) Frühjahrstagunge',
    link: 'https://www.dpg-verhandlungen.de/year/2018/conference/wuerzburg/part/t/session/91/contribution/7',
    venue: 'Würzburg, DE'

  },
  {
    year: 2018,
    type: 'Open doors day',
    title: 'Tag der offenen Tür am Max-Planck-Institut für Kernphysik 2018',
    link: 'https://www.mpi-hd.mpg.de/mpi/de/institut/infrastruktur/technik/ausbildung-elektronik/aktivitaeten',
    venue: 'Heidelberg, DE',
  },
]

export default function OutreachPage() {
return (
    <div className="projects-container">
        <Link to="/projects" className="back-link">
            ← Back to Projects & Software
        </Link>
        <h1>Outreach & Communication</h1>
        <p>
            I have been involved in various outreach and communication activities,
            including public talks, workshops, and educational content creation.
            Below are some videos and talks I delivered during my career.
        </p>
        <h2>Azrieli Fellows Forum 2024 </h2>
        <div className="video-wrapper">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4kHX6_VbOJY"
                title="Science Talk"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
        <h2>BOLD video in collaboration with PixVideos (2020) </h2>
        <p>
            I wrote the script and designed the animation concept for this outreach video about the BOLD project (back then called SABAT for Single Atom BArium Tagging). The spanish animation company{" "}
            <a href="https://pix-videos.com/" target="_blank" rel="noopener noreferrer">
                PixVideos
            </a>{" "}
            carried out the bulk of the work and iterated with me until a satisfactory product was achieved.
        </p>
        <div className="video-wrapper">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/W4_Qjd3h2PU"
                title="Outreach Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>

       <h2>Poster Neutrino 2022 (virtual-Seoul, South Korea) </h2>
        <p>This video provided explanations of the poster I presented at the Neutrino 2022 conference, hosted virtually from Seoul. In it I detail the latest advances I had carried out for BOLD in my PhD. These results were published in{" "} 
            <a href="https://www.nature.com/articles/s41467-022-35153-0" target="_blank" rel="noopener noreferrer">
                 Nature Communications
            </a>{" "}. </p>
       <div className="video-wrapper">
            <iframe
                width="560"
                height="315"
                src="https://youtube.com/embed/jwfm_mmw-LY"
                title="Outreach Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
        <h2>Poster Neutrino 2020 (virtual-Fermilab, Chicago, US)</h2>
        <p>This was a companion video to the poster I presented at the Neutrino 2020 conference, hosted virtually from Fermilab (IL, U.S.A.). Consequently, I received the best poster award in the conference. These results were published in {" "}
            <a href="https://www.nature.com/articles/s41586-020-2431-5" target="_blank" rel="noopener noreferrer">
                 Nature
            </a>{" "}. </p>
        <div className="video-wrapper">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0l5_KLsLNuY"
                title="Outreach Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>

        <h2> Other Communications</h2>

        <table className="comm-table">
            <thead>
            <tr>
                <th>Year</th>
                <th>Type</th>
                <th>Title</th>
                <th>Venue</th>
            </tr>
            </thead>
            <tbody>
            {communications.map(({ year, type, title, link, venue }) => (
                <tr key={`${year}-${title}`}>
                <td>{year}</td>
                <td>{type}</td>
                <td>
                    {link
                    ? <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                    : title}
                </td>
                <td>{venue}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )

}