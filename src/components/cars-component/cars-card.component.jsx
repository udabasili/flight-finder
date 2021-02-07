import { NavLink } from 'react-router-dom';
import StarRating from '../stars/star-rating.component';


const CarCard = ({
        name,
        price,
        stars,
        image,
        horsePower,
        milesPerGallon,
        link=null
    }) =>{

        return(
            <div className='card card--grid'>
            <div  className='card--grid__image'>
                <img src={image} alt={name} style={{objectFit: 'cover'}} />
            </div>
                <h4 className='card--grid__name header-3'>{name}</h4>
                <p className='card--grid__price'>${price}</p>
                <div className='card--grid__departure'>
                    <span className='label'>Horse Power: </span>
                    <span className='value'>{horsePower}</span>
                </div>
                 <div className='card--grid__departure'>
                    <span className='label'>Miles Per Gallon: </span>
                    <span className='value'>{milesPerGallon}</span>
                </div>
                <div className='card--grid__departure'>
                    <span className='label'>Rating: </span>
                    <span className='value'><StarRating starsSelected={stars}/></span>
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

export default CarCard;

