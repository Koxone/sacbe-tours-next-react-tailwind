'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

export default function Tulum() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const isTulum = pathname.includes('tulum');
  const content = isTulum
    ? t('tours.tulum.content', { returnObjects: true })
    : null;

  if (!content) return null;

  return (
    <div className="flex flex-col gap-7">
      {/* Description */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-base text-neutral-700">
            {content.description.paragraph1}
          </p>
          <p className="text-base text-neutral-700">
            {content.description.paragraph2}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>{content.cenotes.intro}</p>
          <ul className="ml-4 list-inside list-disc text-gray-700">
            {content.cenotes.options.map((cenote, i) => (
              <li key={i}>{cenote}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Includes */}
      <div className="flex flex-col gap-4">
        <h3 className="relative mb-2 text-xl font-semibold">
          ¿Qué está incluido en el precio?
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]" />
        </h3>
        <ul className="ml-4 list-inside list-disc text-gray-700">
          {content.includes.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* What to bring */}
      <div className="flex flex-col gap-4">
        <h3 className="relative mb-2 text-xl font-semibold">
          {content.recommendations.title}
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]" />
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

      {/* Más información */}
      <div className="grid grid-cols-1 gap-6 text-sm text-gray-700 sm:grid-cols-1">
        <h3 className="relative mb-2 text-xl font-semibold">
          Más información
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]" />
        </h3>
        <div className="flex flex-col gap-3">
          {/* Tipo de experiencia */}
          <div>
            <h4 className="font-semibold">Tipo de experiencia</h4>
            <div className="flex flex-wrap items-center gap-2">
              <span>{content.info.type.split(':')[0]}</span>
              <span className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                {content.info.type.split(':')[1]?.trim()}
              </span>
            </div>
          </div>

          {/* Reservar con antelación */}
          <div>
            <h4 className="font-semibold">Reservar con antelación</h4>
            <p>{content.info.booking}</p>
          </div>

          {/* Duración */}
          <div>
            <h4 className="font-semibold">Duración</h4>
            <p>{content.info.duration}</p>
          </div>

          {/* Dificultad */}
          <div>
            <h4 className="font-semibold">Dificultad</h4>
            <p>{content.info.difficulty}</p>
          </div>

          {/* Categorías */}
          <div className="sm:col-span-2">
            <h4 className="font-semibold">Categorías</h4>
            <div className="flex flex-wrap gap-2">
              {content.info.categories.split(',').map((category, i) => (
                <span
                  key={i}
                  className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700"
                >
                  {category.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
