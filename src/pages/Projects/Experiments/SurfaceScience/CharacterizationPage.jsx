import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import './SurfaceScienceSubpages.css'
import SurfaceTechniques from './SurfaceTechniquesMap.jsx'
import ImageCarousel from '../../../../components/ImageCarousel'

import xpsScheme1 from './images/xps/xps_scheme1.png'
import xpsScheme2 from './images/xps/xps_scheme2.png'
import xpsScheme3 from './images/xps/xps_scheme3.png'
import xpsScheme4 from './images/xps/xps_scheme4.png'
import xps1 from './images/xps/xps1.jpg'
import xps2 from './images/xps/xps2.jpg'
import xps3 from './images/xps/xps3.jpg'
import xpsData from './images/xps/xps_data.jpg'
const xpsImages = [xpsScheme1, xpsScheme2, xpsScheme3, xpsScheme4, xps1, xps2, xps3, xpsData];
const xpsCaptions = [
  'We start with a sample, prepared in ultra-high vacuum (UHV) conditions to ensure a clean surface and mounted on a manipulator that allows for precise positioning and rotation within the XPS chamber.',
  'The sample is irradiated with a monochromatic X-ray source (commonly Al Kα or Mg Kα), which excites the core electrons of the atoms in the sample, causing them to be ejected from the surface due to the photoelectric effect. Other sources such as synchrotron radiation can also be used for more advanced measurements.',
  'The ejected photoelectrons are collected and energy-analyzed by an electron energy analyzer (typically a hemispherical analyzer), which measures their kinetic energy and intensity.',
  'The resulting data is processed to generate an XPS spectrum, which displays the binding energy of the electrons (calculated from the kinetic energy and the known X-ray photon energy) versus their intensity. Each peak in the spectrum corresponds to a specific element and chemical state present on the surface of the sample. (Scheme retrieved from <a href="https://jacobs.physik.uni-saarland.de/home/forschung/photomemission%20setup.jpg">this site</a>)',
  'The XPS instrument setup in the laboratory at CFM. This setup includes several preparation chambers for sample cleaning and material evaporation, a chamber for performing LEED (to determine surface crystallography), the main XPS analysis chamber and several manipulators to transfer the sample from one chamber to another.',
  'Another view of the XPS setup, several vacuum pumps and gauges can be seen to maintain and monitor the ultra-high vacuum (UHV) conditions required for XPS measurements.',
  'A colleague operating the XPS setup, performing one of the transfers required to bring the sample into the analysis chamber. Agility is needed to perform these transfers among this machinery!',
  'Some XPS spectra in the control software screen. The main spectrum corresponds to a silicon substrate (Si 2p peak at ~99 eV). Several regions of interest are defined to perform high-resolution scans of specific elements (C 1s, N 1s, O 1s, Si 2p).',
];


import stmScheme1 from './images/stm/stm_scheme1.png'
import stmScheme2 from './images/stm/stm_scheme2.png'
import stmScheme3 from './images/stm/stm_scheme3.png'
import stmExample1 from './images/stm/stm_examples1.png'
import stmExample2 from './images/stm/stm_examples2.png'
import stmExample3 from './images/stm/stm_examples3.png'
import stmExample4 from './images/stm/stm_examples4.png'
import stmExample5 from './images/stm/stm_examples5.png'
import stm1 from './images/stm/stm_setup1.jpg'
import stm2 from './images/stm/stm_setup2.jpg'
import stm3 from './images/stm/stm_setup3.jpg'
const stmImages = [stmScheme1, stmScheme2, stmScheme3, stmExample1, stmExample2, stmExample3, stmExample4, stmExample5, stm1, stm2, stm3];
const stmCaptions = [
  'STM working principle: a very sharp conductive tip is brought to a distance of a few angstroms to the sample surface, and a bias voltage is applied between the tip and the sample.', 
  'When the tip is sufficiently close to the surface, electrons can tunnel through the vacuum gap between the tip and the sample, resulting in a measurable tunneling current. The magnitude of this tunneling current is highly sensitive to the distance between the tip and the surface, allowing for atomic-scale resolution in imaging.',
  'The electronics control the tip position using piezoelectric actuators, and measure the tunneling current to generate a topographical map of the surface as the tip scans across it.',
  'STM topography image of a metallic surface (Au(111)) showing the atomic terraces and step edges characteristic of this surface.',
  'Zoom into the Au(111) surface, revealing the atomic lattice structure of the gold atoms on the surface.',
  'STM topography image of a Copper-Pthallocyanine (CuPc) molecular layer deposited on a graphite surface, showing individual molecules arranged in an ordered pattern.',
  'High-resolution STM image of a single CuPc molecule on silver (Ag(100)), revealing its internal structure and electronic features.',
  'Bonding resolution STM image of a single pentacene molecule on a copper surface (Cu(111)), showing the individual bonds within the molecule (bottom) and the corresponding balls-and-sticks model (top).',
  'Instrumental implementation of an STM setup in the former Apollo Lab at CFM (1)',
  'Instrumental implementation of an STM setup in the former Apollo Lab at CFM (2)',
  'A colleague performing a sample transfer into the STM preparation chamber',
];

