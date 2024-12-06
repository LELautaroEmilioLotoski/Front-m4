import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Contenido principal */}
      <main className="min-h-screen flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
