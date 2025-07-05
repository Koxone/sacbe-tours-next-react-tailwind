'use client';

import React, { useEffect, useRef } from "react";

function TourWidgetContainer() {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById("bokun-widget-loader")) {
      const script = document.createElement("script");
      script.src =
        "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=613a4d6d-a284-4b72-9bf4-4376927bb45f";
      script.async = true;
      script.id = "bokun-widget-loader";
      document.body.appendChild(script);
    } else {
      if (window.BokunWidgets && window.BokunWidgets.reload) {
        window.BokunWidgets.reload();
      }
    }
  }, []);

  return (
    <div className="mx-auto w-full  px-4 pt-8">
      <div
        ref={widgetRef}
        className="bokunWidget"
        data-src="https://widgets.bokun.io/online-sales/613a4d6d-a284-4b72-9bf4-4376927bb45f/experience/1048914"
      ></div>
    </div>
  );
}

export default TourWidgetContainer;
