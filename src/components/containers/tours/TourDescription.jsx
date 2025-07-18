import { ClockIcon } from '@/components/icons/Icons';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function TourDescription() {
  const [activeTab, setActiveTab] = useState('description');
  const tabs = ['description', 'itinerary', 'point'];
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-[500px] space-y-8 p-4">
      {/* Título y reservar */}
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-col gap-2 whitespace-nowrap">
          <h2 className="text-2xl font-bold">
            {t('tours.tulum.widgetContainer.header.title')}
          </h2>
          <div className="flex items-center gap-2">
            <ClockIcon />
            <p className="text-muted text-sm">{`${t('tours.tulum.widgetContainer.header.time')}${t('tours.tulum.widgetContainer.header.utils')}`}</p>
          </div>
        </div>
        <p className="text-gray-700">
          {t('tours.tulum.widgetContainer.header.description')}
        </p>
      </div>

      {/* Tabs */}
      <ul
        role="tablist"
        className="flex justify-between border-b border-gray-200 text-lg"
      >
        {tabs.map((tabKey, idx) => (
          <li
            key={tabKey}
            role="tab"
            id={`react-tabs-${6 + idx * 2}`}
            aria-selected={activeTab === tabKey}
            aria-controls={`react-tabs-${7 + idx * 2}`}
            tabIndex={activeTab === tabKey ? 0 : -1}
            onClick={() => setActiveTab(tabKey)}
            className={`cursor-pointer border-b-2 px-4 py-2 font-medium transition-colors ${
              activeTab === tabKey
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:border-blue-600 hover:text-blue-600'
            }`}
          >
            {t(`tours.tulum.widgetContainer.tabs.${tabKey}`)}
          </li>
        ))}
      </ul>

      {/* Content */}
      {/* Tab Content */}
      <div role="tabpanel" className="mt-6 space-y-4">
        {activeTab === 'description' && (
          <div className='flex flex-col gap-7'>
            {/* Description */}
            <div>
              <div className="flex flex-col gap-4">
                <p className="text-base text-neutral-700">
                  Descubre la magia del Caribe mexicano con este tour privado a
                  Tulum, una antigua ciudad maya construida frente al mar.
                  Disfruta de un día lleno de historia, paisajes impresionantes
                  y aguas cristalinas, con la opción de visitar un cenote o
                  pasar el día en la playa.
                </p>
                <p>
                  Incluye <strong>visita al sitio arqueológico de Tulum</strong>{' '}
                  y <strong>visita a un cenote</strong> para vivir una
                  experiencia única.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Podemos llevarte a uno de los siguientes cenotes, tú decides
                  cuál:
                </p>
                <ul className="ml-4 list-inside list-disc text-gray-700">
                  <li>Cenote Casa Tortuga</li>
                  <li>Cenote Cristalino</li>
                  <li>Cenote Dos Ojos</li>
                  <li>Gran Cenote</li>
                </ul>
              </div>
            </div>

            {/* Includes */}
            <div className="flex flex-col gap-4">
              <h3 className="relative mb-2 text-xl font-semibold">
                ¿Qué está incluido en el precio?
                <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-blue-500"></span>
              </h3>
              <ul className="ml-4 list-inside list-disc text-gray-700">
                <li>Suplemento por combustible</li>
                <li>🚐 Transporte privado con aire acondicionado</li>
                <li>👨‍✈️ Chofer de 6 a 8 hrs</li>
                <li>📍 Pick up en hotel o Airbnb</li>
                <li>🗿 Visita a sitio arqueológico de Tulum</li>
                <li>🌀 Visita a cenote</li>
              </ul>
            </div>

            {/* Not Included */}
            <div className="flex flex-col gap-4">
              <h3 className="relative mb-2 text-xl font-semibold">
                Exclusiones
                <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-blue-500"></span>
              </h3>
              <ul className="ml-4 list-inside list-disc text-gray-700">
                <li>Propina o agradecimiento</li>
                <li>Tarifas de estacionamiento</li>
                <li>Comida y bebida</li>
                <li>Entrada</li>
                <li>Estacionamientos ni casetas</li>
                <li>Entrada a Tulum o cenote</li>
              </ul>
            </div>

            {/* What to Bring */}
            <div className="flex flex-col gap-4">
              <h3 className="relative mb-2 text-xl font-semibold">
                ¿Qué necesito llevar?
                <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-blue-500"></span>
              </h3>
              <ul className="ml-4 list-inside list-disc text-gray-700">
                <li>Ropa cómoda y ligera</li>
                <li>Tenis o sandalias cómodas</li>
                <li>Traje de baño, toalla, muda extra</li>
                <li>Protector solar y repelente biodegradables</li>
                <li>Gorra, lentes de sol, agua reutilizable</li>
                <li>Efectivo y bolsa impermeable</li>
              </ul>
            </div>

            {/* Cancelation Politics */}
            <div className="flex flex-col gap-4">
              <h3 className="relative mb-2 text-xl font-semibold">
                Política de cancelación
                <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-blue-500"></span>
              </h3>
              <ul className="ml-4 list-inside list-disc text-gray-700">
                <li>
                  100% de cargo si cancelas 1 día o menos antes del evento.
                </li>
                <li>
                  0% de cargo si cancelas 1000 días o más antes del evento.
                </li>
              </ul>
            </div>

            {/* Extras */}
            <div className="flex flex-col gap-4">
              <h3 className="relative mb-2 text-xl font-semibold">
                Más información
                <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-blue-500"></span>
              </h3>
              <ul className="ml-4 list-inside list-disc text-gray-700">
                <li>Tipo de experiencia: Tour / Actividad Privado</li>
                <li>Reservar con antelación: 1 día</li>
                <li>Duración: 6 horas</li>
                <li>Dificultad: Fácil</li>
                <li>
                  Categorías: Minivan tour, Family friendly, Group friendly,
                  Private experience
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 'itinerary' && (
          <div>
            <h3 className="text-xl font-semibold">Itinerario</h3>
            <div className="text-font-p mt-4 space-y-4 text-sm">
              <div className="space-y-2">
                <h4 className="text-font-heading my-0 !font-semibold">
                  Pickup
                </h4>
                <p className="leading-relaxed text-[#57646f]">
                  Pickup from your Hotel/Airbnb in your preferred area. Private
                  transportation in an air-conditioned vehicle.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-font-heading my-0 !font-semibold">
                  Archaeological Zone
                </h4>
                <p className="leading-relaxed text-[#57646f]">
                  Direct and private transfer to the Tulum archaeological site
                  (Optional stop for shopping available).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-font-heading my-0 !font-semibold">Beach</h4>
                <p className="leading-relaxed text-[#57646f]">
                  Free time at Tulum beach (subject to availability).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-font-heading my-0 !font-semibold">
                  Cenote
                </h4>
                <p className="leading-relaxed text-[#57646f]">
                  Visit to a Mayan cenote (we'll suggest the best options).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-font-heading my-0 !font-semibold">
                  Return
                </h4>
                <p className="leading-relaxed text-[#57646f]">
                  Private transfer back to your accommodation.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'point' && (
          <div>
            <h3 className="text-xl font-semibold">Punto de salida</h3>
            <p>Contenido del punto de salida...</p>
          </div>
        )}
      </div>
    </section>
  );
}
