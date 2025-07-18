'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function HeaderMenu({ className, closeMobileMenu }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigate = (path) => {
    router.push(path);
    setIsOpen(false);
    closeMobileMenu && closeMobileMenu();
  };

  return (
    <div
      className={`relative inline-block cursor-pointer text-left select-none ${className} ${
        isMobile ? '' : 'group'
      }`}
    >
      <button
        className="cursor-pointer rounded text-white focus:outline-none"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        Tours
      </button>
      <ul
        className={`absolute left-1/2 z-50 w-fit translate-x-[-50%] scale-95 divide-y divide-gray-100 rounded bg-white opacity-0 shadow-lg transition-all duration-300 ease-out ${
          isMobile
            ? isOpen
              ? 'pointer-events-auto scale-100 opacity-100'
              : 'pointer-events-none scale-95 opacity-0'
            : 'pointer-events-none group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100'
        }`}
      >
        <li
          className="cursor-pointer rounded px-4 py-2 text-base whitespace-nowrap text-black hover:bg-gray-400"
          onClick={() => handleNavigate('/tours/tulum')}
        >
          Tulum
        </li>
        <li
          className="cursor-pointer rounded px-4 py-2 text-base whitespace-nowrap text-black hover:bg-gray-400"
          onClick={() => handleNavigate('/tours/chichen-itza')}
        >
          Chichen Itza
        </li>
      </ul>
    </div>
  );
}
