'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

function ToursVideoCard() {
  const videoRef = useRef(null);
  const pathname = usePathname();

  let videoSrc = '';

  if (pathname.includes('tulum')) {
    videoSrc = '/assets/tulum.mp4';
  } else if (pathname.includes('cancun')) {
    videoSrc = '/assets/cancun.mp4';
  } else if (pathname.includes('chichen-itza')) {
    videoSrc =
      'https://videos.pexels.com/video-files/27049871/12057482_2560_1440_60fps.mp4';
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="rounded-lg border-4 bg-white md:block">
      <video
        ref={videoRef}
        src={videoSrc}
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
