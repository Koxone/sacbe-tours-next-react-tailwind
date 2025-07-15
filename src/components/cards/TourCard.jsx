'use client';

import { useEffect, useRef } from 'react';

function TourCard() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const initializeWidget = () => {
      if (window.BokunWidgets && window.BokunWidgets.reload) {
        window.BokunWidgets.reload();
      }
    };

    if (!document.getElementById('bokun-widget-loader')) {
      const script = document.createElement('script');
      script.src =
        'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=134bd5aa-4e3e-4dae-a4d0-4bb2d507381f';
      script.async = true;
      script.id = 'bokun-widget-loader';
      script.onload = initializeWidget;
      document.body.appendChild(script);
    } else {
      initializeWidget();
    }

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="border flex flex-row w-full max-w-5xl min-w-[200px] overflow-hidden">
      <div
        ref={widgetRef}
        className="bokunWidget w-full max-w-[500px]"
        data-src="https://widgets.bokun.io/online-sales/134bd5aa-4e3e-4dae-a4d0-4bb2d507381f/product-list/92929"
      />
    </div>
  );
}

export default TourCard;
