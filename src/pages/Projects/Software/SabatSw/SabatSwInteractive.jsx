import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import daqSettingsImg from './images/mock_sw/acquisition_settings.png';
import autofocusImg from './images/mock_sw/autofocus.png';
import liveCameraImg from './images/mock_sw/live_camera.png';
import managePowerImg from './images/mock_sw/manage_power.png';
import moveZImg from './images/mock_sw/move_z.png';
import powerRampImg from './images/mock_sw/power_ramp.png';
import refreshPowerImg from './images/mock_sw/refresh_power.png'
import sampleNameImg from './images/mock_sw/sample_name.png'
import setExposureImg from './images/mock_sw/set_exposure.png'
import setFilterImg from './images/mock_sw/set_filter.png'
import setRoiImg from './images/mock_sw/set_roi.png'
import setupSettingsImg from './images/mock_sw/setup_settings.png'
import takeImageImg from './images/mock_sw/take_image.png'
import takeSpectraImg from './images/mock_sw/take_spectra.png'
import timeTrajectoriesImg from './images/mock_sw/time_trajectories.png'
import toggleShutterImg from './images/mock_sw/toggle_shutter.png'
import mapImg from './images/mock_sw/canvas.001.png'

import trajectLoadingImg from './images/fluorescence_trajectory_loading.PNG';
import trajectResultImg from './images/fluorescence_trajectory_result.PNG';
import sampleNameResultImg from './images/sample_name.PNG'
import exposureResultImg from './images/set_exposure.png'
import toggleShutterResultImg from './images/toggleShutterResult.png'
import refreshPowerResultImg1 from './images/refreshPower1.png'
import refreshPowerResultImg2 from './images/refreshPower2.png'
import refreshPowerResultImg3 from './images/refreshPower3.png'

import autofocusMockVid from './images/recording_autofocus_mock.mp4'
import filterWheelVid from './images/recording_live_filter_selection.mp4'
import spectraVid from './images/recording_spectra.mp4'
import moveZVid2 from './images/recording_manual_focusing.mp4'
import powerManageVid from './images/recording_power_attenuation.mp4'
import liveVid from './images/LiveCam.mp4'

import './SabatSwInteractive.css';
const areas = [
  // add `target: 'showResult'` to the areas that should display the trajectory result
    { name: 'TakeSpectra', img: takeSpectraImg, style: {left: '12.42%', top: '35.53%', width: '23.24%', height: '6.2%'}, 
        target: 'video', resultVideo: spectraVid, resultCaption: 'A sample name must be specified. The camera takes images with the different band-pass filters. The average intensity with each filter yields the emission spectrum.' },
  { name: 'TakeTrajectories', img: timeTrajectoriesImg, style: { left: '37.61%', top: '35.53%', width: '23.73%', height: '6.2%' }, 
    target: 'showResult', result: [trajectLoadingImg, trajectResultImg], resultCaption: 'Trajectory loading screen (takes time) and result', sequential: true, sequenceDelay: 3 },
    { name: 'PowerRamp', img: powerRampImg, style: { left: '63.1%', top: '35.53%', width: '23.83%', height: '6.2%' },  },

    { name: 'TakeImage', img: takeImageImg, style: {left: '12.25%', top: '45.25%', width: '23.68%', height: '6.5%'}, },
    { name: 'LiveCamera', img: liveCameraImg, style: {left: '37.49%', top: '45.25%', width: '23.9%', height: '6.7%'},
         target: 'video', resultVideo: liveVid, resultCaption: 'Live camera demo with white light illumination' },
    { name: 'Autofocus', img: autofocusImg, style: {left: '63.1%', top: '45.25%', width: '23.83%', height: '6.5%'}, 
        target: 'video', resultVideo: autofocusMockVid, resultCaption: 'Autofocus demo with mock data. A first coarse focus in the Z-axis is followed by a fine focus. Includes reminders to switch on/off white light.' },

    { name: 'SetROI', img: setRoiImg, style: {left: '37.5%', top: '55.0%', width: '23.68%', height: '6.2%'},  },
    { name: 'SetFilter', img: setFilterImg, style: {left: '63.16%', top: '55.0%', width: '23.68%', height: '6.2%'}, 
        target: 'video', resultVideo: filterWheelVid, resultCaption: 'Filter wheel demo: as the filter wheel spins on live camera, the recorded intensity of the white light changes accordingly.' },

    { name: 'SetName', img: sampleNameImg, style: {left: '12.1%', top: '55.0%', width: '23.68%', height: '6.2%'}, 
        target: 'showResult', result: sampleNameResultImg, resultCaption: 'Sample name setting screen. Several predetermined "quick access" options are available' },

    { name: 'SetExposure', img: setExposureImg, style: {left: '12.1%', top: '64.52%', width: '23.68%', height: '6.5%'}, 
        target: 'showResult', result: exposureResultImg, resultCaption: 'Exposure time setting screen. ' },
    { name: 'MoveZ', img: moveZImg, style: {left: '37.63%', top: '65.0%', width: '23.68%', height: '6.2%'}, 
        target: 'video', resultVideo: moveZVid2, resultCaption: 'Some samples are challenging to focus on, so manual focusing can be helpful in this cases.' },
    { name: 'RefreshPower', img: refreshPowerImg, style: {left: '63.16%', top: '64.52%', width: '23.68%', height: '6.5%'},
      target: 'showResult', result: [refreshPowerResultImg1, refreshPowerResultImg2, refreshPowerResultImg3], resultCaption: 'This button simply refreshes the reading output of the powermeter' },
    
    { name: 'ManagePower', img: managePowerImg, style: {left: '12.1%', top: '74.98%', width: '23.68%', height: '6.5%'},
         target: 'video', resultVideo: powerManageVid, resultCaption: 'Power management options: a loss correction factor can be applied to the power readings. The neutral filter density can be moved to attenuate the power or reset to the maximum position.'  },
    { name: 'ToggleShutter', img: toggleShutterImg, style: {left: '37.27%', top: '74.98%', width: '24.28%', height: '6.2%'},
     target: 'showResult', result: toggleShutterResultImg, resultCaption: 'This button toggles the shutter open or closed' },
    { name: 'DAQSettings', img: daqSettingsImg, style: {left: '63.11%', top: '75.1%', width: '23.68%', height: '6.2%'},  },
    
    { name: 'SetupSettings', img: setupSettingsImg, style: {left: '37.59%', top: '85.95%', width: '23.68%', height: '6.2%'},  },
];

