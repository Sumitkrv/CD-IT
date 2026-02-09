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

      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto mb-auto pt-32 sm:pt-40 md:pt-48">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Reliable IT & Digital Solutions Built for Long-Term Growth
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed italic">
            Technology should support your business — not slow it down.
          </p>
        </div>
      </div>

      {/* CTA Button - Lower Position */}
      <div className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-0 right-0 z-10">
        <div className="flex justify-center items-center px-4">
          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold text-sm sm:text-base transition-all duration-200 shadow-2xl border border-gray-200 w-full sm:w-auto max-w-xs sm:max-w-none">
            Initiate Discussion
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;