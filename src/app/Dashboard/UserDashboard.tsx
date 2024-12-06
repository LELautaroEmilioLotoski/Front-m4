"use client";
import { useContext } from "react";
import { UserContext } from "@/context/UsersContext";

const UserDashboard = () => {
  const { user } = useContext(UserContext);

  if (!user) return null;

  const userDetails = [
    {
      label: "Name",
      value: user.name,
      icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
    },
    {
      label: "Email",
      value: user.email,
      icon: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
    },
    {
      label: "Dirección",
      value: user.address,
      icon: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    },
    {
      label: "Teléfono",
      value: user.phone,
      icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    },
  ];

  return (
    <div className="w-full">
      {user ? (
        <div>
          <div className="bg-zinc-700">
            <div className="p-10 sm:p-20 w-full">
              <h1 className="flex text-2xl sm:text-6xl ml-8 sm:ml-64 text-white">
                Bienvenido, {user.name} 🤩!
              </h1>
            </div>
          </div>
          <div className="relative">
            <div
              className="artboard xl:phone-3 sm:absolute xl:right-64 bg-zinc-500 p-6 xl:mt-6 sm:p-10 rounded-xl shadow-lg text-center lg:text-left mb-6 lg:mb-0"
              style={{ height: "auto" }}
            >
              <h3 className="xl:flex xl:justify-center xl:items-center pb-4 text-2xl sm:text-3xl text-white underline">
                Tus Datos Personales:
              </h3>
              <div className="pt-4 sm:pt-10 space-y-4 text-sm sm:text-2xl">
                {userDetails.map((item, index) => (
                  <div
                    className="flex justify-center items-center gap-2"
                    key={index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                    <p className="text-lg xl:text-2xl text-slate-200">
                      {item.label}: {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:px-10">
            <h2 className="flex justify-center items-center xl:block p-5 sm:p-10 m-2 sm:m-5 text-2xl sm:text-[2.5rem]">
              Historial de Compras:
            </h2>
            {user.orders.length > 0 ? (
              user.orders.map((order, id) => (
                <div
                  key={id}
                  className="order-item p-8 mb-4 sm:m-4 w-full sm:w-1/2 bg-gray-700 text-white rounded-lg shadow-md"
                >
                  <p className="text-base sm:text-xl">Orden N°: {order.id}</p>
                  <p className="text-base sm:text-xl">Fecha: {order.date}</p>
                  <p className="text-base sm:text-xl">Estado: {order.status}</p>
                </div>
              ))
            ) : (
              <h4 className="m-10 text-xl">No hay compras disponibles</h4>
            )}
          </div>
        </div>
      ) : (
        <h3 className="text-center text-xl text-gray-700">
          Please log in to view your profile
        </h3>
      )}
    </div>
  );
};

export default UserDashboard;
