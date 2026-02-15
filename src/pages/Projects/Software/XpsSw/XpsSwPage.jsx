import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './XpsSw.css'
import XpsSwInteractiveMap from './XpsSwMap.jsx'
import ImageCarousel from '../../../../components/ImageCarousel'

import parsingImg1 from './images/parsing1.png'
import parsingImg2 from './images/parsing2.png'
const parsingImgs = [parsingImg1, parsingImg2];
const parsingCaptions = [
  'Example of the raw .xy files (right) produced by the Specs Prodigy DAQ system (left), containing the raw spectra that need to be parsed and converted into a format suitable for analysis.',
  'After parsing, the relevant information from the .xy files is extracted and accessible as structured pandas DataFrames, which can then be used for further analysis and visualization.',
];
import backgroundImg1 from './images/background1.png'
import backgroundImg2 from './images/background2.png'
const backgroundImgs = [backgroundImg1, backgroundImg2];
const backgroundCaptions = [
  'Example of the Shirley background subtraction method applied to an XPS spectrum in the C 1s region (top) and O 1s region (bottom). The original spectra (solid lines, left) are decomposed into the background signal (dashed lines) and the background-subtracted spectrum (right figures), which contains the relevant peaks for analysis.',
  'Another example of batch background subtraction applied to 10 spectra taken at different stages of the sample preparation process.',
];
import scalingImg1 from './images/scaling1.png'
import scalingImg2 from './images/scaling2.png'
const scalingImgs = [scalingImg1, scalingImg2];
const scalingCaptions = [
  'Example of scaling and aligning spectra based on reference peaks (clean Copper substrate). The original spectra (left, blue) are scaled and aligned to a reference peak (in red), resulting in the processed spectra (right) that can be accurately compared and analyzed.',
  'Another example of batch scaling and aligning applied to 10 spectra taken at different stages in the ALOISA beamline. In this case, aligning was particularly crucial to correct for the photon energy drift during the experiment and ensure accurate analysis of the spectra.',
];

import integrationImg1 from './images/integration1.png'
import integrationImg2 from './images/integration2.png'
const integrationImgs = [integrationImg1, integrationImg2];
const integrationCaptions = [
  'Example of area integration of peaks in XPS spectra. Since the background of the spectrum has been subtracted, the integration is straightforward.',
  'Example of stoichiometry calculation for FBI-G1 based on the area of the relevant peaks in the XPS spectra (C 1s, N 1s, O 1s).'
];

import fitsImg1 from './images/fits1.png'
import fitsImg2 from './images/fits2.png'
const fitsImgs = [fitsImg1, fitsImg2];
const fitsCaptions = [
  'Example of batch-peak fitting for different regions (C 1s, N 1s, O 1s). The user specifies the number of components to fit in each region, and the software provides a first estimation of the relevant parameters (peak positions, areas, widths) that can then be refined by the user based on their knowledge of the system and the physics behind it.',
  'Example of a highly refined fit for the O 1s region on a spectrum of FBI-G1 on Au (111). Since the Au 4f peaks overlap with the O 1s peaks, the fit is particularly complex and requires a lot of refining and verification from the user to ensure optimal results.',
];


import txpsImg1 from './images/txps1.png'
import txpsImg2 from './images/txps2.png'
const txpsImgs = [txpsImg1, txpsImg2]
const txpsCaptions = [
    '3D maps of Temperature-dependent XPS (TXPS) for Cl 2p of a FeCl2 deposition with FBI-G2 (left) and without it (right) on the sample. Disappearance and shift of the peak can be seen at ~150 ºC and 250 ºC, respectively',
    'Different version of the TXPS map with plt.contourf()'
]

import nexafsImg1 from './images/nexafs1.png'
import nexafsImg2 from './images/nexafs2.png'
const nexafsImgs = [nexafsImg1, nexafsImg2]
const nexafsCaptions = [
    'Example of processing workflow of NEXAFS data: the I0 data has to be aligned and scaled before comparing the measured spectra.',
    'Final figure of the NEXAFS results with FBI-G2 on the O-, N- and K-edges'
]

import aliImg1 from './images/ali1.png'
import aliImg2 from './images/ali2.png'
import aliImg3 from './images/ali3.png'
const aliImgs = [aliImg1, aliImg2, aliImg3]
const aliCaptions = [
    'Preprocessing ALI peaks: from the continuous pressure curve (left), the peaks and troughs are identified and each peak is sliced and assigned a peak ID. Then all the peaks can be overlaid and compared intuitively.',
    'Average pressure curve profiles for different conditions. Outliers can be identified and plotted to compare with the typical profile.',
    '"Dry" and "Wet" peaks are classified depending on which population the peak value belongs to. The average profile of these two populations is clearly distinct.'
]

import qcmImg1 from './images/qcm1.png'
import qcmImg2 from './images/qcm2.png'
const qcmImgs = [qcmImg1, qcmImg2]
const qcmCaptions = [
    "(Left:) Quartz-Crystal Microbalance (QCM) frequency curve (blue) and Film thickness (red) as computed by the provider software naive model. (Right:) Start and end times and frequency drop during a sublimation deposition (red).",
    'QCM test under ALI injections: the pressure curves (red, left y-axis) and the QCM frequency (blue, right y-axis) are overlaid to show the synchronization of the injection pulses.',
]

import rgaImg1 from './images/rga1.png'
import rgaImg2 from './images/rga2.png'
const rgaImgs = [rgaImg1, rgaImg2]
const rgaCaptions = [
    "Example of Residual Gas Analyser (RGA) spectra during ALI injections (blue) compared to background spectra (red).",
    "3-D plot of different spectra over different ALI pulses."
]


