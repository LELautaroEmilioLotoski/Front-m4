
import Link from "next/link";

const Inicio = () => {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-gray-950">
    <div className="tracking-wide p-10">
      <h1 className="flex justify-center text-4xl sm:text-6xl font-semibold">
        Descubre el Nuevo iPhone 16 Pro
      </h1>
      <p className="flex justify-center pt-5 text-gray-300">
        Experimenta el futuro de la tecnología móvil con el diseño más avanzado y potente hasta la fecha.
      </p>
      <div className="flex justify-start md:justify-center pt-5">
        <Link className="btn btn-outline btn-primary" href="Products">Ver Productos</Link>
      </div>
    </div>
  </section>
  
  );
};

export default Inicio;
