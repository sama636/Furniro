import React from 'react'
import ReviewCard from './ReviewCard'

function Reviews({item}) {
    const reviews = item.reviews.data.map(review => 
    <ReviewCard 
    key={review.id}
    name={"User "+review.id} 
    rating={review.attributes.rating} 
    review={review.attributes.content}
    />)

    return (
        <div className='w-full h-42 p-2 flex flex-row overflow-x-scroll gap-4'>
            {reviews}
        </div>
    )
}

export default Reviews
