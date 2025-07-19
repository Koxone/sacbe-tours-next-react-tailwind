import React from 'react';

function Tulum() {
  return (
    <div className="flex flex-col gap-7">
      {/* Description */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-base text-neutral-700">
            Descubre la magia del Caribe mexicano con este tour privado a Tulum,
            una antigua ciudad maya construida frente al mar. Disfruta de un día
            lleno de historia, paisajes impresionantes y aguas cristalinas, con
            la opción de visitar un cenote o pasar el día en la playa.
          </p>
          <p>
            Incluye <strong>visita al sitio arqueológico de Tulum</strong> y{' '}
            <strong>visita a un cenote</strong> para vivir una experiencia
            única.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Podemos llevarte a uno de los siguientes cenotes, tú decides cuál:
          </p>
          <ul className="ml-4 list-inside list-disc text-gray-700">
            <li>Cenote Casa Tortuga</li>
            <li>Cenote Cristalino</li>
            <li>Cenote Dos Ojos</li>
            <li>Gran Cenote</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2">
        {/* Included */}
        <div className="flex flex-col gap-4">
          <h3 className="relative mb-2 text-xl font-semibold">
            ¿Qué está incluido en el precio?
            <span className="absolute -bottom-4 left-0 h-2 w-[50px] rounded border border-blue-500 bg-[#297da9]"></span>
          </h3>
          <ul className="ml-4 list-inside list-disc text-gray-700">
            <li>Suplemento por combustible</li>
            <li>🚐 Transporte privado en vehículo con aire acondicionado</li>
            <li>👨‍✈️ Chofer disponible de 6 a 8 hrs</li>
            <li>📍 Pick up en hotel o Airbnb</li>
            <li>🗿 Visita a sitio arqueológico de Tulum</li>
            <li>🌀 Visita a cenote</li>
          </ul>
        </div>

        {/* Not Included */}
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
            <li>Estacionamientos ni casetas</li>
            <li>Entrada a Tulum o cenote</li>
          </ul>
        </div>
      </div>

      {/* What to Bring */}
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
            el cenote o la playa
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
            <span className="font-semibold">Agua reutilizable</span> para
            mantenerte hidratado
          </li>
          <li>
            <span className="font-semibold">Efectivo</span> para entradas,
            propinas o souvenirs
          </li>
          <li>
            <span className="font-semibold">Bolsa impermeable o mochila</span>{' '}
            para guardar tus cosas y mantenerlas secas
          </li>
        </ul>
      </div>

      {/* Cancelation Politics */}
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
            <p>6 horas</p>
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
                Minivan Tour
              </span>
              <span className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                Family Friendly
              </span>
              <span className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                Group Friendly
              </span>
              <span className="rounded border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                Private Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tulum;
