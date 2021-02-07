import { NavLink } from 'react-router-dom';

const FlightCard = ({
        name,
        price,
        image,
        departureDate,
        departureTime,
        flightLength,
        link=null
    }) =>{
        const hours = flightLength.split(":")[0];
        const minutes = flightLength.split(":")[1]

        return(
            <div className='card card--grid'>
            <div  className='card--grid__image'>
                <img src={image} alt={name} />
            </div>
                <h4 className='card--grid__name header-3'>{name}</h4>
                <p className='card--grid__price'>${price}</p>
                <div className='card--grid__departure'>
                    <span className='label'>Departure date: </span>
                    <span className='value'>{new Date(departureDate).toDateString()}</span>
                </div>
                 <div className='card--grid__departure'>
                    <span className='label'>Departure Time: </span>
                    <span className='value'>{departureTime}</span>
                </div>
                <div className='card--grid__departure'>
                    <span className='label'>Flight Length: </span>
                    <span className='value'>{`${hours} hours ${minutes} minutes`}</span>
                </div>
                {
                    link &&
                    <NavLink className='card--grid__button' to={link} activeClassName={null} >
                        View
                    </NavLink>
                }
        </div>
        )
    
}

export default FlightCard;