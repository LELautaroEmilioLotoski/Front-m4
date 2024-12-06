"use client";
import React, { useContext } from "react";
import IProductDetail from "@/interfaces/IProductDetail";
import { useRouter } from "next/navigation";
import { cartContext } from "@/context/cartContext";
import Swal from "sweetalert2";

const DetalleDeProducto: React.FC<IProductDetail> = (product) => {
  const router = useRouter();
  const token = localStorage.getItem("userToken");
  const { cart, setCart } = useContext(cartContext);
  const inCart = cart.some((p) => p.id === product.id);

  const handleBuy = () => {
    if (token && inCart === false) {
      Swal.fire({
        title: 'Producto Agregado con Éxito!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      setCart([...cart, product]);
    } else if (inCart === true) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No Puedes Agregar al Carrito el mismo Producto mas de una vez!"
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tienes que Loguearte para poder agregar Productos al Carrito!"
      });
      router.push("/Login");
    }
  };

  return (
    <div className="overflow-x-hidden mt-5">
      <div className="lg:flex justify-center gap-10 items-center w-full">
        <img width={400} src={product.image} height={200}></img>
        <div className="card bg-zinc-700 w-full lg:w-96 shadow-xl">
          <div className="w-full card-body">
            <div className="flex">
              <p className="sm:text-sm text-lime-600">Envío gratis</p>
              <div className="badge badge-primary">lanzamiento</div>
            </div>
            <h2 className="text-[50px] lg:text-[55px]">{product.name}</h2>
            <span className="text-[35px] font-bold">${product.price}</span>
            <span className="text-[12px] font-bold">Stock Disponible</span>
            <p className="">Cantidad: {product.stock}</p>
            <div className="lg:flex justify-between lg:gap-3 mt-5 mb-5">
              <button onClick={handleBuy} className="w-full xl:w-full lg:w-1/2 mb-3 btn btn-active btn-neutral">
                Agregar al Carrito
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p>Devolución Gratis por 30 Días</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <svg
                fill="#A6ADBB"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.87,17.25l-2.71-4.68A6.9,6.9,0,0,0,19,9.25a7,7,0,0,0-14,0,6.9,6.9,0,0,0,.84,3.32L3.13,17.25A1,1,0,0,0,4,18.75l2.87,0,1.46,2.46a1,1,0,0,0,.18.22,1,1,0,0,0,.69.28h.14a1,1,0,0,0,.73-.49L12,17.9l1.93,3.35a1,1,0,0,0,.73.48h.14a1,1,0,0,0,.7-.28.87.87,0,0,0,.17-.21l1.46-2.46,2.87,0a1,1,0,0,0,.87-.5A1,1,0,0,0,20.87,17.25ZM9.19,18.78,8.3,17.29a1,1,0,0,0-.85-.49l-1.73,0,1.43-2.48a7,7,0,0,0,3.57,1.84ZM12,14.25a5,5,0,1,1,5-5A5,5,0,0,1,12,14.25Zm4.55,2.55a1,1,0,0,0-.85.49l-.89,1.49-1.52-2.65a7.06,7.06,0,0,0,3.56-1.84l1.43,2.48Z"></path>
                </g>
              </svg>
              <p>1 año de garantía de fábrica.</p>
            </div>
            <div className="flex justify-center card bg-base-300 w-87 shadow-xl p-4 mt-5">
              <div className="flex items-center gap-4">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#A6ADBB"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="layer1">
                      {" "}
                      <path d="M 1.5 4 C 0.671573 4 0 4.671573 0 5.5 L 0 15.5 C 0 16.328427 0.671573 17 1.5 17 L 18.5 17 C 19.328427 17 20 16.328427 20 15.5 L 20 5.5 C 20 4.671573 19.328427 4 18.5 4 L 1.5 4 z M 1.4648438 5 C 1.4765638 4.999588 1.48828 4.999588 1.5 5 L 18.5 5 C 18.776142 5 19 5.223858 19 5.5 L 19 6 L 1 6 L 1 5.5 C 0.999349 5.237024 1.2025178 5.01849 1.4648438 5 z M 1 7 L 19 7 L 19 8.9960938 L 1 8.9960938 L 1 7 z M 1 10 L 19 10 L 19 15.5 C 19 15.776142 18.776142 16 18.5 16 L 1.5 16 C 1.223858 16 1 15.776142 1 15.5 L 1 10 z M 2 11 L 2 12 L 13 12 L 13 11 L 2 11 z "></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p>
                  {" "}
                  <a className="text-blue-500 cursor-pointer">Conocé</a> los
                  medios de pago y financiación en cuotas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-screen">
        <div className="w-[80%] mt-5 mb-5">
          <div tabIndex={0} className="p-6 border-base-300 bg-base-200 border">
            <div className="mb-6 text-xl font-medium">Descripción</div>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleDeProducto;
