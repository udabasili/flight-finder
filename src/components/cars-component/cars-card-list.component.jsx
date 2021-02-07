import React from 'react'
import CarCard from './cars-card.component'


export default function CarCardList({data, count}) {

    return (
        <div className='card-list card-list--grid'>
            
            {
                data.map((car, index) => {
                    
                    return (
                        <CarCard
                            key={car.id}
                            name={car.Name.toUpperCase()}
                            image={car.image}
                            price={car.Price}
                            milesPerGallon={car["Miles_per_Gallon"]}
                            horsePower={car["Horsepower"]}
                            link={`/car-rental/${car.id}`}
                            stars={car.Rating}/>
                    )
                
                })
            }
        </div>
    )
}
