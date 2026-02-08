import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import ImageCarousel from '../../../../components/ImageCarousel'

import './SurfaceScienceSubpages.css'

import fbiBaVid from './images/results/fbi_ba_surface.mp4'
import pelletImg1 from './images/results/pellet_evaporation1.png'
import pelletImg2 from './images/results/pellet_evaporation2.png'
import pelletImg3 from './images/results/pellet_evaporation3.png'

const pelletImages = [pelletImg1, pelletImg2, pelletImg3];
const pelletCaptions = [
  "Photograph of a sillica pellet containing FBI-G1 molecules and detailed image with SEM microscope.",
  "Evaporation setup.",
  "2PA results: the two different regions of the spectrum show a shift in fluorescence upon Ba²⁺ chelation."
];

import g1Xps0 from './images/results/xps-g1_0.png'
import g1Xps1 from './images/results/xps-g1_1.png'
import g1Xps2 from './images/results/xps-g1_2.png'
import g1Xps3 from './images/results/xps-g1_3.png'

const g1XpsImages = [g1Xps0, g1Xps1, g1Xps2, g1Xps3];
const g1XpsCaptions = [
  "Experiment concept: FBI-G1 is deposited on a gold substrate (Au (111)) through UHV sublimation. Then, we evaporate BaCl₂ salt on the sample and compare the XPS spectra.",
  "XPS spectra showing the molecular core levels (O 1s, N 1s and C 1s) in the absence of Ba²⁺ (pristine FBI-G1). The coverage is 0.6 ML, or 60% of a full monolayer.",
  "After Ba²⁺ addition we observe a clear shift toward higher Binding Energy (BE) in both O 1s and N 1s peaks, indicating successful chelation and an interaction with the whole molecule, not just the crown. The symbol θ indicates the coverage of Ba²⁺ with respect to a full monolayer.",
  "If we deposit NaCl instead of BaCl₂, only a shift is observed in the O 1s peak, indicating that the ion only interacts with the crown ether as expected."
];

import xpsProg1 from './images/results/xps_progressive/xps_progressive.001.png'
import xpsProg2 from './images/results/xps_progressive/xps_progressive.002.png'
import xpsProg3 from './images/results/xps_progressive/xps_progressive.003.png'
import xpsProg4 from './images/results/xps_progressive/xps_progressive.004.png'
import xpsProg5 from './images/results/xps_progressive/xps_progressive.005.png'
import xpsProg6 from './images/results/xps_progressive/xps_progressive.006.png'
import xpsProg7 from './images/results/xps_progressive/xps_progressive.007.png'
import xpsProg8 from './images/results/xps_progressive/xps_progressive.008.png'

const xpsProgImages = [xpsProg1, xpsProg2, xpsProg3, xpsProg4, xpsProg5, xpsProg6, xpsProg7, xpsProg8];
const xpsProgCaptions = [
  "Progressive addition of Ba²⁺ on FBI-G1: Pristine state (0.6 ML coverage).",
    "θ = 0.17, 0.22 Ba²⁺ coverage",
    "θ = 0.24 Ba²⁺ coverage",
    "θ = 0.33 Ba²⁺ coverage",
    "θ = 0.35 Ba²⁺ coverage",
    "θ = 0.42 Ba²⁺ coverage",
    "The same effect occurs with only the crown-ether compound, confirming that the oxygen atoms in the crown are responsible for chelation.",
    "Detail of the Au 4f shoulder containing the O 1s peak and the deconvolution fits."
];

import cuImg from './images/results/cu_substrate.png'
import itoImg from './images/results/ito_substrate.png'
const substrateImages = [cuImg, itoImg];
const substrateCaptions = [
  "O 1s core level of FBI-G1 on Copper (Cu (111)) substrate before (green) and after adding Ba²⁺ (blue), showing the same effect as on gold. Inset: same but for Na⁺ addition (orange).",
  "O 1s core level of FBI-G1 on ITO substrate before (green) and after (blue) showing the same effect as on gold. The main O 1s peak corresponds to oxygen atoms in the ITO substrate (inset) which must be subtracted to see the effect."
];


import g1g4Img from './images/results/xps_g2g3/g1g4-scheme.png'
import g1g4SpectraImg from './images/results/xps_g2g3/g1g4-spectra.png'
import g1g3IntactImg from './images/results/xps_g2g3/g1g3-intact.png'
import g2BaXpsImg from './images/results/xps_g2g3/g2_Ba_xps.png'
import g3BaXpsImg from './images/results/xps_g2g3/g3_Ba_xps.png'

// import g3Img from './images/results/fbi_g3.png'

const g2g3Images = [g1g4Img, g1g4SpectraImg, g1g3IntactImg, g2BaXpsImg, g3BaXpsImg];
const g2g3Captions = [
  "Structures of FBI-G1, FBI-G2 and FBI-G3 molecules. FBI-G2 has an inverted C-N bond in the fluorophore, while FBI-G3 has a second crown-ether to increase flexibility.",
  "Fluorescence emission spectra of the 4 different generations of FBI molecules in solution.",
  "XPS spectra showing the molecular core levels (O 1s, N 1s and C 1s) of FBI-G1 (green), FBI-G2 (red) and FBI-G3 (orange) deposited on Au (111) through UHV sublimation. The correct stoichiometry ratios confirm that all molecules sublimate intactly.",
  "XPS spectra showing the Ba 3d, O 1s, N 1s and C 1s core levels of FBI-G2 before (red) and with different Ba²⁺ doses, showing the same effect as FBI-G1: a shift in both O 1s and N 1s peaks.",
  "XPS spectra showing the Ba 3d, O 1s, N 1s and C 1s core levels of FBI-G3 before (red) and with different Ba²⁺ doses, showing the same shift in O 1s as FBI-G1 and FBI-G2, and a small shift in C 1s instead of N 1s.",
];

