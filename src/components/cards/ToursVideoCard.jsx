'use client';

import React, { useEffect, useRef } from "react";

function ToursVideoCard() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="rounded-lg border-4 bg-white md:block">
      <video
        ref={videoRef}
        src="/assets/pruebaBanner.mp4"
        muted
        loop
        playsInline
        autoPlay
        className="h-full max-h-[240px] w-full max-w-[500px] cursor-pointer overflow-hidden rounded-lg border-2 border-black object-cover md:block"
      />
    </div>
  );
}

export default ToursVideoCard;
