import React from 'react'
import HotelCard from './hotel-card.component'


export default function HotelCardList({data, count}) {
    return (
        <div className='card-list'>
            
            {
                data.map((hotel, index) => {
                    return (
                        <HotelCard
                            name={hotel.name}
                            image={hotel.images[1].default}
                            price={hotel.price}
                            link={`/hotels/${hotel.id}`}
                            stars={hotel.stars}/>
                    )
                
                })
            }
        </div>
    )
}
