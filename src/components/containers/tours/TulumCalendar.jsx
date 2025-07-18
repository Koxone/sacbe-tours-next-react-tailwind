'use client';
import React, { useEffect } from 'react';

export default function TulumCalendar() {
  useEffect(() => {
    const scriptId = 'bokun-widgets-loader';
    const widgetSrc =
      'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=134bd5aa-4e3e-4dae-a4d0-4bb2d507381f';

    // Solo agrega el script si no existe ya
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = widgetSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl p-4">
      <div
        className="bokunWidget"
        data-src="https://widgets.bokun.io/online-sales/134bd5aa-4e3e-4dae-a4d0-4bb2d507381f/experience-calendar/1048914"
      />
    </div>
  );
}
