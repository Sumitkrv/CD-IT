import React, { useRef, useEffect } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hasPlayedOnce = false;

    const handleEnded = () => {
      // After first complete playthrough, start looping from 2 seconds
      hasPlayedOnce = true;
      video.currentTime = 2;
      video.play();
    };

    const handleTimeUpdate = () => {
      // If already played once, loop from 2 seconds when reaching the end
      if (hasPlayedOnce && video.currentTime >= video.duration - 0.1) {
        video.currentTime = 2;
      }
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);
    
    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/HeroVideo.mp4" type="video/mp4" />
          {/* Fallback if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
        </video>
      </div>

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6">
        <div className="text-center max-w-5xl mx-auto">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight tracking-tight mb-4 sm:mb-6"
            style={{
              textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              letterSpacing: '-0.01em',
            }}
          >
            Enterprise Technology Infrastructure
          </h1>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto px-4"
            style={{
              textShadow: '0 1px 8px rgba(0,0,0,0.6)',
            }}
          >
            Systems designed for operational stability, regulatory compliance, and long-term continuity across global enterprises
          </p>
        </div>
      </div>

      {/* CTA Button - Lower Position */}
      <div className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-0 right-0 z-10">
        <div className="flex justify-center items-center px-4">
          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base transition-all duration-200 shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none">
            Initiate Discussion
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;