export default function XpsSwPage() {
  React.useEffect(() => {window.scrollTo(0, 0);}, []);

  return (
    <div className="projects-container">
        
      <h1>XPS Software Development</h1>
        <p align='justify'>
            During my PhD I invested a significant amount of time into developing a robust, reproducible software repository to analyse XPS spectra.
            This included parsing parsing raw files produced by the DAQ system (.xy files), subtracting background, fitting peaks, and extracting relevant information such as peak positions, areas, and widths.
            This was my first full project in software development from scratch in the era before AI-aided coding. 
            The software was developed in Python and is available as an open-source repository on GitHub: <a href="https://github.com/proscrite/xps_sw" target="_blank" rel="noopener noreferrer">XPS Software Repository</a>.
        </p>
        <XpsSwInteractiveMap/>
        <p align='justify'>
            The main motivation to build this software was automating some of the most common tasks in XPS data analysis, such as background subtraction, scaling and aligning, which are often performed manually using software like CasaXPS.
            Simultaneously, the suite is meant to be flexible, letting the user tune the parameters required for these tasks for their specific cases.
            This is particular important for fitting peaks, which cannot be fully automated and requires a lot of refining and verification from the user based on their knowledge of the system and the physics behind it.
        </p>
        <p align='justify'>
            I aimed for a balance between automation and user control, providing tools to automate the most common tasks in XPS data analysis (like background subtraction, scaling and aligning) while also providing flexibility and customization options for users with different needs and expertise levels.
            Thus, the software provides a framework to perform these tasks in a more efficient and reproducible way, while also providing tools to visualize the results and extract relevant information from the spectra.
        </p>
        <h1 id="features">Main features</h1>
        <p align='justify'>
            The software provides a suite of tools to perform the most common tasks in XPS data analysis, such as:
        </p>
        <ul align='justify'>
            <li><b>Background subtraction:</b> The software implements the Shirley background subtraction method, which is widely used in XPS data analysis. The user can tune the parameters of the method to fit their specific cases.</li>
            <li><b>Scaling and aligning:</b> The software provides tools to scale and align spectra based on reference peaks, which is essential for comparing spectra taken at different times or under different conditions.</li>
            <li><b>Area integration, stoichiometry and coverage calculation:</b> The software provides tools to perform area integration of peaks and calculate the stoichiometry of the samples based on the area of the relevant peaks. </li>
            <li><b>Peak fitting:</b> The software provides a framework to fit peaks using different line shapes (Gaussian, Lorentzian, Voigt) and extract relevant information such as peak positions, areas, and widths. The user can refine the fits based on their knowledge of the system and the physics behind it.</li>
            <li><b>Visualization:</b> The software provides tools to visualize the spectra and the results of <i>each step of the analysis</i>, to ensure that the analysis is accurate and reliable.</li>
        </ul>
        <p align='justify'>
            Parsing, pre-processing and integration of the spectra can be applied as batch processing to all spectra in an experiment, ensuring a more efficient and reproducible analysis.
            Performing a first, orientative fit of the peaks can also be automated to provide a first estimation of the relevant parameters, which can then be refined by the user.
        </p>

        <p align='justify'>
            The software also provides tools to analyze other types of spectra that are often collected in conjunction with XPS, such as NEXAFS and TXPS spectra, allowing for a more comprehensive analysis of the samples and a better understanding of their properties.
        </p>
        
        <h2 id="repository">Repository structure</h2>
        <p align='justify'>
            The repository is structured in a modular way, with different modules for each of the main features mentioned above. 
            This allows for easy maintenance and extension of the software in the future, as new features can be added without affecting the existing ones.
        </p>
        <ul align='justify'>
            <li><b>xps_import.py:</b> This module contains functions to parse raw .xy files produced by the DAQ system and convert them into a format suitable for analysis.</li>
            <li><b>xps_bg.py:</b> This module implements different pre-processing operations, including background subtraction, scaling, and alignment.</li>
            <li><b>xps_fit.py:</b> This module provides a framework to fit peaks using different line shapes and extract relevant information.</li>
            <li><b>visualization.py:</b> This module provides tools to visualize the spectra and the results of the analysis.</li>
        </ul>

        <h2 id="import">Parsing .xy files</h2>
            <div className="image-carousel-container">
                <ImageCarousel images={parsingImgs} captions={parsingCaptions} width={100}/>
            </div>
        <p align='justify'>
            The first step in the analysis of XPS data is parsing the raw .xy files produced by the DAQ system. 
            These files contain the raw spectra, which need to be converted into a format suitable for analysis. 
            A file can contain one or several experiments, encoded as "groups" in the .xy file. 
            Each experiment represents the status of a sample at a given time with a specific experimental conditions, for example: a spectrum taken after a certain number of cleaning cycles, or after a certain exposure time to the Ba source.
        </p>
        <p align='justify'>
            Then, each experiment contains one or several spectra or regions of interest, encoded as "regions" in the .xy file.
             Each spectrum contains the relevant information such as the binding energy values, the intensity values, and the experimental conditions (e.g., pass energy, acquisition time, etc.). 
             The software provides tools to parse these files and extract the relevant information for each experiment and spectrum, which can then be used for further analysis. 
             The parsing functions are implemented in the <code>xps_import.py</code> module, which extracts the relevant information from the .xy files and stores it in a structured format (e.g., pandas DataFrame) for further analysis.
        </p>
        <p align='justify'>
            The dataframes containing the spectra are accessible as attributes of the XpsExperiment class, which also contains labels, the relevant experimental conditions, metadata and customization options (e.g. line color) for each experiment.
        </p>
        <p align='justify'>
            Different experimental setups can encode the resulting spectra in different ways. This module was focused on parsing the .xy files produced by the Specs Prodigy DAQ system, which is the one used in our lab.
            However, during the experiments at ALOISA, the spectra was recorded as binary files, read by IGOR (a software commonly used in the surface science community).
            Therefore, I adapted my software suite to use igorpy library to read the binary files and parse them in a similar way as the .xy files, ensuring that the rest of the analysis pipeline could be applied to these spectra as well.
        </p>
            
        
        <h2 id="background">Background subtraction</h2>
        <div className="image-carousel-container">
            <ImageCarousel images={backgroundImgs} captions={backgroundCaptions} width={100}/>
        </div>
        <p align='justify'>
            Background subtraction is a crucial step in XPS data analysis, as it allows to isolate the relevant peaks from the background signal. 
            The software implements different background subtraction methods: Shirley, Tougaard, linear, and a custom method based on the inflection points of the spectra.
            The user can choose the most suitable method for their specific cases or let the software automatically select the best one based on the characteristics of the spectra.
            The parameters of the background subtraction methods can be tuned by the user to ensure optimal results for different types of spectra.
        </p>
        <p align='justify'>
            Then, background subtraction can be applied as batch processing to all spectra in an experiment, ensuring a more efficient and reproducible analysis.
        </p>
        
        <h2 id="align">Scaling and Aligning</h2>
        <div className="image-carousel-container">
            <ImageCarousel images={scalingImgs} captions={scalingCaptions} width={100}/>
        </div>
        <p align='justify'>
            Scaling and aligning spectra is essential for comparing spectra taken at different times or under different conditions. 
            Crucially, when comparing the spectra of a clean substrate with the spectra of a functionalized substrate, the peaks corresponding to the substrate get weaker and weaker as the deposition of molecules on the surface proceeds, and they can even disappear completely under a thick enough layer of molecules.
            This decrease in intensity of the substrate peaks is in fact used to quantify the thickness of the molecular layer on the surface, which is a critical parameter for the performance of the sensor.
            The software provides tools to perform these tasks based on reference peaks, allowing for accurate comparison of spectra and extraction of relevant information.
        </p>
        <p align='justify'>
            Aligning spectra is crucial in synchrotron experiments, where the photon energy can drift over time due to changes in the beamline conditions.
            If done manually, this can lead to misalignment of the spectra and inaccurate analysis, therefore batch processing of scaling and aligning is essential to ensure a more efficient and reproducible analysis.
        </p>


        <h2 id="integrate">Area Integration, Stoichiometry and Coverage calculation</h2>
        <div className="image-carousel-container">
            <ImageCarousel images={integrationImgs} captions={integrationCaptions} width={100}/>
        </div>
        <p align='justify'>
            The software also provides tools to perform area integration of the peaks, which is essential for quantifying the amount of a certain element or compound present in the sample.
            This is particularly important for calculating the stoichiometry of the samples, which can provide insights into their composition and properties.
            The user can select the peaks and the range for integration, or let the software automatically select them by finding local maxima and minima in the spectra.
        </p>
        <p align='justify'>
            Additionally, for our specific case of functionalized surfaces, the software provides tools to calculate the coverage of the molecules on the surface based on the intensity of the substrate peaks, which is a critical parameter for the performance of the sensor.
            By monitoring the conditions of the evaporation (e.g., evaporation time, temperature, etc.) and the resulting coverage, we can optimize the process, for example by tuning the evaporation rate to improve the uniformity and efficiency of the coverage.
        </p>
        <p align='justify'>
            Automating the calculation of stoichiometry and coverage for a large number of spectra ensures reproducibility, efficiency and minimizes human error.
        </p>


        <h2 id="fitting">Peak fitting</h2>
        <div className="image-carousel-container">
            <ImageCarousel images={fitsImgs} captions={fitsCaptions} width={100}/>
        </div>
        <p align='justify'>
            Peak fitting is a complex task that cannot always be fully automated. Typically, it requires a lot of refining and verification from the user based on their knowledge of the system and the physics behind it. 
            However, some stages of the fitting process can be automated to provide a first rough estimation of the relevant parameters (peak positions, areas, widths) which can then be refined by the user.
            On top of this, systematically comparing different line shapes, number of components, and fitting parameters can be a daunting task when done manually, especially for a large number of spectra.
            Therefore, the software provides tools to streamline this process and ensure a more efficient and reproducible analysis, while still providing the necessary flexibility.
        </p>
        <p align='justify'>
            The first figure shows examples of the batch fitting of a total of 15 peaks (5 experiments in the 3 regions of interest: C 1s, N 1s, O 1s) with two components each.
            This way, a quick comparison of these regions at different stages of the sample preparation process can be done to monitor the evolution of the spectra and extract relevant information.
            The second figure shows a more advanced fit of the O 1s peak (from an FBI molecule) on top of the Au 4f 5/2 peak shoulder. The latter is fitted first and treated as "background" for the former.
            Subtraction of this background results in a simpler O 1s peak on a flat baseline. At this stage, the appearance of a new component after adding Ba²⁺ (blue area) becomes evident.
        </p>
        <p align='justify'>
            The fit objects themselves are stored along with the data to ensure that the results of the fits are accessible and reproducible, and to allow for systematic comparison of different fitting parameters and methods.
            This stage of the analysis is intended to be carried out in a Jupyter Notebook or a similar environment, as it requires a lot of interaction from the user to refine the fits and ensure optimal results. 
            However, initial, rough batch fitting can also be applied without user interaction in a simple python terminal.
        </p>
        <p align='justify'>
            One particular feature I am especially proud of is the implementation of a fitting method that searches for the optimal number of components in a peak based on the residuals of the fit, which can be a very useful tool to avoid overfitting or underfitting the peaks and ensure accurate analysis.
        </p>

        <h2 id="visualization">Visualization</h2>
        <p align='justify'>
            As we have seen throughout this page, the software provides tools to visualize <i> each stage of the analysis</i>, which is essential to ensure that the analysis is accurate and reliable.
            Visualization of the spectra and the results of the analysis allows the user to verify that the background subtraction, scaling, aligning, and fitting are performed correctly, and to identify any potential issues or artifacts in the spectra.
            This is crucial to keep the analysis reliable while optimizing the process and minimizing the time spent on manual tasks.
        </p>

        <h2 id="txps">TXPS analysis</h2>
        <div className='image-carousel-container'>
            <ImageCarousel images={txpsImgs} captions={txpsCaptions} width={80}/>
        </div>
        <p align='justify'>
            During the beamtimes at ALOISA in November 2022 and November 2024, we acquired some Temperature-dependent XPS (TXPS) spectra. 
            While ALOISA provided the protocol to import and analyse this data with Igor, I decided to incorporate the workflow to my xps_sw suite for consistency.
        </p>
        <p align='justify'>
            This simply meant transforming the 3-D array containing the spectra at different temperatures into a format compatible with DataFrames. 
            Then the array containing the temperature had to be interpolated to match the dimension of the XPS energies.
            Finally the maps were plotted with pcolormesh().
        </p>

        <h1 id="other-techniques">Other techniques</h1>
        <p align='justify'>
            While the main focus of the software is on XPS data analysis, it also provides tools to analyze other types of spectra that are often collected in conjunction with XPS, such as NEXAFS and TXPS spectra. 
            This allows for a more comprehensive analysis of the samples and a better understanding of their properties.
        </p>

        <h2 id="nexafs">NEXAFS analysis</h2>

        <p align='justify'>
            During the experiments at ALOISA, I had to analyze Near Edge X-ray Absorption Fine Structure (NEXAFS) spectra, which provide information about the electronic structure of the samples. 
            I adapted the software I had developed for XPS analysis to this data. This way I could take advantage of the batch processing and streamlining code that I had already developed with xps_sw.
        </p>
        <div className='image-carousel-container'>
            <ImageCarousel images={nexafsImgs} captions={nexafsCaptions} width={80}/>
        </div>'
        <p align='justify'>
            Instrumentally, XPS and NEXAFS are complementary methods in a synchrotron beamline. In XPS, the photon energy is fixed to maximize the specific atomic cross-section.
            Then we measure the photoelectron current at different kinetic energies (which are transformed to binding energies).
            In NEXAFS, we scan over different photon energies and measure the absorption at each energy of the sample in a specific range.
        </p>
        <p align='justify'>
            Scanning the photon energy implies operating electrostatic mirrors and adjusting the filtered energy of the beamline monochromator.
            At each photon energy, the flux <i>I</i><sub>0</sub>, is be slightly different, which affects the measurements. This effect has to be accounted for by calibrating the flux at each photon energy in the monochromator
            In addition, each NEXAFS experiment is composed of two spectra: one taken with the sample parallel to the photon flux and one perpendincular to it. 
            This way, we can compare the absorption in these two configurations, which yields information on σ- and π*-resonances in the molecular orbitals.
            Lastly, the conditions of the synchrotron photon flux can slightly vary from one experiment to another, so the photon energy scale must also be calibrated according to reference values.
        </p>
        <p align='justify'>
            Adapting the NEXAFS data was relatively straightforward. The main structural difference with respect to XPS data is the inclusion of a <i>I</i><sub>0</sub> value for each of the photon energies (x-axis).
            This <i>I</i><sub>0</sub> array was simply added as one more attribute of the NEXAFS object (equivalently, another column in the DataFrame). 
            The two sub-spectra taken with the sample parallel (s-polarization) and perpendicular (p-polarization) to the photon flux were treated as different experiments with a common label (e.g. "FBI-G2, 1 nm coverage").
        </p>
        <p align='justify'>
            Once the data structure was formalized, I could apply the same methods for aligning, scaling and plotting spectra developed for XPS data to the new NEXAFS data.
        </p>

        <h2 id="ali"> ALI analysis </h2>
        <div className='image-carousel-container'>
            <ImageCarousel images={aliImgs} captions={aliCaptions} width={90}/>
        </div>
        
        <p align='justify'>
            I developed the ALI analysis tools as a different module to the xps_sw, but they share a lot of common infrastructure and design principles.
            The software controlling the instrument outputs pressure curves in the UHV chamber during an entire run, which encompasses multiple injections.
            The control software fires a new injection each time the UHV pressure is recovered below a certain threshold and writes "valve ON" in the log.
        </p>
        <p align='justify'>
            Initially, I used this attribute to identify the beginning of each peak, but I realized it didn't perfeclty correspond with the rise time in the pressure chamber.
            This led to errors when overlaying the peaks and averaging them. Therefore, I implemented a custom peak-finding algorithm to identify the start and max value of each peak.
            Once I could reliably slice the peaks, plotting the average profiles for different conditions started throwing some light into the physics of the injections.
        </p>
        <p align='justify'>
            One of the main results I observed was the appearance of two different populations when the maximum pressure reached at every injection was plotted (image 3).
            The low-peak population is associated with injections when mainly the carrier gas (mostly Argon) was injected. 
            For whatever reason, those pulses didn't succesfully introduce much liquid in the UHV chamber, so the vacuum was more rapidly recovered. 
            In turn, the injections in the population with higher peak pressure also took longer to recover the vacuum, because liquid had been introduced and was more difficult to pump out.
            I dubbed these two types "dry peaks" (mainly gas) and "wet peaks" (containg liquid).
        </p>
        <p align='justify'>
            Differentiating between wet and dry peaks was crucial to estimate more accurately the amount of solute mass deposited on the samples. 
            This calculation is done by integrating the area of the pressure curve during the raise time at each injection. 
            The larger the area, the more solution is introduced and the higher and for longer the pressure raises to the peak value.
            Then different correction factors are applied, such as mass density of the solute in the solution. 
            Additionally, an estimation of the solid angle covered by the sample under the injection cone yielded an extra (and very constraining) correction factor to estimate the amount of solute that actually reached the substrate.
        </p>


        <h2 id="qcm"> QCM analysis </h2>

        <div className='image-carousel-container'>
            <ImageCarousel images={qcmImgs} captions={qcmCaptions} width={90}/>
        </div>
        <p align='justify'>
            One more submodule in the xps_sw suite comprises tools to analyze Quartz Crystal Microbalance (QCM) data.
            This were essentially oscillation frequency curves of the quartz crystal, similarly to the ALI pressure curves (image 1).
            Deposition of sublimated material on the QCM is manifested as a steady drop of this frequency over some minutes.
            The provider's software recorded live "deposited thickness" values based on a naive sticking model. This computed thickness was calculated on the spot over an unknown time period and thus non reliable.
        </p>
        <p align='justify'>
            I refined this estimation by determining more precisely the start and end times of a deposition, visible in the curve as the start of the frequency drop and the end of the measurement.
            The deposited mass Δm is directly proportional to this frequency Δf, normalized with some reference value.
        </p>
        <p align='justify'>
            In addition to characterizing sublimations, I used the QCM to attempt a rough measurement of solute deposition during ALI injections (image 2).
            Overlaying the frequency (blue) from the QCM and the UHV pressure (red) curves from ALI I could verify that the injection pulses were visible in both curves and synchronized.
            Computing an accurate deposited mass per pulse was extremely challenging, because the QCM frequency curves were not stable enough to yield reliable reads during such short injections (a few miliseconds).
            However, it was useful to get an estimation of the "collection efficiency", i.e. how much of the solute injected in the UHV chamber actually reached the substrate at a specific position under the pulse valve.
            This study revealed that purely geometric considerations hugely overestimated the amount of collected solute.
        </p>

        <h2 id="rga"> RGA analysis </h2>

        <div className='image-carousel-container'>
            <ImageCarousel images={rgaImgs} captions={rgaCaptions} width={80}/>
        </div>
        <p align='justify'>
            One more submodule in the xps_sw suite includes tools to analyze Residual Gas Analyzer (RGA) data.
            This technique provides information about the gas composition in the chamber during the experiments. 
            During the first tests with ALI, I tried characterizing the injections using RGA. 
            This were short-lived tests, so the software I developed for it was not continued past a few import, plotting and analysing functions.
        </p>
        <p align='justify'>
            For these tests, the ALI module was installed in a small UHV chamber and the RGA instrument was placed in a different, larger chamber.
            The two chambers were connected, but the distance between the two instruments was large enough that we didn't expect to observe the solute to be observed in the RGA.
            Indeed, the peaks in the RGA spectrum only corresponded to the solvent (methanol) and carrier gas (argon). The solute (FBI-G1) molecule would have yielded peaks in the high mass range (image 1).
            This meant that the solute stayed in the injection chamber, even when the valve connecting to a larger chamber was opened.
        </p>
        <p align='justify'>
            Another neat result the RGA yielded was a comparison over different pulses (image 2). In order to do this, I configured the ALI to produce very fast pulses but allow a relatively long recovery time. 
            This way, the RGA had time to probe the composition of the deposited material at each peak. 
            The result was consistent with the "dry/wet" peak analysis of the ALI peaks themselves: some peaks were consistently more intense and corresponded mostly to solvent injection and some, less intense, to carrier gas.
            However, I only realized about this years after the ALI/RGA chamber had been decommissioned! These tests could have yielded much more information on the precise composition for the specific injection conditions.
        </p>

        <h1 id="conclusion">Conclusion</h1>
        <p align='justify'>
            In conclusion, the XPS Software Repository is a powerful tool for automating and streamlining the analysis of XPS data, while also providing flexibility and customization options for users with different needs and expertise levels. 
            It has been developed with a modular structure to facilitate maintenance and extension in the future, and it is available as an open-source repository on GitHub for anyone interested in using or contributing to it.
        </p>



    </div>
    )
}