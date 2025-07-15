'use client';

import ToursBanner from '@/components/banner/ToursBanner';
import FAQContainer from '@/components/containers/FAQContainer';
import TourWidgetContainer from '@/components/containers/TourWidgetContainer';
import ToursPricing from '@/components/features/ToursPricing';
import ToursBreadcrumb from '@/components/nav/ToursBreadCromb';

function TourChichen() {
  return (
    <div className="w-full">
      <ToursBanner />
      <ToursBreadcrumb />
      <ToursPricing />
      <TourWidgetContainer />
      <FAQContainer />
    </div>
  );
}

export default TourChichen;
