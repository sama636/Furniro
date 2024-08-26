import React from 'react'

function Star({rating}) {
    const full = "../assets/FullStar.svg"
    const half = "../assets/HalfStar.svg"
    return (
        <div className="flex">
            <img className={rating<0.5?"w-4 h-4 opacity-0":"w-4 h-4"}src={rating<1?half: full} alt="" />
            <img className={rating<1.5?"w-4 h-4 opacity-0":"w-4 h-4"}src={rating<2?half: full} alt="" />
            <img className={rating<2.5?"w-4 h-4 opacity-0":"w-4 h-4"}src={rating<3?half: full} alt="" />
            <img className={rating<3.5?"w-4 h-4 opacity-0":"w-4 h-4"}src={rating<4?half: full} alt="" />
            <img className={rating<4.5?"w-4 h-4 opacity-0":"w-4 h-4"}src={rating<5?half: full} alt="" />
        </div>
    )
}

export default Star
