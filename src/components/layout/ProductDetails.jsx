import { Link } from "react-router-dom";
import useSWR from "swr";
import React from "react";
import SelectDetails from "./SelectDetails";
import Star from "./Star";

export default function ProductDetails({item, itemid}) {
    const galleryArray = []
    galleryArray.push(item.image.data.attributes.url)
    const final = galleryArray.concat(item.slider.data.map(item => item.attributes.url))

    const [gallery, setgallery] = React.useState(final)


    function changeimage(num){
        setgallery(old =>{
            const arr = []
            arr.push(old[num])
            for (let i = 1; i<old.length; i++){
                if (i == num)
                    arr.push(old[0])
                else
                    arr.push(old[i])
            }
            return arr
        })
    }
    function average_rating(){
        let sum = 0 
        item.reviews.data.map(one => sum+=one.attributes.rating)
        return sum/item.reviews.data.length
    }

    function gettags(){
        let arr = item.tags.data
        let str = ""
        for(let i=0; i<arr.length-1 ; i++){
            str+= arr[i].attributes.name + ", "
        }
        str+= arr[arr.length-1].attributes.name
        return str
    }
    const side_style = "bg-creamy w-14 h-16 rounded-md flex flex-col justify-center lg:w-78px lg:h-20"

    function drawgallery(){
        const arr = []
        for (let i = 1; i<gallery.length; i++){
            arr.push(<button key={i} className={side_style} onClick={() => changeimage(i)}><img src={gallery[i]} className="w-full h-auto rounded-md" alt="side image" /></button>)
        }
        return arr
    }

    const getgallery = drawgallery()
    const tags = gettags()
    const avg_rating = average_rating()

    const main_style = "bg-creamy w-64 h-80 rounded-md flex flex-col justify-center lg:w-80 lg:h-96 xl:w-423px xl:h-500px"
    return (
        <section className="py-6">
            <div className="p-4 font-normal grid grid-cols-1 lg:grid-cols-2 lg:px-6 lg:gap-10 xl:gap-16 xl:px-20">
                <div className="grid grid-cols-2-image-product px-4 lg:gap-4">
                    <div className="flex flex-col gap-2 lg:gap-4">
                        {getgallery}
                    </div>
                    <div className={main_style}><img src={gallery[0]} className="w-full h-auto rounded-md" alt="main image" /></div>
                </div>
                <div>
                    <div className="flex flex-col gap-4 mt-6 lg:mt-0 ">
                        <div>
                            <h2 className="text-2xl lg:text-5xl lg:mb-2">{item.name}</h2>
                            <h3 className="text-lg text-address-txt font-medium lg:text-2xl">Rs. {item.price}</h3>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <Star key={1} rating={avg_rating}/>
                            <img src="../assets/col2.svg" alt="" />
                            <span className="text-xs text-address-txt lg:text-base">{item.reviews.data.length} Customer Review</span>
                        </div>
                        <p className="text-xs w-96 lg:w-424px leading-normal lg:text-base">{item.short_desc}</p>
                        <SelectDetails item={item} itemid={itemid}/>
                        <hr />
                        <div className="grid grid-cols-3-details-product grid-rows-4 grid-flow-col py-4 gap-2 text-address-txt">
                            <span>SKU</span>
                            <span>Category</span>
                            <span>Tags</span>
                            <span>Share</span>
                            <span>:</span>
                            <span>:</span>
                            <span>:</span>
                            <span>:</span>
                            <span>{item.sku}</span>
                            <span>{item.category.data.attributes.name}</span>
                            <span>{tags}</span>
                            <span className="flex flex-row gap-4 ">
                                <Link ><img className="w-6 h-6" src="../assets/facebook.svg" alt="" /></Link>
                                <Link><img className="w-6 h-6" src="../assets/linkedin.svg" alt="" /></Link>
                                <Link><img className="w-6 h-6" src="../assets/twitter.svg" alt="" /></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
)}