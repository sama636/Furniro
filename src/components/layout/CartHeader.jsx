import React from 'react'

function CartHeader() {
  return (
    <div className='w-full h-52 md:h-316px bg-headerbg bg-cover bg-no-repeat flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <img className="w-77px h-77px" src="../assets/logo2.svg" alt="" />
            <h1 className="text-3xl md:text-5xl font-medium mb-3">Cart</h1>
            <h2 className='text-sm md:text-base flex flex-row items-center gap-2'>Home <img className="w-4 h-4"src="../assets/arrow.svg" alt="" /> Cart</h2>
        </div>
    </div>
  )
}

export default CartHeader
