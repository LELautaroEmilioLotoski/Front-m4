import React, { useEffect, useState, createContext } from "react";
import IProducts from "@/interfaces/IProducts";

interface ICart {
  cart: IProducts[];
  setCart: (cart: IProducts[]) => void;
}

export const cartContext = createContext<ICart>({
  cart: [],
  setCart: () => {}
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IProducts[]>([]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    setCart(localCart ? JSON.parse(localCart) : []);
  }, []); 

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
