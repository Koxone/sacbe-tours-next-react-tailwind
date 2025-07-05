import ToursVideoCard from "../cards/ToursVideoCard";

function ToursBanner() {
  return (
    <div className="grid items-center justify-center gap-10 bg-[var(--color-sacbe)] p-4 text-white md:grid-cols-[auto_auto] md:px-10 md:py-4">
      <div className="mx-auto w-full max-w-3xl">
        <div className="w-full text-center md:p-6">
          <h1 className="mb-4 text-5xl md:text-4xl md:font-bold">
            Cancun Experiencia de Naturaleza
          </h1>
          <p className="mb-4 text-base md:text-lg">
            Sea uno de los pocos afortunados que vivió esta experiencia única,
            sólo algunos conocen este lugar ya que el acceso está{" "}
            <span className="relative inline-block rounded bg-[#2fb4e9] px-2 py-0.5 text-white">
              <span className="animate-ping-sacbe absolute top-0 left-0 inline-flex h-full w-full rounded opacity-90"></span>
              limitado a 200 personas por día.
            </span>
          </p>
          <div className="mt-5 mb-5 md:hidden">
            <ToursVideoCard />
          </div>
          <p className="mb-6 text-3xl font-bold text-[#ffcc00] md:text-4xl">
            Adulto $2,641.<sup>00</sup> Mxn
          </p>
          <div className="flex justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("pricing")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bokunButton cursor-pointer rounded-full bg-[#009db0] px-6 py-3 font-semibold text-white transition hover:bg-[#007a8a]"
            >
              RESERVA YA
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <ToursVideoCard />
      </div>
    </div>
  );
}

export default ToursBanner;