import g2g3AloisaImg1 from './images/results/g2g3_aloisa/g2g3_aloisa.001.png'
import g2g3AloisaImg2 from './images/results/g2g3_aloisa/g2g3_aloisa.002.png'
import g2g3AloisaImg3 from './images/results/g2g3_aloisa/g2g3_aloisa.003.png'
const g2g3AloisaImages = [g2g3AloisaImg1, g2g3AloisaImg2, g2g3AloisaImg3];
const g2g3AloisaCaptions = [
    "High-resolution XPS of pristine FBI-G2 measured at the ALOISA beamline (top) compared to our lab measurements (bottom), showing rough agreement in peak positions and shapes. The extreme surface resolution of the synchrotron allows to resolve more clearly the different components of each peak.",
    "High-resolution XPS of FBI-G2 before (red) and after adding Fe²⁺ at the ALOISA beamline (top) compared to our lab measurements with Ba²⁺ (bottom). For Fe2+ chelation, the shift in O 1s is toward lower binding energy.",
    "High-resolution XPS of FBI-G3 before (red) and after adding Fe²⁺ at the ALOISA beamline."
    ];

import dechlorination1 from './images/results/dechlorination/dechlorination.001.png'
import dechlorination2 from './images/results/dechlorination/dechlorination.002.png'
import dechlorination3 from './images/results/dechlorination/dechlorination.003.png'
import dechlorination4 from './images/results/dechlorination/dechlorination.004.png'
const dechlorinationImages = [dechlorination1, dechlorination2, dechlorination3, dechlorination4];
const dechlorinationCaptions = [
    "Fe 2p and Cl 2p core-level peaks after pristine FeCl₂ deposition on Au (111) substrate (with no FBI molecule).",
    "Fe 2p and Cl 2p core-level peaks on a FBI-G2 functionalized surface after FeCl₂ deposition: the Fe 2p peak appears on the same position but the Cl 2p peak shifts, indicating dissociation of the salt.",
    "Annealed Fe 2p and Cl 2p core-level peaks on a FBI-G2 functionalized surface after FeCl₂ deposition: at around 90 ºC the Chlorine disappears.",
    "Temperature-dependent XPS of Cl 2p peak intensity showing the desorption of Cl⁻ ions from the surface upon heating, confirming that Cl⁻ acts as a passive spectator during chelation."
    ];

import stmFbiBa1 from './images/results/stm_results/stm_results.001.png'
import stmFbiBa2 from './images/results/stm_results/stm_results.002.png'
import stmFbiBa3 from './images/results/stm_results/stm_results.003.png'
import stmFbiBa4 from './images/results/stm_results/stm_results.004.png'
import stmFbiBa5 from './images/results/stm_results/stm_results.005.png'
import stmFbiBa6 from './images/results/stm_results/stm_results.006.png'
import stmFbiBa7 from './images/results/stm_results/stm_results.007.png'
import stmFbiBa8 from './images/results/stm_results/stm_results.008.png'
const stmFbiBaImages = [stmFbiBa1, stmFbiBa2, stmFbiBa3, stmFbiBa4, stmFbiBa5, stmFbiBa6, stmFbiBa7, stmFbiBa8];
const stmFbiBaCaptions = [
    "STM images of FBI-G1 molecules deposited on Au (111) substrate through UHV sublimation. The terraces of the gold substrate are visible in the background. Most molecules aggregate in large islands.",
    "STM images of FBI-G1 on Au (111). Some isolated molecules can be observed on the terraces.",
    "STM images of FBI-G1 on Au (111) after Ba²⁺ addition. The same structure is repeated in different orientations throughout the surface.",
    "Bonding-resolution STM image of FBI-G1. Since the molecule is non-planar, different parts appear with different brightness levels.",
    "Bonding-resolution STM images of the fluorophore moiety of FBI-G1 (bottom left) and fluorophore + crown-ether moieties (top right). These images helped identify the different parts of the molecule.",
    "STS measurements on FBI-G1 before Ba²⁺ addition showing the HOMO and LUMO peaks.",
    "STM image and STS measurements on FBI-G1 after Na⁺ addition showing no changes in the structure.",
    "STM image and STS measurements on FBI-G1 after Ba²⁺ addition, showing a clear change in the structure and a wider HOMO-LUMO gap."
];

import g2Stm1 from './images/results/stm_g2/stm_g2.001.png'
import g2Stm2 from './images/results/stm_g2/stm_g2.002.png'
const g2StmImages = [g2Stm1, g2Stm2];
const g2StmCaptions = [
    "Large-scale STM image of FBI-G2 on Au (111) substrate. Unlike FBI-G1, FBI-G2 doesn't form islands but primarily dimers.",
    "Comparison of structure formation for FBI-G2 at different coverages."
]

