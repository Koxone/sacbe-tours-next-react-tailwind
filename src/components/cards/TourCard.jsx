'use client';

import tourCards from '@/data/tourCards';

function TourCard({ tour }) {
  const data = tourCards[tour];

  return (
    <div className="group flex shrink-0 w-full max-w-[250px] cursor-pointer flex-col overflow-hidden rounded-lg border border-neutral-500/50 bg-white shadow-sm">
      {/* Imagen con aspect ratio fijo */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={data?.url || '/fallback.jpg'}
          alt="Tour"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col justify-between gap-4 p-4 text-black">
        {/* Título */}
        <div>
          <h2 className="line-clamp-2 text-sm leading-snug font-bold tracking-wide">
            {data?.title || 'Destino no encontrado'}
          </h2>
          <p className="text-xs text-neutral-600">By Sacbe Transfers</p>
        </div>

        {/* Descripción */}
        <p className="line-clamp-3 text-sm text-neutral-700">
          {data?.paragraph || 'Descripción no disponible'}
        </p>

        {/* Info final */}
        <div className="mt-auto flex items-end justify-between gap-1 text-xs text-neutral-800">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M 12 2 C 6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM11 6h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            {data?.duration || '—'}
          </div>
          <p className="text-right text-base font-semibold whitespace-nowrap">
            <span className="text-xs text-neutral-500">From </span>
            {data?.price || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
