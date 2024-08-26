import React, { useContext } from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import { cartcontext } from './GlobalContext2.jsx';

function CartMain() {
  const {cart} = useContext(cartcontext);
  const items = cart.map(item => 
    <CartItem key={item.name} id={item.id} image={item.image} name={item.name} price={item.price} quantity={item.quantity} total={item.total}/>
  )


  return (
    <main className='text-xs md:text-base px-6 py-10 lg:px-24 lg:py-16 bg-white w-full flex flex-col items-center'>
        <div className='grid grid-cols-1 grid-rows-auto xl:grid-cols-2-cart-main gap-10'>
            <div className='flex flex-col w-377px md:w-700px gap-6 md:gap-10 lg:w-817px'>
                <ul className='hidden bg-creamy w-377px h-55px md:w-700px lg:w-817px md:flex md:flex-row md:justify-start md:items-center md:gap-4 lg:gap-8'>
                    <li className='w-20 md:mr-2 md:ml-137px md:w-32'>Product</li>
                    <li className='w-16 md:mr-6 md:w-28'>Price</li>
                    <li className='w-20 text-center'>Quantity</li>
                    <li className='w-20 mr-3 md:w-28'>Subtotal</li>
                </ul>
                {cart.length!==0?items:<div className='flex justify-center font-semibold text-address-txt text-lg'>The cart is empty</div>}
            </div>
            <CartTotal key={1}/>
        </div>
    </main>
  )
}

export default CartMain
