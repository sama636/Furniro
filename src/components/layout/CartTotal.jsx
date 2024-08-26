import React, { useContext } from 'react'
import { cartcontext } from './GlobalContext2.jsx';
import { Link } from 'react-router-dom';

function CartTotal() {
  const {cart} = useContext(cartcontext)

  const subtotal = cart.map(item => 
    <div key={item.name} className='self-start flex gap-14 ml-4 md:ml-[20%]'>
      <h5 className='font-medium'>Subtotal</h5>
      <span className='text-address-txt'>Rs. {item.total}</span>
    </div> 
  )

  function totalnum(){
    let num = 0
    for(let i = 0; i<cart.length; i++){
      num+= cart[i].total
    }
    return num 
  }

  const total = totalnum() 

  return (
    <div className='justify-self-center md:justify-self-start w-64 h-auto md:w-96 md:h-80 lg:w-[393px] lg:min-h-[390px] lg:h-auto bg-creamy flex flex-col items-center pt-4 gap-2 md:gap-4 md:gap-8'>
      <h3 className='text-2xl md:text-[32px] font-semibold mb-6'>Cart Totals</h3>
      {subtotal}
      <div className='self-start flex gap-14 ml-4 items-center md:ml-[20%] mb-2'>
        <h4 className='font-medium'>Total</h4>
        <span className='text-lg md:text-xl text-brownish-creamy font-medium'>Rs. {cart.length!==0?total:0}</span>
      </div>
      <button className='mb-14 w-32 h-12 md:min-w-[222px] md:min-h-[58px] border-black border rounded-lg text-lg md:text-xl'><Link to="/checkout">Check out</Link></button>
    </div>
  )
}

export default CartTotal
