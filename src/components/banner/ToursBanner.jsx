'use client';

import { usePathname } from 'next/navigation';
import ToursVideoCard from '../cards/ToursVideoCard';
import { useTranslation } from 'react-i18next';
import { useProjectContext } from '@/context/ProjectContext';
import BokunBookTulum from '../buttons/tours/BokunBookTulum';
import BokunBookChichen from '../buttons/tours/BokunBookChichen';

function ToursBanner() {
  const pathname = usePathname();
  const { i18n, t } = useTranslation();

  let region = '';

  if (pathname.includes('tulum')) {
    region = 'tulum';
  } else if (pathname.includes('chichen-itza')) {
    region = 'chichen';
  } else if (pathname.includes('cancun')) {
    region = 'cancun';
  }

  const translationKey = `tours.${region}.banner.title`;

  return (
    <div className="grid items-center justify-center gap-10 bg-[var(--color-sacbe)] p-4 text-white md:grid-cols-[auto_auto] md:px-10 md:py-4">
      <div className="mx-auto w-full max-w-3xl">
        <div className="w-full text-center md:p-6">
          <h1 className="mb-4 text-5xl md:text-4xl md:font-bold">
            {pathname.includes('tulum')
              ? t('tours.tulum.banner.title')
              : pathname.includes('chichen-itza')
                ? t('tours.chichen.banner.title')
                : pathname.includes('cancun')
                  ? t('tours.cancun.banner.title')
                  : ''}
          </h1>
          <p className="mb-4 text-base md:text-lg">
            {t('tours.tulum.banner.paragraph')}{' '}
            <span className="relative inline-block rounded bg-[#2fb4e9] px-2 py-0.5 text-white">
              <span className="animate-ping-sacbe absolute top-0 left-0 inline-flex h-full w-full rounded opacity-90"></span>
              {pathname.includes('tulum')
                ? t('tours.tulum.banner.limited')
                : pathname.includes('chichen-itza')
                  ? t('tours.chichen.banner.limited')
                  : pathname.includes('cancun')
                    ? t('tours.cancun.banner.limited')
                    : ''}
            </span>
          </p>
          <div className="mt-5 mb-5 md:hidden">
            <ToursVideoCard />
          </div>
          <p className="mb-6 text-3xl font-bold text-[#ffcc00] md:text-4xl">
            {t('general.tourBanner.adult')} $2,641.<sup>00</sup> MXN
          </p>
          <div className="flex justify-center">
            {/* <button
              onClick={() =>
                document
                  .getElementById('pricing')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className="bokunButton cursor-pointer rounded-full bg-[#009db0] px-6 py-3 font-semibold text-white transition hover:bg-[#007a8a]"
            >
              {t('general.tourBanner.bookButton')}
            </button> */}
            {pathname.includes('chichen-itza') && <BokunBookChichen />}
            {pathname.includes('tulum') && <BokunBookTulum />}
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <ToursVideoCard />
      </div>
    </div>
  );
}

export default ToursBanner;
