import React, { useState , useEffect } from 'react'
import './Bold.css'
import BoldInteractiveMap from './BoldInteractiveMap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// import nextImg from '../images/fbi_cover_v2.png'
import bold2 from './images/BOLD_scheme/BOLD_scheme.002.png'
import bold3 from './images/BOLD_scheme/BOLD_scheme.003.png'
import bold4 from './images/BOLD_scheme/BOLD_scheme.004.png'
import bold5 from './images/BOLD_scheme/BOLD_scheme.005.png'
import bold6 from './images/BOLD_scheme/BOLD_scheme.006.png'
import bold7 from './images/BOLD_scheme/BOLD_scheme.007.png'
import bold8 from './images/BOLD_scheme/BOLD_scheme.008.png'
import bold9 from './images/BOLD_scheme/BOLD_scheme.009.png'
import bold10 from './images/BOLD_scheme/BOLD_scheme.010.png'
import bold11 from './images/BOLD_scheme/BOLD_scheme.011.png'
import bold12 from './images/BOLD_scheme/BOLD_scheme.012.png'


// Import images for each section
// Naph images
import naph1 from './images/naph_molecs/molecs.001.png' // Replace with actual filenames
import naph2 from './images/naph_molecs/molecs.002.png'
import naph3 from './images/naph_molecs/molecs.003.png'

// FBI images
import fbi1 from './images/fbi_molecs/molecs.004.png' // Replace with actual filenames
import fbi2 from './images/fbi_molecs/molecs.005.png'
import fbi3 from './images/fbi_molecs/molecs.006.png'

// Tri images
import tri1 from './images/tri_molecs/molecs.007.png' // Replace with actual filenames
import tri2 from './images/tri_molecs/molecs.008.png'
import tri3 from './images/tri_molecs/molecs.009.png'

// Surfaces images
import naturePaper from './images/surfaces/nature_evaporation.png'
import natureCommPaper from './images/surfaces/natureComm_stm.png'

// Ion sources images
import evaporatorImg from './images/ion_sources/evaporator.png'
import ionSourceImg from './images/ion_sources/ion_source.png'
import raTagImg from './images/ion_sources/ra_tag.png';

