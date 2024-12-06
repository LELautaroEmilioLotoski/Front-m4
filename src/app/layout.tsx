"use client";
import Layout from "../components/Layout";
import "../app/globals.css";
import loginContext from "../context/loginContext";
import CartProvider from "@/context/cartContext";
import { AuthProvider } from "@/context/userContext";
import UserProvider from "@/context/UsersContext";
import React, { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState<boolean>(false);

  return (
    <loginContext.Provider value={{ token, setToken }}>
      <AuthProvider>
        <CartProvider>
          <html lang="es">
            <UserProvider>
              <head>
                <meta />
              </head>
              <body>
                <Layout>{children}</Layout>
              </body>
            </UserProvider>
          </html>
        </CartProvider>
      </AuthProvider>
    </loginContext.Provider>
  );
}
