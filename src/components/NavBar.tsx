"use client";
import Link from "next/link";
import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import LoginContext from "@/context/loginContext";
import { UserContext } from "@/context/UsersContext";
import Loading from "@/views/loading/Loading";

const NavBar = () => {
  const { token, setToken } = useContext(LoginContext);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const [isNavLoading, setIsNavLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    const storedUser = localStorage.getItem("userValidToken");

    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      setToken(true);
    } else {
      setUser(null);
      setToken(false);
    }

    setIsNavLoading(false);
  }, [setToken, setUser]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userValidToken");
    setToken(false);
    setUser(null);
    router.push("/Login");
  };

  if (isNavLoading) {
    return (
      <div className="navbar bg-gray-950 flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="navbar bg-gray-950">
      <div className="flex-1">
        <Link href="/Products" className="btn btn-ghost text-xl">
          LOTOSKISTORE
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div className="flex items-center justify-center">
            <Link href="/Carrito" className="indicator gap-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {token && user ? (
        <div className="flex gap-4 m-3">
          <div className="flex items-center justify-center gap-4">
            <Link className="pl-2" href="/Dashboard">
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
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Link>
            <button onClick={handleLogout}>
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
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Link className="text-white pl-5" href="/Login">
            Iniciar Sesión
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
