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
      <div role="tabpanel" className="mt-6 space-y-4">
        {/* Description */}
        {activeTab === 'description' && (
          <div className="flex flex-col gap-7">
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
                <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
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
                <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
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
                <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
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
                <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
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
                <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
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
        {/* Itinerary */}
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
        {/* Recollection */}
        {activeTab === 'point' && (
          <div className="flex flex-col gap-6">
            <p className="text-lg font-medium">
              Puedes comenzar esta experiencia en los siguientes lugares.
            </p>
            <div className="flex flex-col gap-10">
              {/* Pick up point 1 */}
              <div>
                <p className="text-base font-medium">
                  Cancún Centro & Zona Hotelera
                </p>
                <p className="text-neutral-500">
                  Cancún Centro / Zona Hotelera, 77500 Cancún, MX
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d465.17991305059337!2d-86.74602892326793!3d21.134908688202877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCanc%C3%BAn%20Centro%20%2F%20Zona%20Hotelera%2C%2077500%20Canc%C3%BAn%2C%20MX!5e0!3m2!1sen!2smx!4v1752882167486!5m2!1sen!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* Pick up point 2 */}
              <div>
                <p className="text-base font-medium">Puerto Morelos</p>
                <p className="text-neutral-500">
                  Quintana Roo Puerto Morelos - Leona Vicario, 77580 Puerto
                  Morelos, MX
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6270.762147046766!2d-86.90783748594619!3d20.847147551505923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e635650901379%3A0x58c7cd0f5c63e898!2sMonumento%20Ruta%20de%20los%20Cenotes!5e0!3m2!1sen!2smx!4v1752881904420!5m2!1sen!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* Pick up point 3 */}
              <div>
                <p className="text-base font-medium">Playa del Carmen</p>
                <p className="text-neutral-500">
                  Playa del Carmen, 77539 Cancún, MX
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.379872916946!2d-86.91908912402829!3d21.13727558404121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4dd4c437274e2d%3A0xc101a1ea8332be82!2sCarabanchel%2C%2077539%20Canc%C3%BAn%2C%20Q.R.!5e0!3m2!1sen!2smx!4v1752882368755!5m2!1sen!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
