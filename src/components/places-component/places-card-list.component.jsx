import React from 'react'
import PlaceCard from './places-card.component'


export default function PlaceCardList({data, count}) {

    return (
        <div className='card-list card-list--grid'>
            
            {
                data.map((place, index) => {
                    
                    return (
                        <PlaceCard
                            key={place.id}
                            name={place.title}
                            image={place['images/0/images-src']}
                            price={place.price}
                            location={place.location}
                            link={`/places/${place.id}`}
                            stars={place.rating}/>
                    )
                
                })
            }
        </div>
    )
}
