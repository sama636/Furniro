import React from 'react'

function CartFooter() {
  return (
    <footer className='px-4 h-56 md:h-[270px] bg-creamy flex justify-center items-center'>
      <div className='grid grid-cols-2 grid-rows-auto md:grid-cols-4 gap-4 xl:gap-12'>
        <div className='flex flex-row items-center gap-2'>
            <img className="w-6 h-6 md:w-[60px] md:h-[60px]" src="../assets/Quality.svg" alt="" />
            <div>
              <h2 className='text-sm md:text-base xl:text-[25px] font-semibold'>High Quality</h2>
              <h3 className='text-xs md:text-lg xl:text-[20px] font-medium text-address-txt'>crafted from top materials</h3>
            </div>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <img className="w-6 h-6 md:w-[60px] md:h-[60px]" src="../assets/guarantee.svg" alt="" />
            <div>
              <h2 className='text-sm md:text-base xl:text-[25px] font-semibold'>Warranty Protection</h2>
              <h3 className='text-xs md:text-lg xl:text-[20px] font-medium text-address-txt'>Over 2 years</h3>
            </div>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <img className="w-6 h-6 md:w-[60px] md:h-[60px]" src="../assets/shipping.svg" alt="" />
            <div>
              <h2 className='text-sm md:text-base xl:text-[25px] font-semibold'>Free Shipping</h2>
              <h3 className='text-xs md:text-lg xl:text-[20px] font-medium text-address-txt'>Order over 150 $</h3>
            </div>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <img className="w-6 h-6 md:w-[60px] md:h-[60px]" src="../assets/customer-support.svg" alt="" />
            <div>
              <h2 className='text-sm md:text-base xl:text-[25px] font-semibold'>H24 / 7 Support</h2>
              <h3 className='text-xs md:text-lg xl:text-[20px] font-medium text-address-txt'>Dedicated support</h3>
            </div>
          </div>
      </div>
        
    </footer>
  )
}

export default CartFooter
