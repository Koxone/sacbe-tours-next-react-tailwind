// BokunBookTulum.jsx
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function BokunBookTulum() {
  const { i18n, t } = useTranslation();

  const lang = i18n.language;

  const buttonId = lang.startsWith('es')
    ? 'bokun_14b2f4fa_4501_48d1_a14f_ca7efa810688'
    : 'bokun_0b7b0fcb_c4c8_4375_9a2e_72e01cce02c0';

  const label = lang.startsWith('es') ? 'Reservar ahora' : 'Book now';

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
        #${buttonId} {
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
          transition: background 0.2s ease;
        }
        #${buttonId}:hover {
          background: #005963;
        }
        #${buttonId}:active {
          background: #00707d;
        }
      `}</style>

      <button
        className="bokunButton"
        disabled
        id={buttonId}
        data-src="https://widgets.bokun.io/online-sales/134bd5aa-4e3e-4dae-a4d0-4bb2d507381f/experience-calendar/1048914?partialView=1"
        data-testid="widget-book-button"
      >
        {label}
      </button>
    </>
  );
}

export default BokunBookTulum;
