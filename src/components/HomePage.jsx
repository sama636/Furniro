import Hero from "./Hero";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import useSWR from "swr";
import { PaginationProvider } from "../components/PaginationContext.jsx";
import { useState } from "react";

export default function HomePageContent() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const {
        data: productData,
        error,
        isLoading,
    } = useSWR(
        import.meta.env.VITE_API_URL + "/products?populate=image",
        fetcher
    );

    return(
        <main className="flex flex-col">
            <PaginationProvider>  
                <Hero />
                <CategoryList />
                <ProductList productData = {productData} error = {error} isLoading={isLoading} pageType="home" />
            </PaginationProvider>
        </main>
    );
}