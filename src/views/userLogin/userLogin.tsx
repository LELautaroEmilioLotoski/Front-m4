"use client";
import React, { useState, useContext } from "react";
import { validateLogin } from "@/helpers/validate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginContext from "../../context/loginContext";
import { UserContext } from "@/context/UsersContext";
import Swal from "sweetalert2";

const UserLogin = () => {
  const router = useRouter();
  const { setToken } = useContext(LoginContext);
  const { setUser } = useContext(UserContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isTouched, setIsTouched] = useState({
    email: false,
    password: false,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues((prevValues) => {
      const updatedValues = {
        ...prevValues,
        [name]: value,
      };
      setErrors(validateLogin(updatedValues));
      return updatedValues;
    });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;

    setIsTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginUrl = process.env.NEXT_PUBLIC_API_URL_LOGIN;

    try {
      const response = await fetch(loginUrl as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const json = await response.json();

      if (json.token && json.user) {
        localStorage.setItem("userToken", json.token);
        setToken(true);
        setUser(json.user);

        Swal.fire({
          title: "Se Inició Sesión Correctamente!",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        router.push("/Dashboard");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo Salió Mal!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario O Contraseña Incorrectos!",
      });
    }
  };

  return (
    <div className="flex justify-center items-center mt-[4.5rem]">
      <div className="h-[850px] mockup-phone border-black border-[8px] bg-gradient-to-r from-blue-600 to-purple-600 border-solid p-0">
        <div className="flex align-top camera"></div>
        <div className="pt-[200px] h-[900px] display w-full">
          <div
            style={{ animation: "slideInFromLeft 1s ease-out" }}
            className="mr-[2rem] ml-[2rem] xl:w-[350px] rounded-xl shadow-[101px_150px_110px_120px_rgba(0,101,196,1)] overflow-hidden p-8 space-y-8"
          >
            <h2 className="text-center text-4xl font-extrabold text-white">
              Bienvenido
            </h2>
            <p className="text-center text-gray-200">
              Inicia sesión en tu cuenta
            </p>
            <form onSubmit={handleOnSubmit} className="space-y-6">
              <div className="relative">
                <input
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  id="email"
                  name="email"
                  type="email"
                  onChange={onChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <label
                  className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Correo Electrónico
                </label>
                {isTouched.email && errors.email && <p>{errors.email}</p>}
              </div>
              <div className="relative">
                <input
                  placeholder="Password"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  id="password"
                  name="password"
                  type="password"
                  onChange={onChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                {isTouched.password && errors.password && (
                  <p>{errors.password}</p>
                )}
              </div>
              <button
                className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </form>
            <div className="flex justify-center gap-3 text-sm text-center text-gray-300">
              No tienes una cuenta?
              <Link
                href="/Register"
                className="text-purple-100 hover:underline"
              >
                Registrate!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
