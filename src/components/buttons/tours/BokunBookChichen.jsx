// BokunBookChichen.jsx
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function BokunBookChichen() {
  const { i18n } = useTranslation();
  const label = i18n.language.startsWith('es') ? 'Reservar ahora' : 'Book now';

  useEffect(() => {
    if (!document.querySelector('script[src*="BokunWidgetsLoader.js"]')) {
      const script = document.createElement('script');
      script.src =
        'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=134bd5aa-4e3e-4dae-a4d0-4bb2d507381f';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <style>{`
        #bokun_51fb9d28_50d6_4361_98e4_9646278af933 {
          display: inline-block;
          padding: 10px 20px;
          background: #009db0;
          border-radius: 5px;
          box-shadow: none;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          text-align: center;
          color: #FFFFFF;
          border: none;
          cursor: pointer;
          transition: background .2s ease;
        }
        #bokun_51fb9d28_50d6_4361_98e4_9646278af933:hover {
          background: #005963;
        }
        #bokun_51fb9d28_50d6_4361_98e4_9646278af933:active {
          background: #00707d;
        }
      `}</style>

      <button
        className="bokunButton"
        disabled
        id="bokun_51fb9d28_50d6_4361_98e4_9646278af933"
        data-src="https://widgets.bokun.io/online-sales/134bd5aa-4e3e-4dae-a4d0-4bb2d507381f/experience-calendar/1057173?partialView=1"
        data-testid="widget-book-button"
      >
        {label}
      </button>
    </>
  );
}

export default BokunBookChichen;
