import React from 'react'

function Description({item}) {
  return (
    <div className='flex flex-col items-center'>
        <p className="text-sm text-address-txt pb-4 px-8 lg:w-1026px lg:text-base">{item.long_desc}</p>
        <div className="mx-6 flex flex-col gap-4 justify-center self-center lg:flex-row">
            <div className="flex bg-creamy w-80 h-40 rounded-md lg:w-96 lg:h-72 xl:w-600px xl:h-96 ">
                <img  src="../assets/sofa.svg" alt="" />
            </div>
            <div className="flex bg-creamy w-80 h-40 rounded-md lg:w-96 lg:h-72 xl:w-600px xl:h-96">
                <img src="../assets/sofa2.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Description
