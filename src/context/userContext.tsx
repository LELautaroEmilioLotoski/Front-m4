"use client";
import { createContext, useContext, useState, useEffect } from "react";
import LoginContext from "../context/loginContext";
import { jwtDecode } from "jwt-decode";

interface IUsers {
  name: string;
  address: string;
  phone: string;
  email: string;
}

interface AuthContextType {
  user: IUsers | null;
}

export const usersContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { token, setToken } = useContext(LoginContext);

  const [user, setUser] = useState<IUsers | null>(null);

  useEffect(() => {
    if (token === true) {
      const storedToken = localStorage.getItem("userToken");

      if (storedToken) {
        try {
          const decodedUser = jwtDecode<IUsers>(storedToken);

          setUser(decodedUser);
        } catch (error) {
          console.error("Error decoding token:", error);
          localStorage.removeItem("token");
          setToken(false);
        }
      }
    } else {
      setUser(null);
    }
  }, [token, setToken]);
  return (
    <usersContext.Provider value={{ user }}>{children}</usersContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(usersContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