import afm1 from './images/afm/afm1.jpg'
import afm2 from './images/afm/afm2.jpg'
import afm3 from './images/afm/afm3.jpg'
import afm4 from './images/afm/afm4.jpeg'
const afmImages = [afm1, afm2, afm3, afm4];
const afmCaptions = [
  'Schematic representation of AFM working principle. (retrieved from <a href="https://commons.wikimedia.org/w/index.php?curid=1389346">Wikimedia Commons</a>)',
  'Instrumental implementation of an AFM setup, bench-top version, with control electronics (right) and some cantilevers and samples (left).',
  'Detail of the AFM cantilever and tip system mount (AFM head)',
  'AFM topography image of a functionalized surface in the software used for image acquisition and a colleague operating the AFM',
];

import aloisaMap from './images/nexafs/aloisa_map.jpg'
import nexafs1 from './images/nexafs/aloisa_2024_1.jpg'
import nexafs2 from './images/nexafs/aloisa_2024_2.jpg'
import nexafs3 from './images/nexafs/aloisa_2024_3.jpg'
import nexafs4 from './images/nexafs/aloisa_2022_4.jpg'
import nexafs5 from './images/nexafs/aloisa_2022_5.jpg'
import nexafs6 from './images/nexafs/aloisa_2022.jpg'
const nexafsImages = [aloisaMap, nexafs1, nexafs2, nexafs3, nexafs4, nexafs5, nexafs6];
const nexafsCaptions = [
  'The ELETTRA synchrotron facility in Trieste, Italy is one of the existing laboratories in Europe where synchrotron radiation is produced and used for advanced material characterization. This map shows the layout of the facility, with the storage ring at the center and the different beamlines arranged around it. (Image retrieved from <a href="https://lucagarbi.space/project/elettra/">this website</a>)',
  'Exposition in the ELETTRA synchrotron facility, showing how the beamlines extract the synchrotron light from the storage ring and direct it towards different experimental endstations.',
  'The synchrotron light is extracted from the storage ring and directed towards different "beamlines", each specialized in specific techniques and energy ranges.',
  'The ALOISA beamline at ELETTRA is specialized in surface science techniques, including NEXAFS and XPS. It features a UHV endstation equipped with various sample preparation and analysis tools. The long tube at the right is the beamline itself, which transports the synchrotron light to another, further endstation.',
  'One remarkable feature of the ALOISA beamline is its capability to perform NEXAFS measurements with variable polarization, allowing for detailed studies of molecular orientation and electronic structure on surfaces. This is achieved by rotating the chamber itself around the beam axis.',
  'Me and a collaborator operating the electronics to prepare a NEXAFS measurement in November 2022.',
  'Me closing the valve connecting the preparation and characterization chambers at the ALOISA beamline.',
];

