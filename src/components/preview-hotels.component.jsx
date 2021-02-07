import React from 'react'
import { hotels } from '../data/hotels.data'
import HotelCard from './hotel-component/hotel-card.component'


export default function PreviewHotels() {
    return (
        <section className='section-preview-hotels'>
            <div className='container'>
                <div className='u-margin-bottom-large u-center-text'>
                    <h2 className='header-2'>Hotels Preview</h2>
                </div>
                    <div className='preview-hotels'>
                        {
                            hotels.filter((hotel, index) => ( index < 4 )).map((hotel, index) => {
                                return (
                                    <HotelCard
                                        name={hotel.name}
                                        key={hotel.id}
                                        image={hotel.images[1].default}
                                        price={hotel.price}
                                        link={`/hotels/${hotel.id}`}
                                        stars={hotel.stars}/>
                                )
                                
                                })
                        }
                    </div>
                </div>
        </section>

    )
}
