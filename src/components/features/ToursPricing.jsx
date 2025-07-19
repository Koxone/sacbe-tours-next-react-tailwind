'use client';

import React, { useState } from 'react';
import data from '@/data/data.json';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import { useProjectContext } from '@/context/ProjectContext';

function ToursPricing() {
  const pathname = usePathname();
  const { setLanguage } = useProjectContext();
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const [selectedRange, setSelectedRange] = useState(0);

  const rangesES = [
    '1-3 días (0%)',
    '4-7 días (15%)',
    '8-15 días (20%)',
    '16-30 días (25%)',
    '+30 días (30%)',
  ];

  const rangesEN = [
    '1-3 days (0%)',
    '4-7 days (15%)',
    '8-15 days (20%)',
    '16-30 days (25%)',
    '+30 days (30%)',
  ];

  const ranges = currentLang === 'es' ? rangesES : rangesEN;

  const handleSelect = (index) => setSelectedRange(index);

  const price = data.pricing[selectedRange];

  return (
    <div id="pricing" className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="mb-2 text-center text-2xl font-bold text-[var(--color-sacbe)] md:text-3xl">
        {pathname.includes('tulum')
          ? t('tours.tulum.toursPricing.title')
          : pathname.includes('chichen-itza')
            ? t('tours.chichen.toursPricing.title')
            : pathname.includes('cancun')
              ? t('tours.cancun.toursPricing.title')
              : ''}
      </h2>
      <p className="mb-6 text-center text-sm">
        {pathname.includes('tulum')
          ? t('tours.tulum.toursPricing.subtitle')
          : pathname.includes('chichen-itza')
            ? t('tours.chichen.toursPricing.subtitle')
            : pathname.includes('cancun')
              ? t('tours.cancun.toursPricing.subtitle')
              : ''}
      </p>

      {/* Desktop Buttons */}
      <div className="mb-4 hidden flex-wrap justify-center gap-2 md:flex">
        {ranges.map((range, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded-full border-transparent px-4 py-2 text-sm ${
              selectedRange === index
                ? 'bg-[var(--color-sacbe)] text-white'
                : 'bg-neutral-100 text-gray-800 hover:bg-gray-200'
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
          <h3 className="mb-2 text-4xl whitespace-nowrap">
            {t('general.pricing.adult')}
          </h3>
          <p className="text-2xl font-bold text-[#009db0]">
            ${price.adult.toLocaleString()} <span className="text-sm">MXN</span>
          </p>
          {price.discount > 0 && (
            <div className="mt-2 text-sm text-gray-500">
              <div className="line-through">
                ${price.adultOriginal.toLocaleString()} MXN
              </div>
              <div>
                Ahorras: ${(price.adultOriginal - price.adult).toLocaleString()}{' '}
                MXN
              </div>
            </div>
          )}
        </div>

        {/* Child */}
        <div className="rounded-lg bg-neutral-100 p-4 text-center shadow">
          <h3 className="mb-2 text-4xl">{t('general.pricing.child')}</h3>
          <p className="text-2xl font-bold text-[#009db0]">
            ${price.child.toLocaleString()} <span className="text-sm">MXN</span>
          </p>
          {price.discount > 0 && (
            <div className="mt-2 text-sm text-gray-500">
              <div className="line-through">
                ${price.childOriginal.toLocaleString()} MXN
              </div>
              <div>
                Ahorras: ${(price.childOriginal - price.child).toLocaleString()}{' '}
                MXN
              </div>
            </div>
          )}
        </div>

        {/* Infant */}
        <div className="rounded-lg bg-neutral-100 p-4 text-center shadow">
          <h3 className="mb-2 text-3xl">{t('general.pricing.infant')}</h3>
          <p className="text-2xl font-bold text-[#009db0]">
            ${price.infant.toLocaleString()}{' '}
            <span className="text-sm">MXN</span>
          </p>
          {price.discount > 0 && (
            <div className="mt-2 text-sm text-gray-500">
              <div className="line-through">
                ${price.childOriginal.toLocaleString()} MXN
              </div>
              <div>
                Ahorras: ${(price.childOriginal - price.child).toLocaleString()}{' '}
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
