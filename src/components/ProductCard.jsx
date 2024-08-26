import React, { useContext, useState } from "react";
import { Badge } from "./Badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { cartcontext } from './layout/GlobalContext2.jsx';
import ShareIcon from "/src/assets/VectorShare.svg"
import CompareIcon from "/src/assets/VectorCompare.svg"
import LikeIcon from "/src/assets/VectorLike.svg"

export default function ProductCard({ product }) {
  // Initialize with 8 products shown
  const {addItem} = useContext(cartcontext);
  const [showOverlay, setShowOverlay] = useState(false); // Track which product is hovered

  const addtocart = ()=> {addItem({id: product.productId, image:product.imageLink , name: product.productName, price: product.finalPrice, quantity:1, total:product.finalPrice})
    alert(product.productName+' was added to cart');}
    
    function parseToTimestamp(dateString) {
      return new Date(dateString).getTime();
    }
  const publishDate = parseToTimestamp(product.publishDate);
  const currentTimestamp = Date.now();
  const threeDaysAgoTimestamp = currentTimestamp - (3 * 24 * 60 * 60 * 1000);
  const isNewProduct = publishDate > threeDaysAgoTimestamp ? true : false;

  return (
    <div className="flex justify-center items-start mx-8 lg:mx-16">
      <div
        className="relative container flex flex-shrink-0 flex-col items-center gap-2 w-full lg:w-[250px] bg-prod-card-bg pb-2 px-0"
        onMouseOver={() => setShowOverlay(true)}
        onMouseOut={() => setShowOverlay(false)}
      >
        {showOverlay && (
          <div className="z-10 absolute bg-[rgba(58,58,58,0.72)] w-full h-full flex flex-col justify-center items-center gap-2 pointer-events-none">
            <Button
              onClick={addtocart}
              variant="link"
              className="w-[202px] bg-white text-add-cart-btn-txt opacity-100 z-20 pointer-events-auto"
            >
              Add to cart
            </Button>
            <div className="w-full flex justify-evenly">
              <button className="flex justify-center items-center gap-1">
                <img src={ShareIcon} alt="share icon" />
                <span className="text-white">Share</span>
              </button>
              <button className="flex justify-center items-center gap-1">
                <img src={CompareIcon} alt="compare icon" />
                <span className="text-white">Compare</span>
              </button>
              <button className="flex justify-center items-center gap-1">
                <img src={LikeIcon} alt="like icon" />
                <span className="text-white">Like</span>
              </button>
            </div>
          </div>
        )}
        <Link to={`/product/${product.productId}`}>
        {product.imageLink ? (
          <div className="relative aspect-[19/24] w-full">
            <img
              src={product.imageLink}
              alt={product.productName}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute top-2 right-2 flex gap-2">
            {product.discount !== 0 && (
              <Badge
                className="bg-discount-badge-bg w-10 h-10 rounded-full flex items-center justify-center text-white border border-discount-badge-bg"
                variant="outline"
              >
                -{product.discount}%
              </Badge>
            )}
            {isNewProduct && (
              <Badge
                className="bg-new-badge-bg w-10 h-10 rounded-full flex items-center justify-center text-white border border-new-badge-bg"
                variant="outline"
              >
                New
              </Badge>
            )}
            </div>
          </div>
        ) : (
          <div className="bg-gray-300 w-full h-full flex items-center justify-center aspect-[19/24] rounded-lg">
            <span>No Image Available</span>
          </div>
        )}
        <h3 className="text-black-like font-semibold text-center text-lg lg:text-xl">
          {product.productName}
        </h3>
        <p className="lg:text-xl text-input-label-txt px-1 text-center clamp-text-mobile md:clamp-text lg:clamp-text">
          {product.shortDescription}
        </p>
        <div className="text-center">
          <h4 className="self-start inline lg:text-lg font-semibold pr-2">
            Rp {product.finalPrice}
          </h4>
          <p className="inline lg:text-base text-input-label-txt text-sm line-through">
            Rp {product.price}
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
}
