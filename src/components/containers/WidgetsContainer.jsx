'use client';

import { useTranslation } from 'react-i18next';
import TourCard from '../cards/TourCard';

function WidgetsContainer() {
  const { t } = useTranslation();

  return (
    <div className="flex h-fit w-full max-w-[1280px] flex-col items-center justify-center gap-6 px-0 py-10 md:gap-12 md:px-5">
      <h2 className="text-center text-4xl font-bold md:text-[50px]">
        {t('general.widgetContainer.title')}
      </h2>

      <div className="w-full overflow-x-auto">
        <div className="flex w-max gap-4 p-4">
          <TourCard />
        </div>
      </div>
    </div>
  );
}

export default WidgetsContainer;
