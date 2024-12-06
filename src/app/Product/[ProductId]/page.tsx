import { fetchProduct } from "@/helpers/getProducts";
import DetalleDeProducto from "@/views/ProductDetail/ProductDetail";

const ProductDetail = async (props: { params: Promise<{ ProductId: number }> }) => {
  const params = await props.params;
  const getProduct = await fetchProduct(params.ProductId);
  return <DetalleDeProducto {...getProduct} />;
};

export default ProductDetail;
