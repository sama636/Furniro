import React, { useContext } from 'react'
import { cartcontext } from './GlobalContext2.jsx';

function CartItem({id,image,name,price,total,quantity}) {
  const {deleteItem} = useContext(cartcontext);
  const remove = ()=> {deleteItem(id)}

  return (
    <div className='text-xs md:text-base md:w-700px lg:w-817px h-auto flex flex-row md:items-center'>
        <div className='w-20 h-20 md:h-105px md:w-105px bg-creamy rounded-xl'>
            <img className="w-full h-full rounded-lg" src={image} alt="" />
        </div>
        <ul className='h-55px ml-2 mt-3 flex flex-col gap-2 md:mt-0 md:ml-8 md:flex-row md:justify-center md:items-center md:gap-4 lg:gap-8'>
            <li className='w-32 max-w-32 md:mr-2 md:w-32 md:max-w-32'><span className='text-address-txt text-base'>{name}</span></li>
            <div className='flex flex-row justify-center items-center md:gap-4 lg:gap-8'>
              <li className='w-20 max-w-20 md:mr-6 md:w-28 md:max-w-28'><span className='text-address-txt'>Rs. {price}</span></li>
              <li className='w-20 max-w-20 flex justify-center'><div className='border border-address-txt rounded w-6 h-6 md:w-8 md:h-8 flex justify-center items-center'>{quantity}</div></li>
              <li className='w-20 max-w-20 md:w-28 md:max-w-28'><span>Rs. {total}</span></li>
              <li><button onClick={remove} className='w-6 h-6 md:w-8 wd:h-8 ml-4 lg:ml-12 flex justify-center items-center'><img src="../assets/Delete.svg" alt="" /></button></li>
            </div>            
        </ul>       
    </div>
  )
}

export default CartItem
