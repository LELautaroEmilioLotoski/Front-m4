import React, { createContext, useEffect, useState } from "react";
import IUsersData from "@/interfaces/IUser"
import { IOrders } from "@/interfaces/IOrders";
interface UserContextProps {
  user: IUsersData | null;
  setUser: (user: IUsersData | null) => void;
  updateOrders: (order: IOrders) => void
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  updateOrders: () => {}
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUsersData | null>(null);

  useEffect(() => {
    if(user){
      localStorage.setItem("userValidToken", JSON.stringify(user));
    }
  }, [user]);

  const updateOrders = (order: IOrders) => {
    const newOrder = user;
    newOrder?.orders.push({
      id: order.id,
      status: order.status,
      date: order.date
    })
    localStorage.setItem("userValidToken", JSON.stringify(user));
  }

  return (
    <UserContext.Provider value={{ user, setUser, updateOrders }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
