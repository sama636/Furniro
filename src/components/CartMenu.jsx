import React, { useContext } from 'react'
import {createPortal} from 'react-dom';
import { cartcontext } from './layout/GlobalContext2';
import CartMenuItem from './layout/CartMenuItem';
import { Link } from 'react-router-dom';

function CartMenu() {
    const {closeCartMenu} = useContext(cartcontext);
    const {cartMenu} = useContext(cartcontext);
    const {cart} = useContext(cartcontext);

    const items = cart.map(item => 
    <CartMenuItem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} quantity={item.quantity}/>
    )

    function totalnum(){
        let num = 0
        for(let i = 0; i<cart.length; i++){
          num+= cart[i].total
        }
        return num 
    }

    const total = totalnum() 

    if (!cartMenu) return null
    return createPortal(
        <div className='fixed top-0 start-0 w-full h-screen'>
            <div className='bg-white w-[60%] h-[70%] md:w-[417px] md:h-[600px] xl:h-[746px] absolute right-0 top-0 z-20'>
                <header className='w-full flex flex-col p-6 gap-2 md:pt-8 md:pb-6 md:px-6'>
                    <div className='w-full flex flex-row items-center'>
                        <h1 className='w-52 md:text-[26px] md:w-80 font-semibold'>Shopping Cart</h1>
                        <img className="ml-4 w-4 h-5" onClick={closeCartMenu} src="../assets/closecart.svg" alt="" />
                    </div>
                </header>
                <hr className='ml-6 w-36 md:w-72'/>
                <main className='py-4 px-4 flex flex-col overflow-y-scroll h-72 xl:h-[500px] gap-2'>
                    {items}
                </main>
                <footer className='absolute bottom-0 right-0 w-full'>
                    <div className='p-2 text-sm md:text-base p-6'>
                        <span>Subtotal</span>
                        <span className='ml-10 font-semibold text-brownish-creamy'>Rs. {cart.length!==0?total:0}</span>
                    </div>
                    <hr />
                    <div className='flex justify-center py-4 md:py-6'>
                        <button onClick={closeCartMenu} className='text-sm border border-black rounded-xl text-center px-2 py-1 md:px-7 mr-2 md:mr-4'><Link to="/cart">Cart</Link></button>
                        <button onClick={closeCartMenu} className='text-sm border border-black rounded-xl text-center px-2 py-1 md:px-7 mr-2 md:mr-4'><Link to="/checkout">Checkout</Link></button>
                        <button onClick={closeCartMenu} className='text-sm border border-black rounded-xl text-center px-2 py-1 md:px-7'>Comparison</button>
                    </div>
                </footer>
            </div>
            <div onClick={closeCartMenu} className='w-full h-screen bg-black opacity-20 z-10 absolute'></div> 
        </div>

    , document.body
    )
}

export default CartMenu
