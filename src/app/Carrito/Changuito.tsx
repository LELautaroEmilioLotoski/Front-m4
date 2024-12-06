"use client";
import React, { useState, useEffect, useContext } from "react";
import LoginContext from "../../context/loginContext";
import { cartContext } from "@/context/cartContext";
import { buyOrders } from "@/helpers/buyProducts";
import { UserContext } from "@/context/UsersContext";
import Loading from "@/views/loading/Loading";
import Swal from 'sweetalert2';

const Changuito = () => {
  const { token, setToken } = useContext(LoginContext);
  const { cart, setCart } = useContext(cartContext);
  const { user, setUser, updateOrders } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeUser = () => {
      const tokenBoolean = localStorage.getItem("userToken");
      const userToken = localStorage.getItem("userValidToken");

      if (tokenBoolean) setToken(true);
      if (userToken) {
        const userData = JSON.parse(userToken);
        setUser(userData);
        setToken(true);
      } else {
        setToken(false);
      }

      setIsLoading(false);
    };

    initializeUser();
  }, []);

  const handleCart = async () => {
    if (user && token) {
      const userToken = localStorage.getItem("userToken");
      if(userToken !== null){
        const res = await buyOrders(cart, user, userToken);
        if (res && res.status === "approved") {
          Swal.fire({
            title: "Estás Seguro que quieres realizar la Compra?",
            text: "Una vez que digas que sí, no puedes volver atrás!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Comprar de todos modos",
            cancelButtonText: "Cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Comprado!",
                text: "La Compra se ha Efectuado con Éxito!",
                icon: "success",
              });
              updateOrders({ status: res.status, id: res.id, date: res.date });
              localStorage.removeItem("cart");
              setCart([]);
            } else {
              Swal.fire({
                title: "Compra Cancelada",
                text: "La compra no se ha realizado.",
                icon: "info",
              });
              localStorage.removeItem("cart");
              setCart([]);
            }
          });
        } else {
          console.log(
            res
              ? res.message
              : "No se pudo realizar la compra. Error desconocido."
          );
        }
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tienes que Iniciar Sesion Primero!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  const totalPrice = cart.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  if (cart.length === 0 && user) {
    return (
      <div className="flex justify-center items-center">
        <div className="xl:right-64 bg-zinc-500 p-6 xl:mt-6 sm:p-10 rounded-xl shadow-lg text-center lg:text-left mb-6 lg:mb-0">
          <h3 className="xl:flex xl:justify-center xl:items-center pb-4 text-2xl sm:text-3xl text-white">
            No hay Productos en el carrito
          </h3>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="flex justify-center items-center pt-4 sm:p-8">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center text-white">
        Productos Disponibles en el carrito:
      </h2>
    </div>
    <div className="flex justify-center items-center py-6 px-4 sm:pt-20 sm:px-8">
      {token && user ? (
        <div className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md">
          {cart.length > 0 ? (
            <>
              {cart.map((product, id) => (
                <div
                  key={id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-4"
                >
                  <p className="text-gray-800 text-lg sm:text-xl font-semibold">
                    Producto: {product.name}
                  </p>
                  <p className="text-gray-700 text-lg sm:text-xl">
                    Precio: ${product.price}
                  </p>
                </div>
              ))}
              <div className="pt-6 text-center">
                <button
                  onClick={handleCart}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-lg sm:text-xl py-2 px-6 rounded-lg shadow-md transition duration-300"
                >
                  Total a Pagar: ${totalPrice}
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-700 text-lg sm:text-xl">
              Tu carrito está vacío.
            </p>
          )}
        </div>
      ) : (
        <h3 className="text-center text-white text-lg sm:text-xl">
          Tienes que loguearte para acceder al carrito de compras
        </h3>
      )}
    </div>
  </>
  );
};

export default Changuito;
