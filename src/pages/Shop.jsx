import ShopHero from "@/components/ShopHero"
import ShopActionBar from "@/components/ShopActionBar"
import ProductList from "@/components/ProductList"
import useSWR from "swr";
import React from 'react';
import { useState } from "react";
import { PaginationProvider } from "../components/PaginationContext.jsx";
import { useParams, useLocation } from "react-router-dom";

export default function Shop() {
    const { categoryId } = useParams();
    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const query = useQuery();
    const name = query.get("name")
    // state of selected categ. id from the url -
    // fetch for categ by categ id 
    // pass it as a prop to shopHero
    // pass it as a prop to productList
    const [sortBy, setSortBy] = useState("Default");
        const fetcher = (url) => fetch(url).then((r) => r.json());
        const {
            data: productData,
            error,
            isLoading,
        } = useSWR(
            categoryId == undefined ?
            import.meta.env.VITE_API_URL + "/products?populate=image" :
            import.meta.env.VITE_API_URL + `/products?populate=image&filters[category][id][$eq]=${categoryId}`,
            fetcher
            );
    
    return (
        <main>
            <PaginationProvider>
                <ShopHero categoryId= {categoryId} categoryName= {name}/>
                <ShopActionBar productData = {productData} error = {error} isLoading={isLoading} setSortBy= {setSortBy} /> 
                <ProductList productData = {productData} error = {error} isLoading={isLoading} pageType="shop" sortBy={sortBy} categoryId={categoryId}/>
            </PaginationProvider>
        </main>
    )
  }