// Helpers moved to top-level so they can be reused or tested more easily.
function showRandomResult(result, caption, setResultMedia) {
  const src = Array.isArray(result) ? result[Math.floor(Math.random() * result.length)] : result;
  setResultMedia({ type: 'image', src, caption: caption || 'Result (placeholder)' });
}

function showVideoResult(videoSrc, caption, setResultMedia) {
  setResultMedia({ type: 'video', src: videoSrc, caption: caption || 'Result (placeholder)' });
}

function startSequential(area, setResultMedia, sequenceRef, setSequenceCountdown, proceedSequence) {
  const items = Array.isArray(area.result) ? area.result : [area.result];
  if (!items.length) return;
  const first = items[0];
  setResultMedia({ type: 'image', src: first, caption: area.resultCaption || 'Result (placeholder)' });
  if (sequenceRef.current && sequenceRef.current.intervalId) {
    clearInterval(sequenceRef.current.intervalId);
  }
  sequenceRef.current = { area, step: 0, intervalId: null };
  const delay = typeof area.sequenceDelay === 'number' ? area.sequenceDelay : 3;
  setSequenceCountdown(delay);
  sequenceRef.current.intervalId = setInterval(() => {
    setSequenceCountdown(prev => {
      if (prev === null) return null;
      if (prev <= 1) {
        if (sequenceRef.current && sequenceRef.current.intervalId) {
          clearInterval(sequenceRef.current.intervalId);
          sequenceRef.current.intervalId = null;
        }
        proceedSequence();
        return null;
      }
      return prev - 1;
    });
  }, 1000);
}

