import React from 'react';

function Chichen() {
  return (
    <div className="flex flex-col gap-7">
      {/* Descripción */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-base text-neutral-700">
            ¡Vive una experiencia inolvidable explorando una de las maravillas
            del mundo moderno! Este tour privado te lleva a descubrir la
            imponente zona arqueológica de <strong>Chichén Itzá</strong>,
            acompañado de un recorrido refrescante por un{' '}
            <strong>cenote sagrado</strong> y, si lo deseas, una visita al
            encantador Pueblo Mágico de <strong>Valladolid</strong>.
          </p>
          <p className="text-base text-neutral-700">
            Ideal para familias, parejas o grupos de amigos que desean explorar
            lo mejor de Chichén Itzá y sus alrededores a su ritmo y con total
            comodidad.
          </p>
          <p className="text-base text-neutral-700">
            Reserva con anticipación y prepárate para un día lleno de historia,
            cultura y naturaleza.
          </p>
        </div>
      </div>

      {/* Incluye */}
      <div className="flex flex-col gap-4">
        <h3 className="relative mb-2 text-xl font-semibold">
          ¿Qué está incluido en el precio?
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
        </h3>
        <ul className="ml-4 list-inside list-disc text-gray-700">
          <li>Suplemento por combustible</li>
          <li>🚐 Transporte privado en vehículo con aire acondicionado</li>
          <li>👨‍✈️ Chofer disponible de 10 a 12 hrs</li>
          <li>📍 Pick up en hotel o Airbnb</li>
          <li>🗿 Visita a sitio arqueológico de Chichén Itzá</li>
          <li>🌀 Visita a cenote</li>
          <li>⛪ Visita opcional al Pueblo Mágico de Valladolid</li>
        </ul>
      </div>

      {/* Exclusiones */}
      <div className="flex flex-col gap-4">
        <h3 className="relative mb-2 text-xl font-semibold">
          Exclusiones
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
        </h3>
        <ul className="ml-4 list-inside list-disc text-gray-700">
          <li>Propina o agradecimiento</li>
          <li>Tarifas de estacionamiento</li>
          <li>Comida y bebida</li>
          <li>Entrada</li>
          <li>Estacionamientos ni casetas (autopista)</li>
          <li>Entrada a sitio arqueológico ni a cenote</li>
          <li>Propinas no incluidas</li>
        </ul>
      </div>

      {/* Qué llevar */}
      <div className="flex flex-col gap-4">
        <h3 className="relative mb-2 text-xl font-semibold">
          ¿Qué necesito llevar?
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
        </h3>
        <ul className="ml-4 list-inside list-disc text-gray-700">
          <li>
            <span className="font-semibold">Ropa cómoda y ligera</span> (shorts,
            playera de manga corta, vestido fresco)
          </li>
          <li>
            <span className="font-semibold">Tenis o sandalias cómodas</span>{' '}
            para caminar en la zona arqueológica
          </li>
          <li>
            <span className="font-semibold">Traje de baño</span> para nadar en
            el cenote
          </li>
          <li>
            <span className="font-semibold">Toalla y muda de ropa extra</span>{' '}
            (especialmente si planeas nadar)
          </li>
          <li>
            <span className="font-semibold">Protector solar biodegradable</span>{' '}
            (importante para cuidar los cenotes)
          </li>
          <li>
            <span className="font-semibold">
              Gorra o sombrero y lentes de sol
            </span>
          </li>
          <li>
            <span className="font-semibold">
              Repelente de insectos biodegradable
            </span>
          </li>
          <li>
            <span className="font-semibold">Agua embotellada</span> para
            mantenerte hidratado
          </li>
          <li>
            <span className="font-semibold">Efectivo</span> para entradas,
            propinas, souvenirs, etc.
          </li>
        </ul>
      </div>

      {/* Cancelación */}
      <div className="flex flex-col gap-4">
        <h3 className="relative mb-2 text-xl font-semibold">
          Política de cancelación
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
        </h3>
        <ul className="ml-4 list-inside list-disc text-gray-700">
          <li>
            Cobraremos una tasa de cancelación del 100% si cancelas la reserva 1
            Día o antes, del comienzo del evento
          </li>
          <li>
            Cobraremos una tasa de cancelación del 0% si cancelas la reserva
            1000 Días o antes, del comienzo del evento
          </li>
        </ul>
      </div>

      {/* Más info */}
      <div className="grid grid-cols-1 gap-6 text-sm text-gray-700 sm:grid-cols-1">
        <h3 className="relative mb-2 text-xl font-semibold">
          Más información
          <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
        </h3>
        <div className="flex flex-col gap-3">
          {/* Tipo de experiencia */}
          <div>
            <h4 className="font-semibold">Tipo de experiencia</h4>
            <div className="flex flex-wrap items-center gap-2">
              <span>Tour / Actividad</span>
              <span className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                Privado
              </span>
            </div>
          </div>

          {/* Reservar con antelación */}
          <div>
            <h4 className="font-semibold">Reservar con antelación</h4>
            <p>Hora de cierre de reserva: 1 día</p>
          </div>

          {/* Duración */}
          <div>
            <h4 className="font-semibold">Duración</h4>
            <p>10 horas</p>
          </div>

          {/* Dificultad */}
          <div>
            <h4 className="font-semibold">Dificultad</h4>
            <p>Fácil</p>
          </div>

          {/* Categorías */}
          <div className="sm:col-span-2">
            <h4 className="font-semibold">Categorías</h4>
            <div className="flex flex-wrap gap-2">
              <span className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                Day trips and excursions
              </span>
              <span className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                Bus / minivan tour
              </span>
              <span className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                Family friendly
              </span>
              <span className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                Group friendly
              </span>
              <span className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                Private experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chichen;
