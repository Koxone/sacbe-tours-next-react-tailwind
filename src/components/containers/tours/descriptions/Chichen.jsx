'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

export default function Chichen() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const isChichen = pathname.includes('chichen');
  const content = isChichen
    ? t('tours.chichen.content', { returnObjects: true })
    : null;

  if (!content) return null;

  return (
    <div className="flex flex-col gap-7">
      {/* Description */}
      <div className="flex flex-col gap-4">
        {content.description.paragraphs.map((text, i) => (
          <p
            key={i}
            className="text-base text-neutral-700"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>

      {/* Includes */}
      <div className="flex flex-col gap-4">
        <h3 className="relative mb-2 text-xl font-semibold">
          {content.includes.title}
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
        </h3>
        <ul className="ml-4 list-inside list-disc text-gray-700">
          {content.includes.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Excludes */}
      <div className="flex flex-col gap-4">
        <h3 className="relative mb-2 text-xl font-semibold">
          {content.excludes.title}
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
        </h3>
        <ul className="ml-4 list-inside list-disc text-gray-700">
          {content.excludes.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* What to Bring */}
      <div className="flex flex-col gap-4">
        <h3 className="relative mb-2 text-xl font-semibold">
          {content.recommendations.title}
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
        </h3>
        <ul className="ml-4 list-inside list-disc text-gray-700">
          {content.recommendations.items.map((item, i) => (
            <li key={i}>
              <span className="font-semibold">{item.title}</span>
              {item.details ? ` - ${item.details}` : ''}
            </li>
          ))}
        </ul>
      </div>

      {/* Cancelation Policy */}
      <div className="flex flex-col gap-4">
        <h3 className="relative mb-2 text-xl font-semibold">
          {content.cancellation.title}
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
        </h3>
        <ul className="ml-4 list-inside list-disc text-gray-700">
          {content.cancellation.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Extra Info */}
      <div className="grid grid-cols-1 gap-6 text-sm text-gray-700 sm:grid-cols-1">
        <h3 className="relative mb-2 text-xl font-semibold">
          {content.info.title}
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
        </h3>
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="font-semibold">{content.info.typeTitle}</h4>
            <div className="flex flex-wrap items-center gap-2">
              <span>{content.info.typeLabel}</span>
              <span className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                {content.info.typeBadge}
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">{content.info.bookingTitle}</h4>
            <p>{content.info.booking}</p>
          </div>

          <div>
            <h4 className="font-semibold">{content.info.durationTitle}</h4>
            <p>{content.info.duration}</p>
          </div>

          <div>
            <h4 className="font-semibold">{content.info.difficultyTitle}</h4>
            <p>{content.info.difficulty}</p>
          </div>

          <div className="sm:col-span-2">
            <h4 className="font-semibold">{content.info.categoriesTitle}</h4>
            <div className="flex flex-wrap gap-2">
              {content.info.categories.map((cat, i) => (
                <span
                  key={i}
                  className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