export default function SabatSwInteractive() {
  const navigate = useNavigate();
  // resultMedia: { type: 'image'|'video', src: string, caption?: string }
  const [resultMedia, setResultMedia] = useState(null);

  // Ref for the visible video element so we can listen for its 'ended' event.
  const videoRef = useRef(null);
  // Countdown state (seconds) shown in the Close button after video end
  const [countdown, setCountdown] = useState(null);
  const countdownRef = useRef(null);
  // Sequence state for multi-step results (e.g. loading -> final image)
  const sequenceRef = useRef(null); // { area, step, intervalId }
  const [sequenceCountdown, setSequenceCountdown] = useState(null);

  // Helpers are implemented at top-level to keep the component body concise.

  // Auto-close behavior: start a 5s timer only after the video finishes playing.
  useEffect(() => {
    // When a video result is shown, attach ended listener that starts a 5s countdown
    if (!resultMedia || resultMedia.type !== 'video') {
      // if resultMedia changed away from video, ensure any video countdown is cleared
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
      setCountdown(null);
      return undefined;
    }

    const vid = videoRef.current;
    if (!vid) return undefined;

    const onEnded = () => {
      // initialize countdown at 5 and decrement every second
      setCountdown(5);
      if (countdownRef.current) clearInterval(countdownRef.current);
      countdownRef.current = setInterval(() => {
        setCountdown(prev => {
          if (prev === null) return null;
          if (prev <= 1) {
            // reached 0: clear media and cleanup
            if (countdownRef.current) {
              clearInterval(countdownRef.current);
              countdownRef.current = null;
            }
            setResultMedia(null);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    };

    vid.addEventListener('ended', onEnded);
    // If the video already ended (edge case), start the countdown immediately
    if (vid.ended) onEnded();

    return () => {
      vid.removeEventListener('ended', onEnded);
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
      setCountdown(null);
    };
  }, [resultMedia]);

  // Close the result overlay when the user presses Escape
  useEffect(() => {
    if (!resultMedia) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') setResultMedia(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [resultMedia]);

  // If the overlay is closed (resultMedia becomes null), make sure any active sequence
  // interval/timers are cleared so we don't leak timers when the user dismisses early.
  useEffect(() => {
    if (resultMedia) return undefined;
    if (sequenceRef.current && sequenceRef.current.intervalId) {
      clearInterval(sequenceRef.current.intervalId);
      sequenceRef.current.intervalId = null;
    }
    sequenceRef.current = null;
    setSequenceCountdown(null);
    return undefined;
  }, [resultMedia]);

  const handleClick = (areaOrTarget) => {
    if (!areaOrTarget) return;
    // If caller passed the area object (recommended), prefer using its `result`, `resultVideo` or `target`.
    if (typeof areaOrTarget === 'object') {
      const { result, resultVideo, target } = areaOrTarget;
      if (result) {
        // sequential special-case
        if (areaOrTarget.sequential && Array.isArray(result) && result.length > 0) {
          startSequential(areaOrTarget, setResultMedia, sequenceRef, setSequenceCountdown, proceedSequence);
          return;
        }
        // random or single image
        showRandomResult(result, areaOrTarget.resultCaption, setResultMedia);
        return;
      }
      if (resultVideo) {
        showVideoResult(resultVideo, areaOrTarget.resultCaption, setResultMedia);
        return;
      }
      // fallthrough to handle string target inside the object
      if (typeof target === 'string' && target.startsWith('/')) {
        navigate(target);
        return;
      }
      if (typeof target === 'string') {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      return;
    }

    // If caller passed a plain string target
    if (typeof areaOrTarget === 'string' && areaOrTarget.startsWith('/')) {
      navigate(areaOrTarget);
    } else if (typeof areaOrTarget === 'string') {
      const el = document.getElementById(areaOrTarget);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Proceed the currently active sequence (advance to next step or finish)
  const proceedSequence = () => {
    const seq = sequenceRef.current;
    if (!seq || !seq.area) return;
    const { area, step } = seq;
    const items = Array.isArray(area.result) ? area.result : [area.result];
    const nextIndex = step + 1;
    if (nextIndex < items.length) {
      // show next step
      const nextSrc = items[nextIndex];
      setResultMedia({ type: 'image', src: nextSrc, caption: area.resultCaption || 'Result (placeholder)' });
    }
    // cleanup sequence state
    if (sequenceRef.current && sequenceRef.current.intervalId) {
      clearInterval(sequenceRef.current.intervalId);
      sequenceRef.current.intervalId = null;
    }
    sequenceRef.current = null;
    setSequenceCountdown(null);
  };

  return (
    <div className="sabatsw-map-container">
      {/* base map image — ensures overlays scale exactly with visual map */}
      <img src={mapImg} alt="SABAT map" className="sabatsw-map-base" />

      {/* If a result image is set, render it covering the whole canvas */}
      {resultMedia ? (
        <>
          {/* allow clicking the media itself to close and show countdown in the button */}
          {resultMedia.type === 'image' ? (
            <img
              src={resultMedia.src}
              alt="Result"
              className="sabatsw-map-result fade-in"
              onClick={() => {
                // If a sequence is active, clicking the loading image advances the sequence
                if (sequenceRef.current) {
                  proceedSequence();
                } else {
                  setResultMedia(null);
                }
              }}
            />
          ) : (
            <video
              ref={videoRef}
              src={resultMedia.src}
              className="sabatsw-map-result fade-in"
              controls
              autoPlay
              muted
              playsInline
              onClick={() => setResultMedia(null)}
            />
          )}
          <div className="sabatsw-map-caption">
            {resultMedia.caption}{sequenceCountdown ? ` — Next in ${sequenceCountdown}s` : ''}
          </div>
          <button className="sabatsw-result-close" onClick={() => { setResultMedia(null); }}>
            {countdown ? `Close (${countdown})` : 'Close'}
          </button>
        </>
      ) : (
        areas.map(area => {
          // explicitly mark some areas as "unimplemented" regardless of target
          const UNIMPLEMENTED = new Set(['PowerRamp', 'TakeImage', 'SetROI', 'DAQSettings', 'SetupSettings']);
          const isDisabled = !area.target || UNIMPLEMENTED.has(area.name);
          const className = `sabatsw-map-img ${isDisabled ? 'sabatsw-map-img-disabled' : ''}`.trim();
          return (
            <img
              key={area.name}
              src={area.img}
              alt={area.name}
              className={className}
              style={area.style}
              onClick={() => handleClick(area)}
              title={isDisabled ? `${area.name} (unimplemented)` : area.name}
              aria-disabled={isDisabled}
            />
          );
        })
      )}
    </div>
  );
}

