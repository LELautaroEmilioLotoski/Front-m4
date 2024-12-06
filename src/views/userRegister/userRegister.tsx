"use client";
import React, { useState } from "react";
import { validateLogin } from "@/helpers/validate";
import Swal from "sweetalert2";

const UserRegister = () => {
  const [values, setValues] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });

  const [isTouched, setIsTouched] = useState({
    name: false,
    address: false,
    phone: false,
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

    const registerUrl = process.env.NEXT_PUBLIC_API_URL_REGISTER

      const response = await fetch(registerUrl as string, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
       await response.json();

       Swal.fire({
        title: 'Se Registró Correctamente!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
       setValues({
         name: "",
         address: "",
         phone: "",
         email: "",
         password: "",
       });

  };
  const isFormValid =
    values.email &&
    values.password &&
    values.name &&
    values.address &&
    values.phone &&
    !errors.email &&
    !errors.password &&
    !errors.name &&
    !errors.address &&
    !errors.phone;

  return (
    <div className="flex justify-center items-center mt-[4.5rem]">
      <div className="h-[850px] mockup-phone border-black border-[8px] mb-[100px] bg-gradient-to-r from-blue-600 to-purple-600 border-solid p-0">
        <div className="flex align-top camera"></div>
        <div className="pt-[100px] h-[900px] display w-full">
          <div
            style={{ animation: "slideInFromLeft 1s ease-out" }}
            className="mr-[2rem] ml-[2rem] xl:w-[350px] rounded-xl shadow-[101px_150px_110px_120px_rgba(0,101,196,1)] overflow-hidden p-8 space-y-8"
          >
            <h2
              style={{ animation: "appear 2s ease-out" }}
              className="text-center text-4xl font-extrabold text-white"
            >
              Welcome
            </h2>
            <p
              style={{ animation: "appear 3s ease-out" }}
              className="text-center text-gray-200"
            >
              Sign in to your account
            </p>
            <form
              method="POST"
              action="#"
              onSubmit={handleOnSubmit}
              className="space-y-6"
            >
              <div className="relative">
                <input
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  id="name"
                  name="name"
                  type="text"
                  onChange={onChange}
                  onBlur={handleBlur}
                />
                <label
                  className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Name
                </label>
                {isTouched.name && errors.name && <p>{errors.name}</p>}
              </div>
              <div className="relative">
                <input
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  id="address"
                  name="address"
                  type="text"
                  onChange={onChange}
                  onBlur={handleBlur}
                />
                <label
                  className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Address
                </label>
                {isTouched.address && errors.address && <p>{errors.address}</p>}
              </div>
              <div className="relative">
                <input
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={onChange}
                  onBlur={handleBlur}
                />
                <label
                  className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Phone
                </label>
                {isTouched.phone && errors.phone && <p>{errors.phone}</p>}
              </div>
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
                />
                <label
                  className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Email address
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
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
                {isTouched.password && errors.password && (
                  <p>{errors.password}</p>
                )}
              </div>
              <button
                className={`w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200 ${
                  !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={!isFormValid}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
