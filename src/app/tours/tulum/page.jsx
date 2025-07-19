// Tulum Tour

'use client';

import ToursBanner from '@/components/banner/ToursBanner';
import FAQContainer from '@/components/containers/FAQContainer';
import TourWidgetContainer from '@/components/containers/TourWidgetContainer';
import ToursPricing from '@/components/features/ToursPricing';
import ToursBreadcrumb from '@/components/nav/ToursBreadCromb';

function TourTulum() {
  return (
    <div className="w-screen overflow-x-hidden">
      <ToursBanner />
      <ToursBreadcrumb />
      <ToursPricing />
      <TourWidgetContainer />
      <FAQContainer />
    </div>
  );
}

export default TourTulum;