import starphene1 from './images/results/stm_starphene/starphene_stm.jpg'
import starphene2 from './images/results/stm_starphene/starphene_clean.png'
import starphene3 from './images/results/stm_starphene/starphene_sts.png'
import starphene4 from './images/results/stm_starphene/large_stm_starphene.png'
const starpheneImages = [starphene1, starphene2, starphene3, starphene4];
const starpheneCaptions = [
    "(a) STM image of the starphene/Au(111) sample after deposition and post-annealing to 150 ºC. (b) HR-STM image (CO tip, constant height) of the hydrogenated starphene before removing hydrogens. c) Chemical structure of the hydrogenated starphene.",
    "HR-STM image (CO tip, constant height) of a starphene after hydrogen removal. The scale bar corresponds to 5 Å (500 pm).",
    "(b) STS spectra on starphene showing various resonances marked with dashed lines. The inset marks the positions at which each of the spectra are taken. (c, d) Constant height dI/dV images of a starphene recorded with a Cl tip at the energy of the LOMO and HOMO, respectively, and their calculated wavefunctions (e, f) ",
    "Large-scale STM immediately as deposited through ALI (a) and after annealing to 150 ºC (b)."
];

import aliResults1 from './images/results/ali_g1/ali_xps_cu.png'
import aliResults2 from './images/results/ali_g1/ALI_2pa.png'
const aliResultImages = [aliResults1, aliResults2];
const aliResultCaptions = [
    'XPS results of FBI-G1 in acetonitrile solvent (orange) and methanol (green) deposited on Cu substrate (red).',
    '2PA tomography image for FBI-G1 deposited on silica, green emission region (top), blue emission region (middle) and after Ba²⁺ addition through ALI, blue emission region (bottom).',
]

