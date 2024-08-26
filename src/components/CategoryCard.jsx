import React from "react";
import "../style/main.css";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {
    if (!props.categories || props.categories.length === 0) {
        return <div>No Categories available.</div>;
    }

    const createCategoryCardElements = props.categories.data.map((category) => { 
        const imageUrl = category.attributes.image?.data?.attributes?.formats?.thumbnail?.url; //want to add image fallback in case of no image display first two letters

        return (
            <Link to={`/shop/${category.id}?name=${category.attributes.name}`} key={category.id} className="flex flex-shrink-0 flex-col items-center gap-4 w-[200px] lg:w-[300px] cursor-pointer">
                {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={category.attributes.name}
                            className="object-cover w-full h-full rounded-lg aspect-[19/24]"
                        />
                ) : (
                    <div className="bg-gray-300 w-full h-full flex items-center justify-center aspect-[19/24] rounded-lg">
                        <span>No Image Available</span>
                    </div>
                )}
                <h3 className="text-black-like font-semibold text-base text-center">{category.attributes.name}</h3>
            </Link>
        );
    });

    return (
        <div className="overflow-x-auto py-8 px-4 flex items-center gap-4 scrollbar-hidden gap-x-16">
            {createCategoryCardElements}
        </div>
    );
}
