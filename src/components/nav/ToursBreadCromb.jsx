'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function ToursBreadcrumb() {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <nav className="flex gap-1 bg-neutral-100 p-4 text-sm text-gray-400">
      <Link href="/" className="text-blue-500 hover:underline">
        Inicio
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;
        const formattedName = name
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <span key={routeTo} className="flex items-center gap-1">
            <span>/</span>
            {isLast ? (
              <span className="text-black">{formattedName}</span>
            ) : (
              <Link href={routeTo} className="text-blue-500 hover:underline">
                {formattedName}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default ToursBreadcrumb;
