'use client';

import React, { useEffect, useRef } from 'react';

function TourWidgetContainer() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const scriptId = 'bokun-widget-loader';

    const loadBokunScript = () => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(scriptId)) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src =
          'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=613a4d6d-a284-4b72-9bf4-4376927bb45f';
        script.async = true;
        script.id = scriptId;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initializeWidget = () => {
      if (window.BokunWidgets && window.BokunWidgets.init) {
        window.BokunWidgets.init();
      }
    };

    loadBokunScript()
      .then(() => {
        const interval = setInterval(() => {
          if (window.BokunWidgets && window.BokunWidgets.init) {
            initializeWidget();
            clearInterval(interval);
          }
        }, 300);
      })
      .catch((error) => {
        console.error('Error loading Bokun script:', error);
      });
  }, []);

  return (
    <div className="mx-auto w-full px-4 pt-8">
      <div
        ref={widgetRef}
        className="bokunWidget"
        data-src="https://widgets.bokun.io/online-sales/613a4d6d-a284-4b72-9bf4-4376927bb45f/experience/1048914"
      ></div>
    </div>
  );
}

export default TourWidgetContainer;
