import { ClockIcon } from '@/components/icons/Icons';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Tulum from './descriptions/Tulum';
import Chichen from './descriptions/Chichen';

export default function TourDescription() {
  const [activeTab, setActiveTab] = useState('description');
  const tabs = ['description', 'itinerary', 'point'];
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full space-y-8">
      <div className="space-y-8">
        {/* Título y reservar */}
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col gap-2 whitespace-nowrap">
            <h2 className="text-2xl font-bold">
              {pathname.includes('tulum') &&
                t('tours.tulum.widgetContainer.header.title')}
              {pathname.includes('chichen-itza') &&
                t('tours.chichen.widgetContainer.header.title')}
            </h2>
            <div className="flex items-center gap-2">
              <ClockIcon />
              <p className="text-muted text-sm">
                {pathname.includes('tulum') &&
                  t('tours.tulum.widgetContainer.header.time')}
                {pathname.includes('chichen-itza') &&
                  t('tours.chichen.widgetContainer.header.time')}
                {pathname.includes('tulum') &&
                  t('tours.tulum.widgetContainer.header.utils')}
                {pathname.includes('chichen-itza') &&
                  t('tours.chichen.widgetContainer.header.utils')}
              </p>
            </div>
          </div>
          <p className="text-gray-700">
            {pathname.includes('tulum') &&
              t('tours.tulum.widgetContainer.header.description')}
            {pathname.includes('chichen-itza') &&
              t('tours.chichen.widgetContainer.header.description')}
          </p>
        </div>

        {/* Tabs */}
        <ul
          role="tablist"
          className="flex justify-evenly border-b border-gray-200 lg:text-lg"
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
              className={`cursor-pointer border-b-2 px-4 py-2 font-medium whitespace-nowrap transition-colors ${
                activeTab === tabKey
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              {pathname.includes('tulum') &&
                t(`tours.tulum.widgetContainer.tabs.${tabKey}`)}
              {pathname.includes('chichen-itza') &&
                t(`tours.chichen.widgetContainer.tabs.${tabKey}`)}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div role="tabpanel" className="mt-6 space-y-4">
        {/* Description */}
        {activeTab === 'description' && (
          <>
            {pathname.includes('tulum') && <Tulum />}
            {pathname.includes('chichen-itza') && <Chichen />}
          </>
        )}

        {/* Itinerary */}
        {activeTab === 'itinerary' && (
          <div>
            <h3 className="text-xl font-semibold">Itinerario</h3>
            <div className="text-font-p mt-4 space-y-4 text-sm">
              <div className="space-y-2">
                <h4 className="text-font-heading my-0 !font-semibold">
                  {pathname.includes('tulum') &&
                    t('tours.tulum.widgetContainer.titles.one')}
                  {pathname.includes('chichen-itza') &&
                    t('tours.chichen.widgetContainer.titles.one')}
                </h4>
                <p className="leading-relaxed text-[#57646f]">
                  {pathname.includes('tulum') &&
                    t('tours.tulum.widgetContainer.itinerary.pickup')}
                  {pathname.includes('chichen-itza') &&
                    t('tours.chichen.widgetContainer.itinerary.pickup')}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-font-heading my-0 !font-semibold">
                  {pathname.includes('tulum') &&
                    t('tours.tulum.widgetContainer.titles.two')}
                  {pathname.includes('chichen-itza') &&
                    t('tours.chichen.widgetContainer.titles.two')}
                </h4>
                <p className="leading-relaxed text-[#57646f]">
                  {pathname.includes('tulum') &&
                    t('tours.tulum.widgetContainer.itinerary.zone')}
                  {pathname.includes('chichen-itza') &&
                    t('tours.chichen.widgetContainer.itinerary.zone')}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-font-heading my-0 !font-semibold">
                  {pathname.includes('tulum') &&
                    t('tours.tulum.widgetContainer.titles.three')}
                  {pathname.includes('chichen-itza') &&
                    t('tours.chichen.widgetContainer.titles.three')}
                </h4>
                <p className="leading-relaxed text-[#57646f]">
                  {pathname.includes('tulum') &&
                    t('tours.tulum.widgetContainer.itinerary.cenote')}
                  {pathname.includes('chichen-itza') &&
                    t('tours.chichen.widgetContainer.itinerary.cenote')}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-font-heading my-0 !font-semibold">
                  {pathname.includes('tulum') &&
                    t('tours.tulum.widgetContainer.titles.four')}
                  {pathname.includes('chichen-itza') &&
                    t('tours.chichen.widgetContainer.titles.four')}
                </h4>
                <p className="leading-relaxed text-[#57646f]">
                  {pathname.includes('tulum') &&
                    t('tours.tulum.widgetContainer.itinerary.return')}
                  {pathname.includes('chichen-itza') &&
                    t('tours.chichen.widgetContainer.itinerary.return')}
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
