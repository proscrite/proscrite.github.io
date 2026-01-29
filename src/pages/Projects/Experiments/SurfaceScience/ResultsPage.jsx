import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './SurfaceScience.css'
import pelletImg1 from './images/results/pellet_evaporation1.png'
import pelletImg2 from './images/results/pellet_evaporation2.png'
import pelletImg3 from './images/results/pellet_evaporation3.png'
import ImageCarousel from '../../../../components/ImageCarousel'

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

export default function ResultsPage() {
  return (
    <div className="projects-container">
      <h1>Surface Science Results</h1>
      <p><Link to="/projects/experiments/SurfaceScience">Back to Surface Science index</Link></p>
      
      <p>
        Here is a summary of the main results obtained through surface science techniques during my PhD.
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

        <h3> Evolution of O 1s with progressive addition of Ba²⁺ </h3>
        <p align='justify'>
            To understand the chelation process in more detail, I conducted a series of XPS measurements while progressively adding Ba²⁺ ions to the FBI-G1 functionalized surface.
            This approach allowed me to monitor the changes in the O 1s peak as a function of Ba²⁺ coverage, confirming the interaction between the ions and the crown ether component of the FBI-G1 molecule.
        </p>
        <p align='justify'>
            The following images show the evolution of the O 1s peak with increasing Ba²⁺ coverage, click on the image to cycle through the different stages of the experiment.
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
            The results are shown in the figures below. 
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
      FBI-G2 and G3 sublimate intactly, like FBI-G1
Correct stoichiometry (C31N3O5H35 and C37N3O5H39)
        <p align='justify'>
            Building upon the successful demonstration of Ba²⁺ chelation by FBI-G1 molecules, I extended the XPS studies to include the second and third generations of FBI molecules, namely FBI-G2 and FBI-G3.
            These newer generations were designed with improved photophysical properties and enhanced chelation capabilities, making them promising candidates for Ba²⁺ detection.
            The XPS experiments followed a similar protocol as with FBI-G1, involving UHV sublimation of the molecules onto gold substrates followed by progressive addition of Ba²⁺ ions.
        </p>
        <p align='justify'>
            The XPS results for both FBI-G2 and FBI-G3 showed analogous behavior to that observed with FBI-G1.
            Significant shifts in the O 1s and N 1s peaks were detected upon Ba²⁺ addition, indicating successful chelation by these molecules as well.
            The appearance of the Ba 3d peak further confirmed the presence of Ba²⁺ on the surface.
        </p>
        <p align='justify'>
            These findings demonstrated that the chelation mechanism is conserved across different generations of FBI molecules, highlighting their potential as versatile chemosensors for Ba²⁺ detection in ultra-dry conditions.
            The successful chelation by FBI-G2 and FBI-G3 further validated the design principles underlying these molecules and provided additional options for optimizing sensor performance in future applications.
        </p>    
      <h2> STM images of FBI-G1 and Ba²⁺ </h2>

      <h2> STM images of FBI-G2 </h2>

      <h2> STM images of Starphene deposited with ALI </h2>
      
      <h2> ALI depositions with FBI-G1 </h2>
    </div>
  )
}
