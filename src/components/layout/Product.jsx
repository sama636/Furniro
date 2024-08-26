import { Link } from "react-router-dom";
import React from "react";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";
import RelatedProduct from "./RelatedProducts";
import useSWR from "swr";
import { useParams } from "react-router-dom";

export default function Product() {
  const {id} = useParams();
  const fetcher = url => fetch(url). then(r => r.json())
    const { data, error} = useSWR(import.meta.env.VITE_API_URL + `/products/${id}?populate=*`, fetcher)
    if (error) return <div>error</div>
    if (!data) return <div>no data</div>

    const item = data.data.attributes
    const itemid = data.data.id
  return (
    <>
    {item && (<main>
        <header className="text-sm px-10 py-4 flex flex-row gap-4 items-center bg-creamy lg:px-24 lg:py-6 lg:gap-8">
            <Link>Home </Link>
            <img src="../assets/arrow.svg" alt="" />
            <Link>Shop</Link>
            <img src="../assets/arrow.svg" alt="" />
            <img src="../assets/col.svg" alt="" />
            <h4>{item.name}</h4>
        </header>
        <ProductDetails item={item} itemid={itemid} key={1}/>
        <hr />
        <ProductDescription item={item} key={2}/>
        <hr />
        <RelatedProduct key={3}/>
        <hr />
    </main>)}
    </>
    
)}

