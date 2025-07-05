'use client';

import { useTranslation } from 'react-i18next';
import LanguageButton from '../buttons/LanguageButton';
import WhatsappButton from '../buttons/WhatsappButton';
import Link from 'next/link';
import HeaderMenu from '../dropdown/HeaderMenu';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const linkClass = (path) =>
    `relative md:text-2xl text-base font-medium text-white px-4 py-2 ${
      pathname === path || pathname.startsWith(`${path}/`)
        ? 'before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white'
        : ''
    }`;

  return (
    <header className="grid w-full grid-cols-[auto_1fr_auto] items-center border-b border-blue-100 bg-[#15445e] p-2 px-4 pb-4 md:grid-cols-[1fr_auto_1fr] md:px-10 md:py-5">
      <Link
        href="/"
        className="mr-auto max-w-[48px] cursor-pointer rounded-full md:block"
      >
        <Image
          className="rounded-full object-contain"
          src="/assets/logo.png"
          alt="Sacbe Logo Icon"
          width={48}
          height={48}
        />
      </Link>

      {/* Links Container */}
      <div
        className={`${
          isMobile
            ? 'absolute top-17 left-0 z-50 flex w-full justify-center bg-[#15445e] transition-all duration-300'
            : 'mx-auto flex max-w-[800px] justify-center md:gap-10'
        } ${
          isMobile &&
          (menuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden')
        }`}
      >
        <div
          className={`${isMobile ? 'flex flex-col items-center gap-4' : 'flex'}`}
        >
          <Link
            href="/"
            className={linkClass('/')}
            onClick={() => isMobile && setMenuOpen(false)}
          >
            {t('menu.home')}
          </Link>
          <HeaderMenu
            className={linkClass('/tours')}
            closeMobileMenu={() => isMobile && setMenuOpen(false)}
          />
          <Link
            href="/contact"
            className={linkClass('/contact')}
            onClick={() => isMobile && setMenuOpen(false)}
          >
            {t('menu.contact')}
          </Link>
        </div>
      </div>

      <div className="flex w-fit items-center gap-4 justify-self-end">
        <WhatsappButton />
        <LanguageButton />
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            className="w-fit cursor-pointer rounded border border-white p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image
              src="/assets/menu.svg"
              alt="Menu Icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </button>
        )}
      </div>
    </header>
  );
}
