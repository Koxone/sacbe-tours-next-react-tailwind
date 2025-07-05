'use client';

import React, { useState } from "react";
import data from "@/data/data.json"

function ToursPricing() {
  const [selectedRange, setSelectedRange] = useState(0);

  const ranges = [
    "1-3 días (0%)",
    "4-7 días (15%)",
    "8-15 días (20%)",
    "16-30 días (25%)",
    "+30 días (30%)",
  ];

  const handleSelect = (index) => setSelectedRange(index);

  const price = data.pricing[selectedRange];

  return (
    <div id="pricing" className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="mb-2 text-center text-2xl font-bold text-[var(--color-sacbe)] md:text-3xl">
        Reserva aquí el tour ecológico a Cancun
      </h2>
      <p className="mb-6 text-center text-sm">
        Seleccione con cuántos días de anticipación desea reservar para ver las
        tarifas aplicables
      </p>

      {/* Desktop Buttons */}
      <div className="mb-4 hidden flex-wrap justify-center gap-2 md:flex">
        {ranges.map((range, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded-full border-transparent px-4 py-2 text-sm ${
              selectedRange === index
                ? "bg-[var(--color-sacbe)] text-white"
                : "bg-neutral-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Dropdown mobile */}
      <div className="mb-6 text-center md:hidden">
        <select
          value={selectedRange}
          onChange={(e) => handleSelect(Number(e.target.value))}
          className="w-full max-w-xs rounded border px-4 py-2"
        >
          {ranges.map((range, index) => (
            <option key={index} value={index}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Prices Dashboard */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Adult */}
        <div className="rounded-lg bg-neutral-100 p-4 text-center shadow">
          <h3 className="mb-2 text-4xl whitespace-nowrap">Precio Adulto</h3>
          <p className="text-2xl font-bold text-[#009db0]">
            ${price.adult.toLocaleString()} <span className="text-sm">MXN</span>
          </p>
          {price.discount > 0 && (
            <div className="mt-2 text-sm text-gray-500">
              <div className="line-through">
                ${price.adultOriginal.toLocaleString()} MXN
              </div>
              <div>
                Ahorras: ${(price.adultOriginal - price.adult).toLocaleString()}{" "}
                MXN
              </div>
            </div>
          )}
        </div>

        {/* Child */}
        <div className="rounded-lg bg-neutral-100 p-4 text-center shadow">
          <h3 className="mb-2 text-4xl">Precio Niño</h3>
          <p className="text-2xl font-bold text-[#009db0]">
            ${price.child.toLocaleString()} <span className="text-sm">MXN</span>
          </p>
          {price.discount > 0 && (
            <div className="mt-2 text-sm text-gray-500">
              <div className="line-through">
                ${price.childOriginal.toLocaleString()} MXN
              </div>
              <div>
                Ahorras: ${(price.childOriginal - price.child).toLocaleString()}{" "}
                MXN
              </div>
            </div>
          )}
        </div>

        {/* Infant */}
        <div className="rounded-lg bg-neutral-100 p-4 text-center shadow">
          <h3 className="mb-2 text-4xl">Precio Niño</h3>
          <p className="text-2xl font-bold text-[#009db0]">
            ${price.infant.toLocaleString()}{" "}
            <span className="text-sm">MXN</span>
          </p>
          {price.discount > 0 && (
            <div className="mt-2 text-sm text-gray-500">
              <div className="line-through">
                ${price.childOriginal.toLocaleString()} MXN
              </div>
              <div>
                Ahorras: ${(price.childOriginal - price.child).toLocaleString()}{" "}
                MXN
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToursPricing;
