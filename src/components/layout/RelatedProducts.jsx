import { Link } from "react-router-dom";
import React from "react";
import ProductCard from "../ProductCard";
import useSWR from "swr";

export default function RelatedProduct() {
  const fetcher = url => fetch(url). then(r => r.json())
  let id = 2
  const { data, error} = useSWR(import.meta.env.VITE_REACT_APP_API_URL + "/products?populate=image", fetcher)
  if (error) return <div>error</div>
  if (!data) return <div>no data</div>

  const productData = data
  const itemsarray = []
  for (let i = 0; i<4; i++){
    const product = productData.data[i]
    const productInfo = {
      productId : product.id,
      price : product.attributes.price,
      productName : product.attributes.name,
      produckSKU : product.attributes.sku,
      discount : product.attributes.discount,
      finalPrice : product.attributes.price - (product.attributes.price * (product.attributes.discount/100)),
      productColor : product.attributes.color,
      productSize : product.attributes.size,
      count : product.attributes.count,
      imageLink : product.attributes.image?.data?.attributes?.url,
      shortDescription: product.attributes.short_desc,
      longDescription: product.attributes.long_desc
    };
    itemsarray.push(<ProductCard key={product.id} product={productInfo}/>)
  }
  return (
    <section className="flex flex-col items-center py-14 gap-4 mb-20">
        <h3 className="text-4xl font-medium">Related Products</h3>
        <div className="p-4 px-20 xl:px-36 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-0 xl:grid-cols-4">
          {itemsarray}
        </div>
    </section>
)}
