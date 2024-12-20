import IProducts from "@/interfaces/IProducts";

const getProductsUrl = process.env.NEXT_PUBLIC_API_URL_GET_PRODUCTS;

export async function fetchProducts(): Promise<IProducts[]> {
  try {
    const response = await fetch(getProductsUrl as string, {
      next: { revalidate: 100 },
    });


    if (!getProductsUrl) {
      throw new Error("API URL for products is not defined");
    }

    const res: IProducts[] = await response.json();
    return res;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Error fetching products");
  }
}


  
export async function fetchProduct(id: number): Promise<IProducts> {
  try {
    const response: IProducts[] = await fetchProducts();
    const numericId = Number(id);
    const getProduct = response.find((product) => product.id === numericId);

    if (!getProduct) {
      throw new Error(`El producto con id ${id} no se encontró`);
    }

    return getProduct;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Ocurrió un error inesperado");
    }
  }
}
