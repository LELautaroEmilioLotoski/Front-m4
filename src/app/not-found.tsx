// src/app/404.tsx
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "50px" }}
      className="bg-stone-700 p-8"
    >
      <h1>404 - Página no Encontrada! 😕</h1>
      <p>Lo siento, la página que quieres acceder es Incorrecta o no existe.</p>
      <div className="pt-4">
        <Link href="/" className="btn-outline btn btn-active">
          Ir al Home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
