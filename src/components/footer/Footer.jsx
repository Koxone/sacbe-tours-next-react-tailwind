'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-neutral-900 px-10 py-10 text-neutral-200">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Top */}
        <div className="flex items-center justify-between gap-4 sm:flex-row">
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/assets/sacbe.svg"
                alt="Sacbé Transfers"
                title="Sacbé Transfers"
                width={130}
                height={50}
                className="h-auto w-[130px] cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/sacbetransfers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-9"
                width={36}
                height={36}
                src="/assets/facebook.svg"
                alt="Facebook Icon"
              />
            </a>
            <a
              href="https://www.instagram.com/sacbetransfers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-10"
                width={40}
                height={40}
                src="/assets/instagram.svg"
                alt="Instagram Icon"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-700 pt-6 sm:flex-row">
          <p className="text-sm">{t('footer.copyright')}</p>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/visa.svg"
                alt="Visa"
                title="Visa"
                width={30}
                height={30}
              />
              <Image
                src="/mastercard.svg"
                alt="Mastercard"
                title="Mastercard"
                width={30}
                height={30}
              />
              <Image
                src="/amex.svg"
                alt="AMEX"
                title="AMEX"
                width={30}
                height={30}
              />
            </div>
            <Image
              src="/paypal.svg"
              alt="PayPal"
              title="PayPal"
              width={60}
              height={27}
            />
            <Image
              src="/stripe.svg"
              alt="Stripe"
              title="Stripe"
              width={100}
              height={48}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
