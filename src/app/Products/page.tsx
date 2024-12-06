import React from "react";
import Card from "../../components/Cards/Card";
import { fetchProducts } from "../../helpers/getProducts";
import Link from "next/link";

const Products = async () => {
  const getProducts = await fetchProducts();
  if(getProducts.length > 0) {

    if (!getProducts || getProducts.length === 0) {
      return <div>Error loading products. Please try again later.</div>;
    }

    return (
      <div className="min-h-screen">
        <h1 className="flex justify-center items-center xl:text-6xl xl:m-4 text-4xl p-6 m-6 md-text-4xl">
          Productos Que te pueden interesar
        </h1>
        <div className="lg:flex justify-center font-semibold">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {getProducts.map((product) => {
              return (
                <Link href={`/Product/${product.id}`} key={product.id}>
                  <Card {...product} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Error loading products. Please try again later.</div>;
  }
};

export default Products;
