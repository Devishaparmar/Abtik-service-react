import React, { useState, useEffect, useRef, useCallback } from 'react';

// Import video asset (adjust path as necessary)
import AbtikServicesIntroVideo from '../assets/Home/ABTIK_SERVICES_INTRO.mp4'; // Assuming this video file exists
// import VideoPlaceholderImage from './asset/video-placeholder.jpg'; // Uncomment and use if you need a static image placeholder

const VideoPlayerSection = () => {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressLineRef = useRef(null); // Renamed to avoid conflict with 'progress' in CSS

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const hideOverlayTimeoutRef = useRef(null); // Ref for mutable timeout ID

  // --- Video Control Callbacks ---

  const togglePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsVideoPlaying(true);
      if (hideOverlayTimeoutRef.current) clearTimeout(hideOverlayTimeoutRef.current);
      // Hide overlay after a delay (CSS transition handles opacity)
      hideOverlayTimeoutRef.current = setTimeout(() => {
        const overlay = document.getElementById("videoOverlay");
        if (overlay) overlay.classList.add('hidden'); // Add the 'hidden' class to trigger CSS opacity transition
      }, 3000);
    } else {
      video.pause();
      setIsVideoPlaying(false);
      // Show overlay immediately on pause
      const overlay = document.getElementById("videoOverlay");
      if (overlay) overlay.classList.remove('hidden'); // Remove 'hidden' class to show overlay
      if (hideOverlayTimeoutRef.current) clearTimeout(hideOverlayTimeoutRef.current);
    }
  }, []);

  const handleMuteToggle = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  }, []);

  const handleVolumeChange = useCallback((e) => {
    const video = videoRef.current;
    if (video) {
      video.volume = parseFloat(e.target.value);
      setVolume(video.volume);
      setIsMuted(video.volume === 0);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    const progressLine = progressLineRef.current;
    if (video && progressLine && video.duration) {
      const percentage = (video.currentTime / video.duration) * 100;
      progressLine.style.width = `${percentage}%`;
    }
  }, []);

  const handleProgressBarClick = useCallback((e) => {
    const video = videoRef.current;
    const progressBar = progressBarRef.current;
    if (video && progressBar && video.duration) {
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * video.duration;
      video.currentTime = newTime;
    }
  }, []);

  const handleFullScreen = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
      }
    }
  }, []);

  const handleVideoEnded = useCallback(() => {
    setIsVideoPlaying(false);
    const overlay = document.getElementById("videoOverlay");
    if (overlay) overlay.classList.remove('hidden'); // Show overlay when video ends
    if (hideOverlayTimeoutRef.current) clearTimeout(hideOverlayTimeoutRef.current);
  }, []);

  // --- useEffect for attaching/detaching video event listeners ---
  useEffect(() => {
    const video = videoRef.current;
    const overlayButton = document.getElementById("overlayButton");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const muteBtn = document.getElementById("muteBtn");
    const volumeInput = document.getElementById("volume");
    const fullScreenBtn = document.getElementById("fullScreenBtn");
    const progressBar = progressBarRef.current;

    // Attach listeners
    if (video) {
      video.addEventListener('click', togglePlayPause);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleVideoEnded);
    }
    if (overlayButton) overlayButton.addEventListener('click', togglePlayPause);
    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
    if (muteBtn) muteBtn.addEventListener('click', handleMuteToggle);
    if (volumeInput) volumeInput.addEventListener('input', handleVolumeChange);
    if (progressBar) progressBar.addEventListener('click', handleProgressBarClick);
    if (fullScreenBtn) fullScreenBtn.addEventListener('click', handleFullScreen);

    // Cleanup listeners on component unmount
    return () => {
      if (video) {
        video.removeEventListener('click', togglePlayPause);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleVideoEnded);
      }
      if (overlayButton) overlayButton.removeEventListener('click', togglePlayPause);
      if (playPauseBtn) playPauseBtn.removeEventListener('click', togglePlayPause);
      if (muteBtn) muteBtn.removeEventListener('click', handleMuteToggle);
      if (volumeInput) volumeInput.removeEventListener('input', handleVolumeChange);
      if (progressBar) progressBar.removeEventListener('click', handleProgressBarClick);
      if (fullScreenBtn) fullScreenBtn.removeEventListener('click', handleFullScreen);
      if (hideOverlayTimeoutRef.current) clearTimeout(hideOverlayTimeoutRef.current);
    };
  }, [togglePlayPause, handleTimeUpdate, handleVideoEnded, handleMuteToggle, handleVolumeChange, handleProgressBarClick, handleFullScreen]);


  return (
    <section className="video-section flex justify-center items-center py-10 px-5 bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed min-h-[80vh]">
      <div id="videoContainer" className="video-container relative rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,102,255,0.7)] inline-block max-w-[640px] w-full">
        {/*
          You can toggle between a <video> tag and an <img> placeholder based on your needs.
          If video is not available or causing issues, use the <img>:
          <img src={VideoPlaceholderImage} alt="Video Placeholder" className="block rounded-2xl w-full h-auto" />
        */}
        <video id="myVideo" poster="" ref={videoRef} className="block rounded-2xl cursor-pointer w-full h-auto">
          <source src={AbtikServicesIntroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay (Play Button) */}
        {/* The 'hidden' class will control opacity via CSS transition */}
        <div id="videoOverlay" className={`video-overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[rgba(255,255,255,0.2)] rounded-full flex justify-center items-center cursor-pointer z-10 transition-opacity duration-300 ease ${isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <button id="overlayButton" className="bg-white border-none text-2xl text-blue-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" title="Play/Pause">▶</button>
        </div>

        {/* Video Controls Bar */}
        {/* The 'controls' class manages its own opacity on hover via CSS */}
        <div id="controls" className={`controls absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.7)] p-2.5 flex items-center gap-2.5 opacity-0 transition-opacity duration-300 ease`}>
          <button id="playPauseBtn" title="Play/Pause" className="bg-none border-none text-white text-xl cursor-pointer p-1.5">{isVideoPlaying ? '⏸' : '▶'}</button>
          
          <div id="progressBar" ref={progressBarRef} className="flex-1 h-1.5 bg-[rgba(255,255,255,0.3)] rounded-md overflow-hidden cursor-pointer">
            <div id="progress" ref={progressLineRef} className="w-0 h-full bg-[#0066ff] transition-[width] duration-100 linear"></div>
          </div>
          
          <div className="volume-control flex items-center gap-1.5">
            <button id="muteBtn" title="Mute/Unmute" className="bg-none border-none text-white text-xl cursor-pointer p-1.5">{isMuted ? '🔇' : '🔊'}</button>
            <input
              type="range"
              id="volume"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-[60px] cursor-pointer"
            />
          </div>
          <button id="fullScreenBtn" title="Full Screen" className="bg-none border-none text-white text-xl cursor-pointer p-1.5">⛶</button>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayerSection;