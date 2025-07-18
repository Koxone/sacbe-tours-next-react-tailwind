'use client';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from '@/components/icons/Icons';
import { usePathname } from 'next/navigation';
import React, { useMemo, useState } from 'react';

export default function TourMosaic() {
  const pathname = usePathname();
  const tourFolder = pathname.split('/').pop();

  const imageCount = 6;
  const images = useMemo(() => {
    return Array.from({ length: imageCount }).map(
      (_, i) => `/tours/${tourFolder}/${i + 1}.webp`
    );
  }, [tourFolder]);

  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index) => {
    setCurrent(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto h-fit w-full max-w-[1200px]">
      {/* Desktop view */}
      <div className="hidden max-h-[500px] grid-cols-3 gap-4 overflow-hidden rounded-lg sm:grid">
        <div className="row-span-2 h-[500px] rounded-lg sm:col-span-2">
          <img
            src={images[0]}
            alt="Main"
            onClick={() => openModal(0)}
            className="h-full w-full cursor-pointer rounded-lg object-cover"
          />
        </div>
        <div className="grid h-full w-full grid-cols-2 gap-4 sm:grid-cols-1">
          {images.slice(1).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Image ${idx + 2}`}
              onClick={() => openModal(idx + 1)}
              className="h-full w-full cursor-pointer rounded-lg object-cover"
            />
          ))}
        </div>
      </div>

      {/* Mobile view */}
      <div className="relative max-h-[500px] w-full overflow-hidden rounded-lg sm:hidden">
        <img
          src={images[current]}
          alt={`Image ${current + 1}`}
          onClick={() => openModal(current)}
          className="h-[300px] w-full rounded-lg object-cover"
        />
        {/* Chevron buttons */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${current === i ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          {/* Chevron buttons */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <img
            src={images[current]}
            alt={`Image ${current + 1}`}
            className="max-h-[80vh] max-w-full rounded-lg object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
