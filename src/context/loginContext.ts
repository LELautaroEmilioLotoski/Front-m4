"use client";
import { createContext } from "react";

const LoginContext = createContext<{
  token: boolean;
  setToken: (value: boolean) => void;
}>({
  token: false,
  setToken: () => {},
});

export default LoginContext;
