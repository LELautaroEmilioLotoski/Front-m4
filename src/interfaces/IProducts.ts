interface IProducts {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image: string
}

export interface IProductsCompra{
    product: IProducts
}

export default IProducts;