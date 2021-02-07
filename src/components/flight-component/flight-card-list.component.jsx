import React from 'react'
import FlightCard from './flight-card.component';

export default function FlightCardList({data, count}) {

    return (
        <div className='card-list card-list--grid'>
            
            {
                data.map((d, index) => {
                    return (
                        <FlightCard
                            key={d.id}
                            name={d["Airline Name"]}
                            departureDate={d["Date"]}
                            departureTime={d['TIME']}
                            flightLength={d["LENGTH"]}
                            image={`https://flightaware.com/images/airline_logos/90p/${d.ICAO}.png`}
                            price={d["COST"]}
                            link={`/flights/${d.id}`}
                            stars={d.Rating}/>
                    )
                
                })
            }
        </div>
    )
}
