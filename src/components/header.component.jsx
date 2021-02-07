import React, { useState } from 'react'
import CarsForm from './header-components/cars-form';
import FlightForm from './header-components/flights-form';
import HotelForm from './header-components/hotels-form';
import TourForm from './header-components/tours-form';


export default function Header() {

    const [activeNav, setActiveNav] = useState('flights');

    const component = () =>{
        switch (activeNav){
            case 'flights':
                return (<FlightForm/>)
            case 'hotels':
                return <HotelForm/>
            case 'cars':
                return <CarsForm/>
            case 'tours':
                return <TourForm/>
            default:
                return <FlightForm/>
        }
    }
    return (
        <header className='header' >
            <div className='header__content'>
                <nav className='header__nav'>
                    <ul className='header__nav--list'>
                        <li 
                            onClick={e => setActiveNav(e.target.getAttribute('name'))}
                            name='flights' 
                            className={`header__nav--item  ${(activeNav === 'flights') ? 'active': ''}`}>
                                Flights
                        </li>
                        <li 
                            onClick={e => setActiveNav(e.target.getAttribute('name'))}
                            name='hotels' 
                            className={`header__nav--item  ${(activeNav === 'hotels') ? 'active' : ""}`}>
                                Hotels
                        </li>
                        <li 
                            onClick={e => setActiveNav(e.target.getAttribute('name'))}
                            name='tours' 
                            className={`header__nav--item  ${(activeNav === 'tours') ? 'active' : ""}`}>
                                Tours
                        </li>
                        <li 
                            onClick={e => setActiveNav(e.target.getAttribute('name'))}
                            name='cars' 
                            className={`header__nav--item  ${(activeNav === 'cars' ) ? 'active' : ""}`}>
                                Cars
                        </li>

                    </ul>
                </nav>
                {component()}
            </div>
        </header>
    )
}
