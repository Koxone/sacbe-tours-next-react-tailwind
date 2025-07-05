'use client';

export default function ContactContainer() {
  return (
    <div className="grid grid-cols-1 gap-8 bg-white p-6 text-gray-800 md:grid-cols-2 md:p-12">
      {/* Left */}
      <div className="flex flex-col items-start justify-center space-y-4 rounded-lg px-10 py-4 shadow">
        <h2 className="text-3xl font-bold text-[var(--color-sacbe)]">
          Contact Us
        </h2>
        <button
          onClick={() => {
            if (typeof window !== 'undefined' && window.Tawk_API) {
              window.Tawk_API.toggle();
            }
          }}
          className="cursor-pointer rounded bg-[var(--color-sacbe)] px-6 py-2 text-white transition hover:bg-[#0f3345]"
          title="Take me to the help center"
        >
          Take me to the help center
        </button>
        <div className="space-y-1 text-sm md:text-base">
          <p className="font-semibold">Headquarters</p>
          <p>Cancún, Quintana Roo</p>
          <p>Cancun - Chetumal Terminal 3, CUN, 77565 Cancun, Q.R.</p>
          <p className="pt-2 font-semibold">Do you have any doubts?</p>
          <p>
            <a
              href="tel:+529989800436"
              className="text-blue-600 hover:underline"
            >
              +52 (998) 980 0436
            </a>
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-between space-y-4 rounded-lg bg-gray-50 px-10 py-4 shadow">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-[var(--color-sacbe)]">
            Get support from our team
          </h2>
          <div className="space-y-2">
            <h6 className="text-lg font-semibold">Chat with us</h6>
            <p>We’ll reply to you in a few minutes.</p>
            <p>We are in touch 24/7</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && window.Tawk_API) {
                window.Tawk_API.toggle();
              }
            }}
            className="w-full cursor-pointer rounded bg-[var(--color-sacbe)] px-6 py-2 text-white transition hover:bg-[#0f3345]"
          >
            Live chat
          </button>
        </div>
        <div className="space-y-2">
          <h6 className="text-lg font-semibold">Do you have any questions?</h6>
          <p>Send an email to customer service.</p>
          <p>We’ll reply to you in 24 hours.</p>
          <a
            href="mailto:bookings@sacbetransfers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-blue-600 hover:underline"
          >
            bookings@sacbetransfers.com
          </a>
        </div>
      </div>
    </div>
  );
}
