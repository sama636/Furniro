import React, { useContext } from 'react'
import { cartcontext } from './GlobalContext2.jsx';

function SelectDetails({item, itemid}) {
    const [quantity, setquantity] = React.useState(1)
    const {addItem} = useContext(cartcontext);

    const addtocart = ()=> {addItem({id: itemid, image: item.image.data.attributes.url, name: item.name, price: item.price, quantity:quantity, total:item.price*quantity,})
    alert(item.name+' was added to cart');}

    function subnum(){setquantity(old => old!==1?old-1 :old)}
    function addnum(){setquantity(old => old!==0?old+1 :old)}
    
    return (
        <div className='flex flex-col gap-4 mb-4'>
            <h5>Size</h5>
            <ul className="flex flex-row gap-4">
            <li><button className={"bg-brownish-creamy text-white w-8 h-8 rounded"}>{item.size}</button></li>
            </ul>
            <h5>Color</h5>
            <ul className="flex flex-row gap-4">
            <li><button className={`rounded-full bg-${item.color} w-8 h-8`}></button></li>
            </ul>
            <div className="flex flex-row gap-4 mb-4">
                <div className="w-28 h-14 gap-2 border-address-txt border rounded-lg flex flex-row justify-center items-center">
                    <button className="w-6 h-6" onClick={subnum}>-</button>
                    <span className="w-6 h-6 flex justify-center">{quantity}</span>
                    <button className="w-6 h-6" onClick={addnum}>+</button>
                </div>
                <button className="w-32 h-14 border-black border rounded-lg lg:w-44" onClick={addtocart}>Add To Cart</button>
                <button className="w-32 h-14 border-black border rounded-lg lg:w-44">+ Compare</button>
            </div>
        </div>
    )
}

export default SelectDetails