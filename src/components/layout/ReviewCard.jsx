import React from 'react'
import Star from './Star'

function ReviewCard(props) {
  return (
    <div className='border border-black rounded-lg p-4'>
        <div className='flex flex-row gap-2 mb-2'>
            <img className="w-10 h-10" src="../assets/user.svg" alt="" />
            <div>
                <h3>{props.name}</h3>
                <Star key={1} rating={props.rating}/>
            </div>
        </div>
        
        <p className='w-80 h-32'>{props.review}</p>
    </div>
  )
}

export default ReviewCard