export default function ResultsPage() {
  return (
    <div className="projects-container">
      <h1>Surface Science Results</h1>
      <p><Link to="/projects/experiments/SurfaceScience">Back to Surface Science index</Link></p>
      
      <p align='justify'>
        One of the main goals of my PhD was to study the interaction between Ba²⁺ ions and chemosensor molecules deposited on surfaces under ultra-high vacuum (UHV) conditions.
        DFT simulations provided initial insights into the expected behavior of these molecules upon chelation. You can see my own interpretive render (made with Blender) of these simulations in the video below.
      </p>
        <div className="project-video" style={{margin: '1rem 0'}}>
            <video controls style={{width: '80%'}}>
                <source src={fbiBaVid} />
            </video>
        </div>

      <p align='justify'>
        Essentially, the simulations predicted that upon chelation with Ba²⁺ ions, the FBI molecule would undergo a conformational change, folding over itself to bring the fluorophore and crown-ether components closer together.
        The Ba²⁺ ion would not only coordinate with the oxygen atoms in the crown-ether but also interact with the nitrogen atom in the core fluorophore and the phenyl ring connecting both parts of the molecule (the "neck"). 
        This structural rearrangement caused a disconnection of the π-conjugated system in the fluorophore through a rotation of the phenyl ring, leading to a significant shift in the fluorescence emission wavelength. 
      </p>
      <p align='justify'>
        To validate these predictions experimentally, I conducted a series of surface science experiments using techniques such as X-ray Photoelectron Spectroscopy (XPS) and Scanning Tunneling Microscopy (STM).
        These techniques allowed me to probe the chemical composition and morphology of the functionalized surfaces before and after Ba²⁺ addition, providing valuable insights into the chelation process at the molecular level.
      </p>


      <h2> UHV sublimation of Ba(ClO₄)₂ on FBI-G1 and 2PA Microscopy</h2>
        <p align='justify'>
            When I started my PhD in 2019, the most attractive chemosensor for Ba²⁺ detection was the so-called <HashLink to="/projects/experiments/bold#fbi">Fluorescent Bicolor Indicator (FBI) molecule</HashLink>, developed by Prof. Cossio's group at the University of the Basque Country.
            The first generation of this molecule (FBI-G1) had already demonstrated its capability to capture Ba²⁺ ions in solution and emit a fluorescence signal upon binding.
            However, things are very different when working with surfaces in ultra-high vacuum (UHV) conditions. The lack of solvent limits the mobility of both the molecules and the ions, making the interaction between them more challenging.
        </p>
        
        <div className="project-details">
            <ImageCarousel images={pelletImages} captions={pelletCaptions} width={60} />

        <div className="project-text">
            <p align='justify'>
                Therefore, my initial goal was to test the interaction of FBI-G1 molecules and Ba²⁺ ions (Ba(ClO₄)₂). This process is called "chelation".
                To achieve this, I developed a method to deposit Ba(ClO₄)₂ salt under ultra-high vacuum (UHV) conditions through thermal sublimation.
                This technique allowed me to deposit Ba²⁺ ions onto silica pellets functionalized with FBI-G1 without introducing contaminants that could interfere with the surface analysis.
            </p>
            <p align='justify'>
                Additionally, I employed two-photon absorption (2PA) microscopy to investigate the fluorescence response of the functionalized surfaces after Ba²⁺ deposition.
                This technique is particularly suitable for studying thick samples, such as the silica pellets used in this experiment, as it allows for deep penetration of the excitation light and minimizes photodamage to the sample.
                We carried out these experiments in collaboration with Prof. P. Artal's group at the University of Murcia, who provided access to their advanced 2PA microscopy facilities.
            </p>

        </div>
        </div>
            <p align='justify'>
                The results were promising, as we observed a significant shift in the fluorescence wavelength upon Ba²⁺ deposition, indicating successful chelation by the FBI-G1 molecules in ultra dry conditions.
                This study was published in <Link to='https://doi.org/10.1038/s41586-020-2431-5'> Nature </Link>and laid the groundwork establishing the BOLD project. The paper also details the synthesis of FBI and the expected effects of Ba²⁺ chelation under the conditions of high-pressure xenon gas.
            </p>


      <h2> XPS of FBI-G1 and Ba²⁺ </h2>

        <p align='justify'>
            Following the successful demonstration of Ba²⁺ chelation by FBI-G1 molecules, I proceeded to investigate the chemical interactions at the surface level using X-ray Photoelectron Spectroscopy (XPS).
            This time, instead of using silica pellets, I deposited FBI-G1 molecules directly onto a clean gold (Au (111)) substrate through UHV sublimation.
            Finding the right conditions for sublimating these delicate molecules without decomposing them was a significant challenge that I overcame through careful optimization of the deposition parameters.
        </p>
        <div className="project-details">
            <ImageCarousel images={g1XpsImages} captions={g1XpsCaptions} width={60} />
        <div className="project-text">
            <p align='justify'>
                The first step was confirming the presence of FBI-G1 on the gold substrate by analyzing the core-level peaks in the XPS spectra, specifically the O 1s, N 1s, and C 1s peaks.
                Studying the stoichiometry ratios between these peaks allowed me to verify the molecular integrity of the deposited FBI-G1.
            </p>
            <p align='justify'>
                Next, I focused on analyzing the evolution of key peaks in the XPS spectra as Ba²⁺ ions added to FBI-G1 functionalized surfaces.
                The O 1s and N 1s peaks were of particular interest, as simulations predicted them to act as the main agents in the chelation process.
            </p>
            <p align='justify'>
                The XPS results revealed significant changes in the O 1s and N 1s peaks upon Ba²⁺ addition, indicating successful chelation and interaction between the FBI-G1 molecules and Ba²⁺ ions.
                The appearance of the Ba 3d peak further confirmed the presence of Ba²⁺ on the surface.
            </p>
            <p align='justify'>
                Furthermore, control experiments using NaCl instead of BaCl₂ demonstrated that only the O 1s peak shifted. 
                This also coincided with expectations from simulations, as Na⁺ ions are not expected to interact with the nitrogen atoms in the molecule.
            </p>
        </div>
        </div>
        <p align='justify'>
            These findings provided crucial evidence of the chemical interactions occurring at the surface level and helped to elucidate the chelation mechanism of FBI-G1 molecules in ultra-dry conditions.
            This work was published in <Link to='https://www.nature.com/articles/s41467-022-35153-0'> Nature Communications </Link> and represented a significant step forward in understanding the <i>surface chemistry</i> of Ba²⁺ chelation by FBI-G1 molecules.
        </p>
        <p align='justify'>
            The software used to parse, process, fit and analyze the XPS spectra was written by myself in Python and is outlined in <Link to='/projects/software/xps-sw'> this dedicated page </Link>.
        </p>

        <h3> Evolution of O 1s with progressive addition of Ba²⁺ </h3>
            <p align='justify'>
                To understand the chelation process in more detail, I conducted a series of XPS measurements while progressively adding Ba²⁺ ions to the FBI-G1 functionalized surface.
                This approach allowed me to monitor the changes in the O 1s peak as a function of Ba²⁺ coverage, confirming the interaction between the ions and the crown ether component of the FBI-G1 molecule.
            </p>
            <p align='justify'>
                The following images show the evolution of the O 1s peak with increasing Ba²⁺ coverage, click on the image to add more Barium!
            </p>
            
            <div className="project-details">
                <ImageCarousel images={xpsProgImages} captions={xpsProgCaptions} width={60} />
            <div className="project-text">
                <p align='justify'>
                    Intially, the O 1s peak is observed at 532.9 eV, corresponding to the oxygen atoms in the crown ether of the FBI-G1 molecule in its pristine state (no Ba²⁺).
                    As Ba²⁺ ions are progressively added to the surface, a new component emerges at higher binding energies, up to 533.9 eV indicating the formation of a chelation complex between the oxygen atoms and Ba²⁺ ions.
                    This shift is a hallmark of successful chelation and provides valuable insights into the binding environment of the oxygen atoms in the presence of Ba²⁺.
                </p>
                <p align='justify'>
                    To calculate the coverage of Ba²⁺ ions on the surface, I analyzed the intensity ratios between the Ba 3d peak and the N 1s peak from the molecule.
                    These ratios must be weighted by the atomic sensitivity factors (ASF) of each element to obtain accurate coverage values.
                    The coverage values (θ) are expressed as a fraction of a full monolayer (ML), where 1 ML corresponds to one Ba²⁺ ion per FBI-G1 molecule.
                </p>
                <p align='justify'>
                    A similar effect was observed for a smaller crown-ether compound without the fluorophore, as reported in <Link to='https://pubs.rsc.org/en/content/articlelanding/2019/na/c9na00144a'> the only other study done with this type of compound in UHV </Link>.
                    This confirmed that the crown-ether is indeed the ion catcher of these molecules, and that the chelation process is primarily driven by the interaction between the crown ether and Ba²⁺ ions.
                </p>
                </div>
            </div>
            <p align='justify'>
                The oxygen peak appears as a shoulder of the main Au 4f peak in the spectrum, which can make the analysis challenging. 
                This meant that careful deconvolution and fitting of the XPS spectra were necessary to accurately quantify the changes in the O 1s peak with Ba²⁺ addition
            </p>

        <h3> Chemical independence on substrate choice </h3>
        <p align='justify'>
            To further validate the chelation mechanism observed with FBI-G1 molecules on gold substrates, I extended the XPS experiments to other substrates commonly used in surface science studies.
            Specifically, I investigated the behavior of FBI-G1 on Copper (Cu (111)) and ITO (Indium Tin Oxide) substrates. These materials were chosen due to their different levels of reactivity.
            Furthermore, ITO is a widely used transparent conductive oxide in optoelectronic applications, making it relevant as a final substrate for the BOLD sensor.            
            The results are shown in the figures below. Click on them to switch between Copper and ITO substrates.
        </p>
        <div className="project-details">
            <ImageCarousel images={substrateImages} captions={substrateCaptions} width={40} />
        <div className="project-text">
            <p align='justify'>
                The XPS results on both Copper and ITO substrates revealed similar shifts in the O 1s peak upon Ba²⁺ addition, consistent with the chelation mechanism observed on gold.
                This indicated that the interaction between the FBI-G1 molecules and Ba²⁺ ions is robust and does not depend significantly on the choice of substrate.
            </p>
            <p align='justify'>
                NaCl control experiments on Copper substrates also showed no shift in the N 1s peak, further confirming the specificity of the chelation process.
            </p>
            <p align='justify'>
                Since the ITO substrate contains oxygen atoms in its composition, the O 1s peak from the substrate appears prominently in the XPS spectra.
                However, after careful subtraction of the substrate contribution, the same chelation-induced shift in the O 1s peak from the FBI-G1 molecules was observed.
            </p>
            <p align='justify'>
                I also performed experiments with Silicon oxide (SiO₂) substrates, which is a transparent and clean substrate, very suitable for optical applications. However, since this is a non-conductive material, the XPS spectra exhibited significant charging effects that complicated the analysis.
            </p>
        </div>
        </div>
        <p align='justify'>
            These findings provided further evidence of the chemical independence of the chelation process, suggesting that FBI-G1 molecules can effectively capture Ba²⁺ ions on a variety of substrate materials.
            This versatility is crucial for the development of practical sensors, as it allows for flexibility in substrate selection based on specific application requirements.
        </p>

      <h2> XPS of FBI-G2 and G3 </h2>
        <p align='justify'>
            Over the course of my PhD, Prof. Cossio's group developed two new generations of FBI molecules, namely FBI-G2 and FBI-G3. 
            You can see the structures of these molecules in the image carrousel below (image 1).
        </p>
        <p align='justify'>
            The idea was to improve upon the original FBI-G1 design by doubling down on the features that made it successful: the interaction between the Ba²⁺ ion and the phenyl ring and the Nitrogen atom in the fluorophore.
            These two interactions caused the molecule to fold over itself upon chelation, leading to a significant emission shift. 
        </p>
        <div className="project-details">
            <ImageCarousel images={g2g3Images} captions={g2g3Captions} width={60} />
            <div className="project-text">        
            <p align='justify'>
                Thus, two ideas were pursued: The C-N bond in the fluorophore was inverted for FBI-G2, which shifted its whole emission spectrum further toward red (image 2), while FBI-G3 incorporated a second crown-ether to increase the flexibility the molecule.
                FBI-G3 also showed a significant emission shift upon Ba²⁺ chelation (image 2).
                They also considered a fourth generation that combined the design features of G2 and G3, but its complicated synthesis and a poor photophysical performance led to it being discarded.
            </p>
            <p align='justify'>
                The XPS experiments followed a similar protocol as with FBI-G1: first confirming the molecular integrity through stoichiometry ratios (C<sub>31</sub>N<sub>3</sub>O<sub>5</sub>H<sub>35</sub> for G2 and C<sub>37</sub>N<sub>3</sub>O<sub>5</sub>H<sub>39</sub> for G3).
                Once this was confirmed (image 3), I proceeded to add Ba²⁺ (through BaCl2) to study the evolution of the O 1s and N 1s peaks for FBI-G2 (image 4) and FBI-G3 (image 5).
            </p>
            <p align='justify'>
                The XPS results for both FBI-G2 and FBI-G3 showed analogous behavior to that observed with FBI-G1.
                Significant shifts in the O 1s and N 1s peaks were detected upon Ba²⁺ addition for FBI-G2, indicating an interaction between the Ba²⁺ ions and both the crown ether and the fluorophore components.
                For FBI-G3, a shift in the O 1s peak was observed, along with a smaller shift in the C 1s peak instead of the N 1s peak, suggesting a slightly different interaction mechanism due to the presence of the second phenyl ring.
                In the case of FBI-G3, the N 1s atom is slightly further away from the crown-ether due to the added phenyl ring, which could explain why the C 1s peak is affected instead.
                The appearance of the Ba 3d peak further confirmed the presence of Ba²⁺ on the surface.
            </p>
            </div>
        </div>

        <h3> High-resolution XPS of FBI-G2 and G3 in ALOISA </h3>
        <p align='justify'>
            In 2022 I had the opportunity to visit the ALOISA beamline at the Elettra Synchrotron in Trieste, Italy, where I conducted high-resolution XPS measurements on FBI-G2 and FBI-G3 molecules.
            The local team had a lot of experience with iron ion deposition on surfaces, so we decided to compare the results of Ba²⁺ and Fe³⁺ addition on both FBI-G2 and FBI-G3. 
            However, due to time constraints, only two depositions were only performed with FBI-G2. 
        </p>
        <div className="project-details">
            <ImageCarousel images={g2g3AloisaImages} captions={g2g3AloisaCaptions} width={60} />
            <div className="project-text">        
            <p align='justify'>
                Comparing the high-resolution results obtained at the ALOISA beamline to our lab measurements is illustrative of the capabilities of synchrotron radiation for surface analysis.
                The extreme surface sensitivity and energy resolution of the synchrotron allowed us to resolve finer details in the XPS spectra, like the two clearly separated components of the N 1s and C 1s peaks.
            </p>
            <p align='justify'>
                Furthermore, the synchrotron light can be tuned to specific photon energies, allowing us to optimize the photoemission cross-section for the elements of interest.
                This allowed us to obtain clearer signals for the O 1s without interference from the Au 4f peak shoulder.
            </p>
            <p align='justify'>
                Chelation of Fe²⁺ by both FBI-G2 and FBI-G3 produced a shift in the O 1s peak in the opposite direction to that observed with Ba²⁺. 
                This can be seen as a growth in the component at lower binding energies in both FBI-G2 (image 2) and FBI-G3 (image 3).
                This difference in the direction of the shift could be attributed to the different electronic configurations and coordination chemistry of Fe²⁺ compared to Ba²⁺.
            </p>
            <p align='justify'>
                Similar to the results with Na⁺ ions, no shift was observed in the N 1s or the C 1s peaks upon Fe²⁺ addition, indicating that the interaction is primarily with the crown-ether component of the molecules. 
                This is consistent with the selectivity of these molecules for Ba²⁺ over other divalent cations, as Fe²⁺ has a smaller ionic radius and different coordination chemistry compared to Ba²⁺.
            </p>
            </div>
        </div>
        <p align='justify'>
            These findings demonstrated that the chelation mechanism is conserved across different generations of FBI molecules, highlighting their potential as versatile chemosensors for Ba²⁺ detection in ultra-dry conditions.
            The successful chelation by FBI-G2 and FBI-G3 further validated the design principles underlying these molecules and provided additional options for optimizing sensor performance in future applications.
        </p>    
        <p align='justify'>
            In November 2024, another beamtime at ALOISA was conducted to study FBI-G2 and G3 with Ba²⁺ in high-resolution XPS. The data is still being analyzed and will be published soon, together with the results on Fe²⁺ chelation.
        </p>

        <h3> Effect of the Cl⁻ counter-anion </h3>
        <p align='justify'>
            The equipment in ALOISA allowed us to investigate the potential influence of the chloride (Cl⁻) counter-anion, on the chelation process.
            This counter-ion is introduced alongside Ba²⁺ (or Fe²⁺) when using BaCl₂ (FeCl₂) salt for deposition.
            DFT simulations indicated that Cl⁻ ions act as passive spectators in the chelation process, not interacting directly with the FBI molecules.
            However, it was important to validate this experimentally to ensure that the presence of Cl⁻ does not interfere with the chelation mechanism or the XPS signatures.
        </p>
        <div className="project-details">
            <ImageCarousel images={dechlorinationImages} captions={dechlorinationCaptions} width={60} />
            <div className="project-text">        
            <p align='justify'>
                To investigate this, I analyzed the Cl 2p core-level peak in the XPS spectra after FeCl₂ deposition on FBI-G2 and compared it to the spectra obtained from pristine FeCl₂ deposited on a clean Au (111) substrate (without FBI molecules).
                The results showed a clear shift in the Cl 2p peak position when FeCl₂ was deposited on the FBI-G2 functionalized surface, indicating dissociation of the salt in the presence of FBI-G2 and, possibly, interaction of Cl⁻ with the surface.
            </p>
            <p align='justify'>
                Furthermore, temperature-dependent XPS measurements revealed that the Cl 2p peak intensity decreased upon heating, eventually disappearing at around 90 ºC.
                This desorption behavior confirmed that Cl⁻ ions do not remain bound to the surface or the FBI molecules during the chelation process.
            </p>
            <p align='justify'>
                In contrast, the Fe 2p peaks remained unchanged in position and intensity, indicating that the Fe²⁺ ions successfully chelated with the FBI-G2 molecules without interference from the Cl⁻ ions.
                The stability of the molecule under the annealing process was also confirmed by following the evolution of the O 1s peak (not shown), which remained consistent throughout the heating cycle.
            </p>
            <p align='justify'>
                These findings supported the conclusion that Cl⁻ acts as a passive spectator during the chelation of Fe²⁺ (and by extension, Ba²⁺) by FBI molecules.
                The presence of Cl⁻ does not significantly affect the chelation mechanism or the XPS signatures associated with Ba²⁺ binding, validating the use of BaCl₂ and FeCl₂ salts for deposition in these experiments.
            </p>
            </div>
        </div>

      <h2> STM images of FBI-G1 and Ba²⁺ </h2>
      <p align='justify'>
        To complement the XPS studies and gain insights into the morphological changes induced by Ba²⁺ chelation, I conducted Scanning Tunneling Microscopy (STM) experiments on FBI-G1 functionalized surfaces.
        STM provides high-resolution images of the surface topography and electronic structure, allowing us to visualize individual molecules and their arrangements on the substrate.
      </p>
        <p align='justify'>
            The STM images of pristine FBI-G1 molecules on Au (111) revealed that the molecules tend to aggregate into large islands, with some isolated molecules observed on the terraces of the gold substrate.
            We all found the apparent shape of the molecules extremely funny, and yes, it is what you think it is. However, you won't find that in the final publication!
        </p>
      <div className="project-details">
          <ImageCarousel images={stmFbiBaImages} captions={stmFbiBaCaptions} width={60} />
          <div className="project-text">        
          <p align='justify'>
              The same structure was consistently observed across different regions of the surface, indicating a uniform deposition of the molecules.
              The non-planar structure of the FBI-G1 molecule resulted in varying brightness levels in the STM images, reflecting different parts of the molecule.
              Measuring bonding-resolution STM images was attempted by functionalizing the STM tip with a CO molecule, which enhances the resolution and allows for the visualization of intramolecular features.
              To aid in the identification of specific moieties, the fluorophore core with and without the middle phenly ring (the "neck") components were synthesized, deposited and imaged separately, providing reference images for comparison.
              These moeities are planar and thus the bonding-resolved images are much clearer.
          </p>
          <p align='justify'>
              Upon Ba²⁺ addition, significant morphological changes were observed in the STM images.
              The molecules adopted a more defined and repetitive structure across the surface, consistent with the folding mechanism predicted by DFT simulations.
              Bonding-resolution STM images allowed us to identify specific moieties of the molecule, such as the fluorophore and crown-ether components, providing further insights into the structural rearrangement upon chelation.
          </p>
          <p align='justify'>
            We then compared the STM images before and after Ba²⁺ addition with control experiments using Na⁺ ions.
            The STM images after Na⁺ addition showed no significant changes in the molecular structure or arrangement, indicating that Na⁺ is trapped by the crown-ether but does not interact with the core fluorophore FBI-G1 molecules as predicted.
          </p>
          </div>
      </div>
      <p align='justify'>
        In turn, the STM images after Ba²⁺ addition showed very clear changes in the molecular structure, consistent with the folding mechanism predicted by DFT simulations.
        This observation further supported the specificity of Ba²⁺ chelation and the associated conformational changes in the molecule.
      </p>
      <p align='justify'>
        Scanning Tunneling Spectroscopy (STS) measurements provided additional information about the electronic structure of the molecules before and after Ba²⁺ addition.
        The pristine FBI-G1 molecules exhibited distinct HOMO and LUMO peaks, and the gap between them is related to the absorption energy in fluorescence.
        The HOMO-LUMO gap shifted slightly after adding Na⁺, and very clearly after adding Ba²⁺ chelation. 
        This indicates changes in the electronic properties of the molecule, which is in agreement with the shift in absorption spectra observed in fluorescence experiments.
        </p>
      
      <h2> STM images of FBI-G2 </h2>

      <p align='justify'>
        More recently, STM studies with FBI-G2 were carried out at Instituto de Materiales (INMA), in Zaragoza, by Alfonso Yubero (PhD candidate with NEXT-BOLD).
        All the credit for this section goes to him. This is a preliminary view on those results to date. 
      </p>
      <div className="project-details">
          <ImageCarousel images={g2StmImages} captions={g2StmCaptions} width={60} />
          <div className="project-text">        
          <p align='justify'>
            The first thing we realized was that, unlike G1, FBI-G2 does not aggregate in islands. Instead it forms primarily dimers, with very few larger clusters.
            This is striking, as the only difference between both molecules is the inversion of the C-N bond in the fluorophore.
            This suggests that this small change has a significant impact on the intermolecular interactions, their mobility and interaction with the surface.
          </p>
          <p align='justify'>
            Additionally, we observed that the structure formation of FBI-G2 is highly dependent on the coverage.
            At low coverages, isolated dimers are predominant and even some isolated molecules appear, while at higher coverages, more complex arrangements and longer chains begin to form.
            This behavior indicates that the molecules have a certain degree of mobility on the surface, allowing them to explore different configurations before settling into more stable arrangements as the coverage increases.
          </p>
          <p align='justify'>
            Further studies are ongoing to investigate the effect of Ba²⁺ addition on the structure and electronic properties of FBI-G2 using STM and STS techniques.
            This is a challenging task, because the dimer structure makes it difficult to observe any meaningful structural changes upon interaction with Ba²⁺.
          </p>
        </div>
      </div>

      <p align='justify'>
        These results, together with the high-resolution XPS measurements at ALOISA, will be included in an upcoming publication focused on the chelation behavior of FBI-G2 and FBI-G3 molecules.
      </p>

      <h2> STM images of Starphene deposited with ALI </h2>
        <p align='justify'>
            This project was a fun side mission during my PhD: helping a collaboration image a giant star-shaped molecule called a starphene.
            These molecules are made of three long “arms” of fused benzene rings, arranged like a molecular propeller. 
            What makes them interesting is that they sit right at the edge between stable organic molecules and highly reactive carbon nanostructures. 
            Their size and shape mean electrons don't just move along one direction like in a wire — they spread across the whole star, giving rise to unusual electronic patterns that you can actually see with STM.
        </p>
        <div className="project-details">
            <ImageCarousel images={starpheneImages} captions={starpheneCaptions} width={60} />
            <div className="project-text">        
                <p align='justify'>
                    The hard part wasn't the imaging, but it was getting the molecule onto the surface in the first place. 
                    These large acene-based systems don't survive normal evaporation methods because they fall apart when heated. 
                    Instead, we used Atomic Layer Injection (ALI), where a solution of the precursor molecules is sprayed in short bursts onto a clean gold surface in vacuum. 
                    Since I had spent over a year working with this technique, I was the one helping with this deposition step. 
                    I explain this deposition method in more detail on the <Link to='/projects/experiments/SurfaceScience/preparation#ali'>ALI technique page</Link>.
                    This approach lets you land fragile, non-volatile molecules, but it also makes life harder: contamination with remaining solvent molecules is prevalent (image 4), coverage is low, and you have to hunt for the right molecules one by one with the STM. 
                    Luckily, heating the sample a bit after deposition helps clean the surface without destroying the molecules, making it easier to find them.
                </p>
                <p align='justify'>
                    Once we found them, the STM images clearly showed the three-armed star shape, and spectroscopy measurements revealed their electronic states. 
                    Interestingly, the molecule doesn't behave like three independent “arms”: the branches remain electronically connected, which results in a smaller energy gap than in a single pentacene unit. 
                    STM conductance maps at the energies of the HOMO and LUMO reproduce the corresponding orbital patterns on the surface. 
                    This helps us visualize directly how electrons are delocalized across the whole star-like framework.
                    
                </p>
                <p align='justify'>
                    We could even modify the molecule directly with the STM tip by removing extra hydrogen atoms (image 1-2), watching its electronic structure change in real time. 
                    It's a great example of how surface science lets you not only observe single molecules, but also tune them atom by atom.
                </p>
            </div>
        </div>
        <p align='justify'>
            This work was published in <Link to='https://onlinelibrary.wiley.com/doi/10.1002/anie.202016163'> Angewandte Chemie </Link>in 2021, showcasing the power of ALI for depositing large, fragile molecules and the unique insights STM can provide into their structure and electronics.
        </p>
      
      <h2> ALI depositions with FBI-G1 </h2>
        <p align='justify'>
            As a final note, I would like to mention that I also attempted to deposit FBI-G1 molecules using the Atomic Layer Injection (ALI) technique.
            The goal was to explore an alternative deposition method that could potentially offer better control over coverage and molecular arrangement on the surface.
        </p>
        <p align='justify'>
            FBI-G1 molecules were dissolved in acetonitrile at a concentration of 10⁻⁷ M and deposited through ALI onto gold (Au 111) for STM experiments and on policrystalline copper for XPS measurements.
            This allowed me to optimize the deposition parameters, such as pulse duration, solvent choice, and substrate temperature, to achieve a stable deposition of the molecules.
        </p>

        <div className="project-details">
            <ImageCarousel images={aliResultImages} captions={aliResultCaptions} width={60} />
        <div className="project-text">
        
        <p align='justify'>
            After deposition, I performed XPS and STM measurements to assess the integrity and arrangement of the FBI-G1 molecules on the surface.
            The STM images revealed the presence of individual molecules, but they appeared to be surrounded by a significant amount of residual solvent contamination.
            Similarly to the results with starphene, after heating the sample slightly, the surface became cleaner, allowing for better imaging of the surface.
            However, finding well-isolated molecules remained challenging due to the residual solvent contamination and low coverage.
            In addition, even when these molecules are deposited through sublimation, they tend to aggregate into islands rather than remaining isolated, which further complicates the analysis.
            Eventually, this experiment was not pursued further due to these challenges and time constraints. 
            However, it did provide valuable insights into the strategies needed for successful ALI deposition of delicate molecules, which ended up being very useful for the starphene project.
        </p>
        
        <p align='justify'>
            I also tried characterizing the depositions with XPS, but the results were not very encouraging.
            Unlike STM, which can focus on small areas of the surface to find isolated molecules, XPS averages the signal over a much larger area.
            As a result, the XPS spectra were dominated by signals from the residual solvent and contaminants, making it difficult to discern the contributions from the FBI-G1 molecules.
            Additionally, the coverage was inconsistent, and the molecules did not form well-defined structures on the substrate.
            Switching the solvent to methanol improved significantly the stoichiometry ratios, getting closer to the expected values for FBI-G1.
            This suggests that solvent choice plays a crucial role in the deposition quality, likely due to differences in evaporation rates and interactions with the substrate.

        </p>
        <p align='justify'>
            Lastly, we also tested depositing Ba(ClO₄)₂ through ALI on silica pellets containing FBI-G1.
            Then we measured the fluorescence response using two-photon absorption (2PA) microscopy.
            These results were more promising, as we observed a similar fluorescence shift as in the sublimation experiments, which is consistent with the chelation of FBI-G1 molecules with Ba²⁺ ions.
            However, the silica pellets are very porous, and it is likely that some solvent molecules remained trapped within the pores.
            Therefore, the residual solvent contamination meant that this wasn't strictly the ultra-dry conditions we were aiming for.
        </p>
                
        </div>
        </div>
        <p align='justify'>
            Due to these challenges, I decided to attempt depositing FBI-G1 through sublimation in my subsequent experiments.
            This method proved to be more effective in achieving clean and well-defined molecular layers suitable for XPS and STM analysis, so I focused my efforts on that approach for the remainder of my PhD research.
            While ALI remains a promising technique for certain applications, it proved to be less suitable for the delicate FBI-G1 molecules in this context.
        </p>

      <p>
        <Link to="/projects/experiments/SurfaceScience">Back to Surface Science index</Link>
      </p>
    </div>
  )
}
