import React from 'react'
import Star from './star.component'

export default function StarRating({starsSelected=0, totalRating=5}) {
    return (
        <div className="star-rating">
            {[...Array(totalRating)].map((star, index) =>(
                <Star
                    key={index}
                    selected={index < starsSelected}
                />
            ))}
        </div>
    )
}