function PaperListItem({ href, imgSrc, imgAlt, children }) {
  // Internal link if href starts with '/'; external otherwise
  const isInternal = href && href.startsWith('/');
  const linkProps = isInternal
    ? { to: href }
    : { href, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <li className="paper-list-item">
      <div className="paper-list-img-wrapper">
        {isInternal ? (
          <Link {...linkProps}>
            <img
              src={imgSrc}
              alt={imgAlt}
              className="paper-list-img"
            />
          </Link>
        ) : (
          <a {...linkProps}>
            <img
              src={imgSrc}
              alt={imgAlt}
              className="paper-list-img"
            />
          </a>
        )}
      </div>
      <div className="paper-list-content">{children}</div>
    </li>
  );
}

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
function ProjectDetailSection({ images, index, setIndex, title, children }) {
  return (
    <div className="project-details">
      <div className="image-wrapper">
        <img
          src={images[index]}
          alt={`${title} molecule ${index + 1}`}
          className="project-image clickable-image"
          onClick={() => setIndex((index + 1) % images.length)}
        />
        <div className="image-hint">
          Click to view next ({index + 1}/{images.length})
        </div>
      </div>
      <div className="project-text">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default function BoldPage() {
  const [boldIndex, setBoldIndex] = useState(0)
  const [naphIndex, setNaphIndex] = useState(0)
  const [fbiIndex, setFbiIndex] = useState(0)
  const [triIndex, setTriIndex] = useState(0)

  const boldImages = [
    bold2, bold3, bold4, bold5, bold6,
    bold7, bold8, bold9, bold10, bold11, bold12
  ]
  const naphImages = [naph1, naph2, naph3]
  const fbiImages = [fbi1, fbi2, fbi3]
  const triImages = [tri1, tri2, tri3]

  const location = useLocation();

  // Ensure we scroll to top on navigation when there is no hash.
  // If a hash is present (e.g. navigation via HashLink), leave scrolling to the hash handler.
  useEffect(() => {
    if (location.hash) return;
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return (
    <div className="main-container projects-container">
      
      <h1 id="bold-start">BOLD: Barium atOm Light Detection</h1>
      <div className="image-wrapper">
        <img
          src={boldImages[boldIndex]}
          alt={`BOLD Scheme ${boldIndex + 1}`}
          className="project-image clickable-image"
          onClick={() => setBoldIndex((boldIndex + 1) % boldImages.length)}
        />
        <div className="image-hint">
          Click to view next ({boldIndex + 1}/{boldImages.length})
        </div>
      </div>

      <p align='justify'>
        The Barium atOm Light Detection (BOLD) project is a novel technique for event discrimination
        that is being explored in the NEXT collaboration. I have been involved in it shortly after 
        its inception and thus I have witnessed its evolution from a mere idea to a fully-fledged R&D project.
      </p>
      <p align='justify'>The main idea behind BOLD is to capture the barium ion (Ba²⁺) created in the decay of ¹³⁶Xe as a tag for 
        double beta signal events. Since no other source of barium ions is expected in the detector,
        this technique has the potential to eliminate all background sources in the experiment.
        This would allow the NEXT experiment to reach unprecedented sensitivities to the neutrinoless double
        beta decay of ¹³⁶Xe.
      </p>

      {/* Insert the new interactive map component here, two paragraphs after the video */}
      <BoldInteractiveMap />

      <p align='justify'>The BOLD project is based on the principle of Single Molecule Fluorescence Imaging (SMFI), 
         The technique involves using fluorescent dyes that can capture specific ions, such as Ba²⁺, 
         and emit fluorescence when excited by a specific wavelength of light. 
         By detecting this fluorescence, it is possible to identify the presence of the target ion with high precision. 
         The challenge lies in adapting this technique to the harsh environment of a high-pressure xenon gas TPC,
          which requires careful selection of dyes and optimization of the detection system.
      </p>

      <h2 id="synthesis">Fluorescent Taggers</h2>
      
      <p align='justify'>
        The fluorescent dyes, or taggers, are the central piece in the BOLD project. 
        These are molecules that are specifically selected (and in some cases even designed from scratch) for their ability to bind to the Ba²⁺ 
        and the light signature they display when this capture occurs. This light signature is the fingerprint of Ba²⁺. 
        We have studied different molecules which differ in the mechanism that produces that light signature. 
        This is important because the optical detection technique must be adapted to the specific mechanism. 
        They fall mainly in three categories:
      </p>


      {/* Light Switch Section */}
      <ProjectDetailSection
        images={naphImages}
        index={naphIndex}
        setIndex={setNaphIndex}
        title="The Light switch:"
      >
        <p align='justify'>
          These are molecules that are essentially switched on when the Ba²⁺ ion is captured. The fluorescence light is <i>off</i> when the molecule is in free state,
          and <i><b>on</b></i> when it catches it. The detection technique then revolves around measuring the intensity of the tagger in both states. 
          If the light intensity in the <b>on</b> state is sufficiently large with respect to the <i>off</i> state, then a threshold can be used to discriminate between them.
        </p>
        <p align='justify'>
          Several types of molecules display this effect. The most promising of these are naphtalamide derivates linked to a crown-ether.
          The crown-ether acts as the main ion-receptor unit. This is also the component that determines the ion selectivity.
          You can think of it as a baseball glove. The size of the glove has to suit the size of the ball. 
          The glove is obviously no good if it is much smaller than the ball. And if it's too big, then the catcher wouldn't notice if the ball has hit it or not.
        </p>
        <p align='justify'>
          The naphtalamide is the component that emits fluorescence. However, the link to the crown-ether creats a free electron pair, which acts like a circuit short. 
          This is why the tagger in the free state does not emit light. In the presence of the ion, the electron pair interact with it, disabling the short, and effectively switching <b>on</b> the fluorescence.
        </p>
      </ProjectDetailSection>


      {/* Traffic Light Section */}
      <ProjectDetailSection
        images={fbiImages}
        index={fbiIndex}
        setIndex={setFbiIndex}
        title="The Traffic Light:"
      >
        <p align='justify'>
          These molecules emit a different in wavelengths in their free state and in the Ba-bound state. They are the are so-called Fluorescent Bicolor Indicators (FBI). 
          The crown-ether is also the ion catcher of FBIs. The fluorophore component is different from that of the light switch.
          It contains a rotatable "neck" which plays a crucial role in the detection mechanism. In the free state,
          the neck acts as a buffer between the crown-ether and the rest of the fluorophore. This means that there is no circuit short like in the Light Switch Tagger, and therefore no <i>off</i> state.
          In fact, in the free state, the neck itself contributes to the light emission.  However, when the ion is captured, the neck component is attracted to it. 
          This interaction results in the neck getting twisted around its axis and getting disconnected from the light emission circuit.
          To understand why this produces a change in the color we need to discuss the basics of how fluorescence works.
        </p>
        <p align='justify'>
          Fluorescence light is produced by using a laser to promote electrons to an excited state. When the electrons relax into their ground state, a fluorescence photon is emitted.
          In organic compounds, these electrons exist in molecular orbitals with high aromaticity (the pentagon and hexagon cycles). 
          The molecular orbitals of FBIs in the free state span the neck and the main fluorophore unit. 
          However, in the ion-bound state, these orbitals are limited only to the latter.
          This means that the energy of the electron cloud that floats around the orbitals increases. 
          Higher energy electrons emit higher frequency (and shorter wavelength) photons, and with them, the traffic light changes colors.
        </p>
      </ProjectDetailSection>


      {/* Old Lightbulb Section */}
      <ProjectDetailSection
        images={triImages}
        index={triIndex}
        setIndex={setTriIndex}
        title="The old lightbulb:"
      >
        <p align='justify'>
          Think of these molecules as that old lightbulb that stays on for a few seconds after you have switched off the current. 
          The neat trick is that, in the absence of ion, the lightbulb switches on and off sharp as a razor. 
          This is a fluorescence process, and it therefore has a lifetime in the order of nanoseconds.
          Instead, when the tagger captures the ion, the light lingers for a few more (mili)seconds. 
          The interaction with the ion induces a change from fluorescence to phosphorescence, which is usually 1000 times slower. 
          Oh! And on top of that, these molecules also change colors!
        </p>
        <p align='justify'>
          The photochemistry of these phosphorescent molecules is a bit more intricate than for the previous categories (in fact we are still trying to understand it!).
          The main idea is that the inorganic component (Ir-3-bipyrimidine) is responsible for the phosphorescence. 
          This is because atoms with many orbital levels like Iridium create forbidden molecular states. 
          The excited electrons can tunnel to this state, but then they are "trapped" because the transition to the ground state is "forbidden". 
          In more technical terms, this means that it is highly unlikely for this transition to occur, i.e. it occurs with a much slower lifetime.
        </p>
        <p align='justify'>
          In the absence of the ion, the organic component that links to the crown-ether takes all the protagonism in the light emission theater.
          More technically, the emission is produced primarily by the orbitals of the organic component, which contain no forbidden states. 
          However, this changes when the ion interacts with the crown-ether an the organic component. Then it's time for the iridium to shine! ... Only a bit more slowly.
        </p>
      </ProjectDetailSection>
      
    <h2 id="surfaces">Sensor Assembly</h2>
        <p align='justify'>
          One of the main challenges in the BOLD project is to adapt the SMFI technique to the harsh environment of a high-pressure xenon gas TPC.
          This requires the development of a robust and efficient sensor assembly on a substrate that can operate reliably under these conditions.
          The sensor assembly consists of several components:
          <ul style={{ textAlign: 'left' }} >
          <li> A transparent substrate coated with the fluorescent taggers, </li>
          
          <li> Linking the taggers to the substrate in a way that preserves their functionality,</li>
          
          <li> An optical system for excitation and detection of the fluorescence light,</li>
          
          <li> A mechanical structure to move the assembly in place to the desired location within the TPC.</li>
          </ul>

          I have been involved in the design and testing of various sensor assembly prototypes, exploring different substrate materials and configurations to optimize performance.
          This required extensive work in surface science, chemistry and optics. During my PhD I focused on developing techniques for coating the substrates with the taggers and characterizing their performance using surface science techniques.
          For more details about this work, please refer to the two papers we published during my PhD: 

          <ul id='papers-list' style={{ listStyle: 'none', padding: 0 }}>
            <PaperListItem
              href="https://doi.org/10.1038/s41586-020-2431-5"
              imgSrc={naturePaper}
              imgAlt="Nature Paper"
            >
              <span>
                Paper 1: I. Rivilla, B. Aparicio, J. M. Bueno ..., <u>Pablo Herrero</u> et al., <i>Nature</i> volume <b>583</b>, pages 48–54 (2020),
              </span>{' '}
              <a
                href="https://doi.org/10.1038/s41586-020-2431-5"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '1.1em', color: '#6fa3ff', textDecoration: 'none' }}
              >
                "Fluorescent bicolour sensor for low-background neutrinoless double β decay experiments."
              </a>
            </PaperListItem>
            <PaperListItem
              href="https://doi.org/10.1038/s41467-022-35153-0"
              imgSrc={natureCommPaper}
              imgAlt="Nature Communications Paper"
            >
              <span>
                Paper 2: <u>Pablo Herrero</u> et al. <i>Nature Communications</i> volume <b>13</b>, Article number: <b>7421</b> (2022).
              </span>{' '}
              <a
                href="https://doi.org/10.1038/s41467-022-35153-0"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginRight: '18px' }}
              >
                "Ba+2 ion trapping using organic submonolayer for ultra-low background neutrinoless double beta detector."
              </a>
            </PaperListItem>
          </ul>
          
          The page on <Link to="/projects/experiments/SurfaceScience">Surface Science for BOLD at CFM</Link> also contains relevant information about this topic.
        </p>

    <h2 id="optics">Single Molecule Light Detection</h2>
      <p align='justify'>
        Light detection sensitivity at the single-molecule level is achieved through dedicated optical microscopy. 
        A laser is used to promote the electrons in the molecular orbitals to their excited states. When they relax back to the ground state,
        the fluorescence photons are emitted with a longer wavelength than that of the laser. Those photons are collected by a microscope objective,
        and separated from the laser light path using a dichroic mirror and several different filters. Finally, a camera detects the photons and converts them into an image.
        This is one of the main branches of R&D in the BOLD project, and I have been deeply involved in it. You can find more details about it in the <Link to="/projects/experiments/SabbathHuji">HUJI microscopy Page</Link>.
      </p>
      <p align='justify'>
        We can then follow the time dependence of the detected light in a fixed spot. The signature of a single molecule is a step-like decrease in light intensity.
        This is due to a phenomenon called photobleaching. Basically, when molecules are exposed to laser radiation for long enough, they end up disintegrating and ceasing to emit light.
        Think of it as popcorn. When you put the corn kernels in the microwave, they start popping one by one until there are no more left.
        Similarly, when a molecule is exposed to laser light, it eventually "pops" and stops fluorescing.
        By analyzing these step-like decreases in light intensity, we can identify the presence of single molecules and study their properties.
      </p>

    <h2 id="ion-sources">Reproducing the ion capture conditions</h2>
        <p align='justify'>
          One of the key factors in the BOLD project is to ensure that the fluorescent taggers can effectively capture Ba²⁺ ions under conditions similar to those in the NEXT detector.
          This involves developing different ion sources that can produce Ba²⁺ ions in a controlled manner.
          I have been involved in the design, construction, and testing of several ion sources, listed below:
          <ul style={{ textAlign: 'justify' }}>
            <PaperListItem
              href="/projects/experiments/SurfaceScience"
              imgSrc={evaporatorImg}
              imgAlt="Evaporator Scheme"
            >
              <span>
                <b>1. Barium salt evaporators: </b> The simplest mechanism to test interaction of fluorophores with Ba²⁺ is to add the ions in form of a salt.
              </span>{' '}
              <span>
              In the <ScrollToId id="papers-list"> two publications listed above</ScrollToId>, we used Ba(ClO₄)₂ and BaCl₂ obtained by sublimating the salts in Ultra-High Vacuum and depositing them on the tagger-coated substrates.
              The anions behave as spectators in the chelation process, so they are not expected to affect the results.
              This assures the purity of the deposited material and allowed us to study the interaction of chemosensors with Ba²⁺ under controlled conditions with surface science techniques.
              However, controlling the amount of Ba²⁺ deposited can be challenging. A thickness in the scale of a few monolayers (a single layer of closely packed atoms or molecules) can be achieved,
              but this is not sparse enough to mimic the conditions in the NEXT detector (one single ion). In addition, the process needs to be studied in high-pressure gas xenon, not in Ultra-High Vacuum (which is required for sublimation).
              </span>{' '}
            </PaperListItem>

            <PaperListItem
              href="/projects/experiments/BaSource"
              imgSrc={ionSourceImg}
              imgAlt="Ion Source Scheme"
            >
              <span>
                <b>2. Dedicated ion sources: </b> Two Ba²⁺ ion sources have been developed by the NEXT collaboration. One is based on a commercial plasma source and it operates under high-vacuum.
                More details on this system can be found in <Link to="https://iopscience.iop.org/article/10.1088/1748-0221/18/07/P07044">this publication</Link>.
              </span>{' '}
              <span>
              The second source is a custom-built system which features differential pumping stages to allow operation in higher gas pressures.
              The ion is guided by ion optics through a tiny capillary into the target chamber filled with a few mbar of helium gas.
              This gas collides with the ions, reducing their energy to a few eV, which is the expected energy of arriving Ba²⁺ ions in the NEXT detector.
              More details about this source can be found in <Link to="/projects/experiments/BaSource">the BOLD Ion Source Page</Link>.
              </span>{' '}
            </PaperListItem>
            
            <PaperListItem
              href="/projects/experiments/ritaSetup"
              imgSrc={raTagImg}
              imgAlt="Ion Source Scheme"
            >
              <span>
                <b>3. High-pressure sources: </b> The only realistic way to fully reproduce the conditions in the NEXT detector is to introduce high-energy Ba²⁺ ions produced in a dedicated research beamline, through a thin window and into the high-pressure xenon gas.
                This is the approach intended to follow by <Link to="https://doi.org/10.3390/atoms12120071">the nEXO collaboration at TRIUMF</Link>, with a <i>liquid</i> xenon TPC.
              </span>{' '}
              <span >
              However, a much more simpler and versatile source can be developed by making use of a little chemistry trick. Barium is chemically identical to Radium (both are alkaline earth metals), and therefore,
              Radium ions (Ra²⁺) can be used as a proxy for Ba²⁺. The advantage of Ra²⁺ is that it is radioactive, and therefore it can be used to produce ions in-situ within the high-pressure xenon gas.
              By introducing a tiny amount of a thorium salt into the gas, the alpha decay of Th-228 produces a recoiling daughter nucleus of Ra-226 with an energy of about 100 keV.
              These ions can then be captured by the fluorescent taggers, allowing us to study their behavior under realistic conditions.
              On top of that, the alpha particles produced in the decay can be used as a flag for the ion emission event at a single-atom level.
              This project is undergoing, and I am actively involved in its development. You can read more about it <Link to="/projects/experiments/ritaSetup">in this page</Link>.
              </span>
            </PaperListItem>
          </ul>
        </p>
    </div>
  )
}