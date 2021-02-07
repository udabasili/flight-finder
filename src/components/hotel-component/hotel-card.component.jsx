import React from 'react'
import { NavLink } from 'react-router-dom';
import StarRating from '../stars/star-rating.component';


const HotelCard = ({
        name,
        price,
        stars,
        image,
        link=null
    }) =>{

        return(
            <div className='card card--list'>
            <div  className='card--list__image'>
                <img src={image} alt={name}/>
            </div>
                <h4 className='card--list__name'>{name}</h4>
                <p className='price'>${price} / Day </p>
                <StarRating starsSelected={stars}/>
                {
                    link &&
                    <NavLink className='card--list__button' to={link} activeClassName={null} >
                        View
                    </NavLink>
                }
        </div>
        )
    
}

export default HotelCard;