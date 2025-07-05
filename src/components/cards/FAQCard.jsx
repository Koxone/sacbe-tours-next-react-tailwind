'use client';

import { useState } from "react";

const FAQCard = ({ title, revealed, onClick }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleToggle = () => {
    setIsRevealed(!isRevealed);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-gray-800 text-white"
      onClick={handleToggle}
    >
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center p-4 transition-transform duration-500 group-hover:-translate-x-full ${isRevealed ? "-translate-x-full" : ""}`}
      >
        <h2 className="text-center text-lg font-semibold">{title}</h2>
      </div>
      <div
        className={`absolute inset-0 flex flex-col items-start justify-center gap-4 rounded-xl bg-[var(--color-sacbe)] p-4 text-left transition-transform duration-500 group-hover:translate-x-0 ${isRevealed ? "translate-x-0" : "translate-x-full"}`}
      >
        <p className="text-center text-sm tracking-wide">{revealed}</p>
        <button
          onClick={onClick}
          className="mt-auto cursor-pointer rounded-full bg-[#009db0] px-2 py-1 font-semibold text-white transition hover:bg-[#007a8a]"
        >
          Saber Más
        </button>
      </div>
    </div>
  );
};

export default FAQCard;
