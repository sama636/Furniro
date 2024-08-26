import React from 'react';
import useSWR from 'swr'
import CategoryCard from "./CategoryCard";

export default function CategoryList() {
    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error, isLoading} = useSWR(import.meta.env.VITE_API_URL + '/categories?populate=image', fetcher)
    
    if (error) return <div className='m-auto'>Failed to load products</div>;
    if (isLoading) return <div className='m-auto'>Loading...</div>;
    return(
        <section className="py-10 flex flex-col w-full lg:h-[685px]">
        <div className="flex flex-col justify-center items-center gap-1 pb-2 lg:pb-10">
            <h2 className="text-2xl text-center font-bold lg:text-4xl text-black-like">Browse The Range</h2>
            <p className="lg:text-xl text-input-label-txt text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
        </div>
        <CategoryCard categories = {data} />
    </section>);
}