function ScrollToId({id, children }) {
  function handleClick(e) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      style={{ color: '#6fa3ff', textDecoration: 'underline', cursor: 'pointer' }}
    >
      {children}
    </a>
  );
}

export default function CharacterizationPage() {
  return (
    <div className="projects-container">
      <h1>Sample Characterization for Surface Science</h1>
      <p><Link to="/projects/experiments/SurfaceScience">Back to Surface Science index</Link></p>

      <p align='justify'>
        Characterization of the functionalized surfaces is essential to verify the survival of molecules to the deposition processes, their successful immobilization on surfaces and to assess the properties of the prepared sample.
      </p>
      <p id='surface_techniques' align='justify'>
        Various surface science techniques were employed for this purpose, including X-ray Photoelectron Spectroscopy (XPS), Atomic Force Microscopy (AFM), and Scanning Tunnelling Microscopy and Spectroscopy (STM-STS).
        XPS was particularly useful for determining the elemental composition and chemical states of the atoms on the surface, confirming the presence of the functionalizing molecules.
        AFM provided insights into the surface topography and roughness at the nano-scale, while STM confirmed this information with much higher resolution, achieving topography images of single-molecule interacting with Ba²⁺ ions.
      </p>
      <SurfaceTechniques />
      <p align='justify'>
        In addition to these techniques, Synchrotron Radiation-based methods such as Near Edge X-ray Absorption Fine Structure (NEXAFS) spectroscopy were also utilized when access to synchrotron facilities was available.
        These techniques provided valuable, high-resolution information about the chemical and electronic structure of the molecules on the surface, complementing the findings from laboratory-based methods.
      </p>
      <p align='justify'>
        I focused mainly on characterization through XPS, which allows for rapid testing of different conditions with relatively low effort compared to other techniques. 
        Furthermore, testing the affinity of molecules to Ba²⁺ is a natural domain of XPS, since the technique is sensitive to specific chemical bonds and changes in the local environment of concrete atoms.
        These characterization techniques allowed for a comprehensive understanding of the functionalized surfaces, guiding further optimization of the preparation protocols to achieve the desired sensor performance.
      </p>

      
      <h2 id='xps'>X-ray Photoelectron Spectroscopy (XPS)</h2>

      <p align='justify'>
        XPS is based on the photelectric effect, explained by Albert Einstein in 1905. 
        When a metal or conducting surface is irradiated with a sufficiently intense light source, the electrons are ejected from the surface of the material with a kinetic energy dependent on the frequency of the light, <i>f</i>.
        This kinetic energy, in turn, yields information on the binding energy of the electrons in the material, which is characteristic of each element and chemical state.
        Thus, by measuring the kinetic energy, <i>E<sub>K</sub></i> of the ejected electrons, we can deduce the binding energies and thus identify the elements present on the surface and their chemical states.
      </p>
      <p align='center'>
        <i>E</i><sub>bind</sub> = <i>hf</i> - <i>E<sub>K</sub></i>
      </p>
      <p align='justify'> 
        The following images show the working principle of XPS and its instrumental implementation. Click on the images or the buttons below to cycle through them.
      </p>
      <div className="project-details">
        <ImageCarousel images={xpsImages} captions={xpsCaptions} width={60} />
        <div className="project-text">
          <p align='justify'>
            XPS is a quantitative spectroscopic technique. That means it measures the elemental composition, empirical formula, chemical state, and electronic state of the elements within a material.
            In addition, the technique is extremely senstitive to the surface, probing only the top ~10 nm of the material, making it ideal for surface analysis.
            In an XPS experiment, the sample is irradiated with a monochromatic X-ray source (commonly Al Kα or Mg Kα), which excites the core electrons of the atoms in the sample, causing them to be ejected from the surface due to the photoelectric effect.
            By measuring the kinetic energy and number of these emitted electrons, we can deduce the binding energies of the electrons in the material, which are characteristic of each element and its chemical state.
          </p>
          <p align='justify'>
            In the context of the BOLD project, XPS was employed to analyze the functionalized surfaces and confirm the presence of the Ba²⁺-capturing molecules.
            In particular, I sublimated several varieties of FBI molecules on different substrates like SiO₂, ITO, gold and copper. 
            After that I added BaCl₂ salt to the surface to test the affinity of the molecules to Ba²⁺ ions.
            By analyzing the XPS spectra, I could verify the survival of the molecules to the sublimation process, and investigate the effect of coordination with Ba²⁺ on the chemical environment of the atoms in the molecules (C, N and O).
            Changes in the binding energies these peaks provided insights into the chemical interactions between the molecules and the Ba²⁺ ions, confirming successful immobilization and interaction on the surface.
          </p>
          </div>
        </div>

        <p align='justify'>
          The results obtained through XPS characterization were crucial to demonstrate the feasibility of the BOLD concept at the monolayer level and in the Ultra-High vacuum regime, which is similar in terms of extreme dryness to the conditions in which the NEXT experiment operates.
          These results were published in the <Link to='https://doi.org/10.1038/s41586-020-2431-5'> Nature </Link> and <Link to='https://doi.org/10.1038/s41467-022-35153-0'> Nature Communications </Link> journals, and presented in <HashLink to="/projects/outreach#conferences"> several conferences </HashLink>.
          To read more about the surface science studies performed during my PhD, visit the <Link to="/projects/experiments/SurfaceScience/results"> Surface Science Results </Link> page.
        </p>
        <p align='justify'>
          I performed dozens of XPS experiments during my PhD at CFM, both independently and in collaboration with other researchers. 
          To manage this, I develop a custom analysis workflow using Python and the xps_sw library I created for this purpose. You can read more about this tool in the <Link to="/projects/software/xps_sw"> XPS Software </Link> page.
          Analyzing and interpreting XPS spectra became second nature to me, and I developed a deep understanding of surface chemistry and the interactions between molecules and substrates at the atomic level.
          This expertise was instrumental in managing not only the surface science aspects, but also the overall progress of the BOLD project.
        </p>

        <ScrollToId id='surface_techniques'>Return to Setups Map</ScrollToId>

      <h2 id='stm'> Scanning Tunnelling Microscopy and Spectroscopy (STM-STS) </h2>

      <p align='justify'>
        STM is a powerful technique that allows for imaging surfaces at the atomic scale by exploiting one of the most fascinating phenomena in quantum mechanics: the quantum tunneling phenomenon.
      </p>
      <p align='justify'>  
        A sharp conductive tip is brought very close to the sample surface, and a bias voltage is applied between the tip and the sample.
        When the tip is sufficiently close to the surface (on the order of a few angstroms), electrons can tunnel through the vacuum gap between the tip and the sample, resulting in a measurable tunneling current.
        The magnitude of this tunneling current is highly sensitive to the distance between the tip and the surface, allowing for atomic-scale resolution in imaging.
      </p>

      <p align='justify'>
        The following images show the working principle of STM, some examples of topographical images obtained through STM and its instrumental implementation at the CFM lab. Click on the images or the buttons below to cycle through them.
      </p>
      <div className="project-details">
        <ImageCarousel images={stmImages} captions={stmCaptions} width={60} />
        <div className="project-text">
          <p align='justify'>
            By scanning the tip across the surface while maintaining a constant tunneling current (constant current mode) or a constant height (constant height mode), a topographical map of the surface can be generated.
          </p>
          <p align='justify'>
            Additionally, by varying the bias voltage and measuring the resulting tunneling current, STM can also provide information about the local electronic density of states of the sample, enabling spectroscopic analysis at specific locations on the surface.
            The Highest Occupied Molecular Orbital (HOMO) and Lowest Unoccupied Molecular Orbital (LUMO) of individual molecules can be probed using this technique. 
            This is crucial to study the behavior of the chemosensors used in BOLD, because the capture of Ba²⁺ ions affects these molecular orbitals.
            In semiconductors, this translates to the valence band and conduction band edges. 
            This technique is known as Scanning Tunneling Spectroscopy (STS).
          </p>
          <p align='justify'>
            One of the challenges of imaging single molecules through STM is the high mobility they usually display on surfaces, which can make it difficult to obtain stable and clear images.
            This is why the technique is often performed at very low temperatures, typically at liquid helium temperatures (around 4 K), to immobilize the molecules and achieve high-resolution imaging.
            Some instruments within Low-Temperature STM (LT-STM) can go as low as 300 mK, especially in studies of 2D materials.
            This is a fascinating field of research by itself, but not necessary for the BOLD project, since the ultimate goal is to operate at room temperature.
          </p>
          <p align='justify'>
            STM is widely used in surface science, nanotechnology, and materials science for studying surface structures, defects, and electronic properties at the atomic level.
            In the context of the BOLD project, STM was employed to achieve high-resolution imaging of FBI molecules deposited on surfaces, providing insights into the arrangement and behavior of individual molecules upon Ba²⁺ ion capture.
          </p>
          </div>
        </div>

      <p align='justify'>
        Although I did not operate the STM setup at CFM personally, I collaborated closely with Dr. Alejandro Berdonces-Layunta, an expert in STM techniques and personal friend, to perform measurements on functionalized surfaces.
        In addition to the studies on FBI molecules, we also investigated the deposition and behavior of another class of molecules called <Link to='https://onlinelibrary.wiley.com/doi/10.1002/anie.202016163'> starphenes</Link>. 
        These are large and fragile molecules which could not be sublimated. Instead, I deposited them via Atomic Layer Injection, a novel technique developed jointly by CFM and the startup Bihur Crystal precisely to deposit such delicate molecules.
        You can read more about this experiment in the <Link to="/projects/experiments/SurfaceScience/results"> Surface Science Results </Link> page.
      </p>

       
      <ScrollToId id='surface_techniques'>Return to Setups Map</ScrollToId>

      <h2 id='afm'> Atomic Force Microscopy (AFM) </h2>

      <div className="project-details">
        <ImageCarousel images={afmImages} captions={afmCaptions} width={60} />
        <div className="project-text">
          <p align='justify'>
            AFM is a type of scanning probe microscopy that provides high-resolution imaging of surfaces by measuring the forces between a sharp probe and the sample surface.
            The probe is mounted on a cantilever that deflects in response to the forces encountered as it scans across the surface.
            A laser beam is reflected off the back of the cantilever onto a position-sensitive photodetector, which measures the deflection of the cantilever.
            By maintaining a constant force between the probe and the surface, a topographical map of the surface can be generated with nanometer-scale resolution.
          </p>
          <p align='justify'>
            AFM can operate in various modes, including contact mode, tapping mode, and non-contact mode, each suited for different types of samples and applications.
            It is widely used in materials science, biology, and nanotechnology for characterizing surface roughness, morphology, and mechanical properties at the nanoscale.
            Below are some schematic representations of the AFM working principle and its instrumental implementation.
          </p>
          <p align='justify'>
            Because AFM can be performed in ambient conditions and does not require conductive samples, it is particularly useful for characterizing organic molecules immobilized on surfaces, as in the BOLD project.
            However, it lacks chemical specificity, which is why it is often complemented with techniques like XPS for a more comprehensive surface analysis. 
            However, AFM provided valuable information later on at the stage of optimizing surface functionalization protocols, especially regarding surface topography and roughness.
          </p>

        </div>
      </div>
      <ScrollToId id='surface_techniques'>Return to Setups Map</ScrollToId>

      <h2 id='nexafs'> Synchrotron Techniques </h2>
      <p align='justify'>
        Synchrotron radiation facilities produce intense and tunable X-ray beams that can be used for advanced material characterization techniques.
        These facilities accelerate electrons to nearly the speed of light and use magnetic fields to bend their trajectory, causing them to emit X-rays as they change direction.
        Because the X-ray energy can be precisely controlled, synchrotron-based techniques offer enhanced sensitivity and resolution compared to laboratory-based methods.
      </p>

      <p align='justify'>
        Furthermore, the high brightness and collimation of synchrotron X-rays enable the study of surfaces and interfaces with exceptional detail, making them ideal for surface science investigations.
        In particular grazing-angle XPS allowed us to enhance the surface sensitivity of our XPS measurements, enabling more precise analysis of the functionalized surfaces in the BOLD project.
      </p>


      <div className="project-details">
        <ImageCarousel images={nexafsImages} captions={nexafsCaptions} width={60} />
        <div className="project-text">
          <p align='justify'>
            In addition, the manipulator at the ALOISA beamline allowed for annealing of the samples up to ~200ºC, which was useful to test the thermal stability of the molecules.
            This way, Temperature-dependent XPS (T-XPS) measurements provided insights into the desorption behavior of the Chlorine atoms in the BaCl₂ salt used to provide Ba²⁺ ions to the surface at about 90ºC.
          </p>
          <p align='justify'>
            Another technique I used is Near Edge X-ray Absorption Fine Structure (NEXAFS) spectroscopy, which provides information about the unoccupied electronic states and local chemical environment of specific elements in a material.
            NEXAFS is particularly sensitive to the orientation and bonding of molecules on surfaces, making it a valuable tool for studying functionalized surfaces in the BOLD project.
          </p>
          <p align='justify'>
            The orientation of molecules can be inferred by comparing NEXAFS spectra acquired with different polarization directions of the incident X-rays:
            when the electric field vector of the X-rays is aligned with specific molecular orbitals (usually π* orbitals), the absorption intensity is enhanced, providing insights into the molecular orientation on the surface.

          </p>
          <p align='justify'>
            During my PhD, I had the opportunity to perform XPS and NEXAFS measurements at the ALOISA beamline of the ELETTRA synchrotron facility in Trieste, Italy. 
            We were granted beamtime in November 2022 (during my PhD) and again in November 2024 (as a postdoc) to carry out these experiments.
            This beamline is specialized in surface science techniques, including NEXAFS and XPS, and features a UHV endstation equipped with various sample preparation and analysis tools.
          </p>
        </div>
      </div>

      <p align='justify'>
        In addition, I also had the chance to perform experiments in <href to='https://www.cells.es/en/instruments/beamlines/bl29-boreas'> the ALBA synchrotron facility </href> in Barcelona, Spain, during my PhD in 2020. 
        This was a three-day experiment focused on testing the ALI technique with delicate molecules, like FBIs, as explained in the <Link to="/projects/experiments/SurfaceScience/results"> Surface Science Results </Link> page.
        The technique used there was X-ray (magnetic) circular and linear dichroism (XMCD/XMLD) spectroscopy, which is sensitive to the magnetic properties of materials. 
        Since organic molecules like FBIs are non-magnetic, I deposited molecules pre-chelated in solution with Ba²⁺ ions to test the technique.
        Although the results were not conclusive due to time constraints and experimental challenges, this experience provided valuable insights into the capabilities and limitations of synchrotron-based techniques for surface science studies.
      </p>

      <h2> Summary and Results </h2>
      
      <p align='justify'>
        In summary, surface science techniques played a crucial role in the BOLD project at CFM, enabling the preparation and characterization of functionalized surfaces at the atomic level.
        Techniques such as XPS, STM-STS, and AFM provided valuable insights into the chemical composition, molecular arrangement, and surface topography of the samples, guiding the optimization of surface functionalization protocols.
        These efforts were instrumental in demonstrating the feasibility of the BOLD concept and advancing the development of novel sensor technologies for Ba²⁺ ion detection.
      </p>
      <p align='justify'>
        To read more about the surface science studies performed during my PhD, visit the <Link to="/projects/experiments/SurfaceScience/results"> Surface Science Results </Link> page.
      </p>
      <ScrollToId id='surface_techniques'>Return to Setups Map</ScrollToId>

      <p>
        <Link to="/projects/experiments/SurfaceScience">Back to Surface Science index</Link>
      </p>

    </div>
  )
}