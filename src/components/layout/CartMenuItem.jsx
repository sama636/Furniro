import React, { useContext } from 'react'
import { cartcontext } from './GlobalContext2.jsx';

function CartMenuItem({id, image, name, price, quantity}) {
    const {deleteItem} = useContext(cartcontext);
    const remove = ()=> {deleteItem(id)}
    return (
        <div className='flex flex-row gap-6 items-center'>
            <div className='w-16 h-16 md:w-108px md:h-105px bg-creamy rounded-lg flex items-center'><img className="w-full h-auto rounded-lg" src={image} alt="" /></div>
            <div className='md:ml-2 w-28'>
                <h2 className='md:mb-2'>{name}</h2>
                <div className='flex flex-row items-center gap-2'>
                    <span className='text-sm font-light'>{quantity}</span>
                    <span className='text-xs font-light'>x</span>
                    <span className='text-xs font-medium text-brownish-creamy'>Rs. {price}</span>
                </div>
            </div>
            
            <img className="md:ml-16" onClick={remove} src="../assets/sidecartdel.svg" alt="" />
        </div>
    )
}

export default CartMenuItem
