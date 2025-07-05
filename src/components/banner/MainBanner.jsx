import Image from 'next/image';
import React from 'react';

function MainBanner() {
  return (
    <div className="relative flex h-[200px] w-full items-center justify-center md:h-[300px] lg:h-[400px]">
      <Image
        fill
        src="/assets/mainBanner.webp"
        alt="Main Banner"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <h1 className="relative w-full text-center text-[48px] font-bold text-white sm:text-start md:pb-20 md:pl-14 md:text-[80px] lg:pb-30 lg:pl-20 lg:text-[100px] xl:text-[120px]">
        Cancun Tours
      </h1>
    </div>
  );
}

export default MainBanner;
