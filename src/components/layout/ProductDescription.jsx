import { Link } from "react-router-dom";
import useSWR from "swr";
import React from "react";
import Description from "./Description";
import Reviews from "./Reviews";

export default function ProductDescription({item}) {
    const [display, setdisplay] = React.useState("Description")
    let reviews = item.reviews.data.length
    
    return (
        <section className="px-6 py-14 flex flex-col items-center gap-6">
            <div className="flex flex-row gap-8 justify-center content-center pb-2">
                <button onClick={() => setdisplay("Description")}><h4 className={display=="Description"?"font-medium text-lg text-black":"font-medium text-lg text-address-txt"}>Description</h4></button>
                <button onClick={() => setdisplay("Review")}><span className={display=="Description"?"font-normal text-lg text-address-txt":"font-normal text-lg text-black"}>{reviews>1?"Reviews":"Review"} [{reviews}]</span></button>
            </div>
            {display=="Description"?<Description item={item} key={1}/>:
            <Reviews item={item} key={2}/>}
        </section>
)}