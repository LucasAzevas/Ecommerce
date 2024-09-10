import { ProdutcsType } from "@/types/ProductsModel";
import Product from "./components/Product";


async function getProdutcs(){

  const response = await fetch("https://fakestoreapi.com/products")
  if(!response.ok){
    throw new Error('resquet error')
  }

  return response.json();

}

export default async function Home() {

  const products = await getProdutcs();
 
  
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6
      ">
        {products.map((product: ProdutcsType)=> (
          <Product key={product.id} product={product}>
             </Product>
        ))}
      </div>

    </div>
  )
}
