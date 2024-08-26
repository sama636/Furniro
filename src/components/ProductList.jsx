import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { usePagination } from "./PaginationContext";

export default function ProductList({ productData, error, isLoading, pageType, sortBy }) {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const allProducts = [];

  function sortByName(products) {
    return products.slice().sort((a, b) => {
      const nameA = a.productName.toLowerCase(); 
      const nameB = b.productName.toLowerCase(); 
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0; // If names are equal
    });
  }

  // Define pagination context variables
  const { currentPage = 1, productsPerPage = 8, setCurrentPage = () => {} } =
    pageType === 'shop' ? usePagination() : {};

  if (error) return <div>Failed to load products</div>;
  if (isLoading) return <div>Loading...</div>;

  productData.data.forEach((product) => {
    const productInfo = {
      productId: product.id,
      price: product.attributes.price,
      productName: product.attributes.name,
      produckSKU: product.attributes.sku,
      discount: product.attributes.discount,
      finalPrice: product.attributes.price - (product.attributes.price * (product.attributes.discount / 100)),
      productColor: product.attributes.color,
      productSize: product.attributes.size,
      count: product.attributes.count,
      imageLink: product.attributes.image?.data?.attributes?.url,
      shortDescription: product.attributes.short_desc,
      longDescription: product.attributes.long_desc,
      publishDate: product.attributes.publishedAt
    };
    allProducts.push(productInfo);
  });

  if (!allProducts.length) {
    return <div>No Products available.</div>;
  }

  function handleShowMoreBtn() {
    setVisibleProducts((prev) => prev + 8); // Show 8 more products
  }

  let currentProducts = allProducts;
  let totalProducts = allProducts.length;

  if (pageType === 'shop') {
    // Ensure valid pagination values
    const validProductsPerPage = Math.max(productsPerPage, 1); // Default to 1 if invalid
    const validCurrentPage = Math.max(currentPage, 1); // Default to 1 if invalid

    const indexOfLastProduct = validCurrentPage * validProductsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - validProductsPerPage;
    
    if (sortBy === "Default") {
    currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    } else if (sortBy === "Name") {
      currentProducts = sortByName(allProducts).slice(indexOfFirstProduct, indexOfLastProduct);
    } else if (sortBy === "Price") {
      currentProducts = allProducts.sort((a, b) => a.finalPrice - b.finalPrice).slice(indexOfFirstProduct, indexOfLastProduct)
    }

    totalProducts = allProducts.length;
  }

  return (
    <section className="pb-10 flex flex-col w-full min-h-screen">
      {pageType === 'home' && (
        <div className="flex flex-col justify-center items-center gap-1 pb-10">
          <h2 className="text-2xl font-bold lg:text-4xl text-black-like text-center">
            Our Products
          </h2>
        </div>
      )}
      <div className="py-8 grid lg:grid-cols-4 md:grid-cols-3 grid-rows-auto gap-4 justify-center items-center">
        {pageType === 'home'
          ? allProducts.slice(0, visibleProducts).map((product, index) => (
              <ProductCard key={product.productId || index} product={product} />
            ))
          : currentProducts.map((product, index) => (
              <ProductCard key={product.productId || index} product={product} />
            ))}
      </div>

      {/* Show More Button for home page */}
      {pageType === 'home' && visibleProducts < totalProducts && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleShowMoreBtn}
            variant="link"
            className="lg:w-[245px] w-[175px] lg:h-[48px] h-[32px] gap-0 border-[1px] border-add-cart-btn-txt text-add-cart-btn-txt bg-white"
          >
            Show More
          </Button>
        </div>
      )}

      {/* Pagination for shop page */}
      {pageType === 'shop' && (
        <div className="flex gap-2 justify-center items-center py-10">
          {[...Array(Math.ceil(totalProducts / productsPerPage)).keys()].map((pageNumber) => (
            <Button
              key={pageNumber + 1}
              onClick={() => setCurrentPage(pageNumber + 1)}
              variant="link"
              className={`p-4 border rounded bg-[#F9F1E7] ${
                currentPage === pageNumber + 1 ? 'bg-[#B88E2F] text-white' : ''
              }`}
            >
              {pageNumber + 1}
            </Button>
          ))}
        </div>
      )}
    </section>
  );
}
