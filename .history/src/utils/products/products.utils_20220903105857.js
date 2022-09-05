import ProductsService from "../../services/product.services"
const productService = new ProductsService()

const getProducts = () => {
    productService
    .getProducts()
    .then((data)=> {
      // setProducts(data.data)
      setWithExpiry('products', JSON.stringify(data.data), 9000)
    })
    .catch((error) => console.log(error))
  }

