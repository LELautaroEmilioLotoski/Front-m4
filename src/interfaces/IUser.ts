import { IOrders } from "./IOrders";

interface IUsersData {
    name: string;
    address: string;
    phone: string;
    email: string;
    id: number,
    orders: IOrders[],
    compras: []
  }

  export default IUsersData;