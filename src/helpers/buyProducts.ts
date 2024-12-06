import IProducts from "@/interfaces/IProducts";
import IUsersData from "@/interfaces/IUser";

export const buyOrders = async (cart: IProducts[], user: IUsersData, token: string) => {

    const orders = process.env.NEXT_PUBLIC_API_URL_PRODUCTS

    try {
        
      const products = cart.map((product) => product.id);
      const userId = user.id
      
      const userData = {
        products: products,
        userId: userId
      }

      const res = await fetch(orders as string, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      
      const result = await res.json();
  
      return result;
    } catch (error) {
      console.error("Error en la compra:", error);
    }
  };
  