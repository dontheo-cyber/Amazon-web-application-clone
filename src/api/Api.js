import axios from "axios"


export async function productsData(){
    const Products = await axios.get(
     "https://fakestoreapiserver.reactbd.com/amazonproducts"
    )
    return Products
} 