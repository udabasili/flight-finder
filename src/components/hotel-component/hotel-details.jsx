import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import StarRating from '../stars/star-rating.component';
import { hotelById } from '../../redux/hotels/hotel.selectors';
import CustomHeader from '../custom-header.component';
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';
import { RiSendPlane2Line } from 'react-icons/ri';
import CustomButton from '../custom-button.component';
import HotelBookingForm from './booking-form.component';


function CollectionDetails({hotel,...props}) {

    const url = props.match.url;
    let hotelData = hotel[0]
    const [imageIndex, setImageIndex] = useState(0)
    const [showModal, modalToggleHandler] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {
            
        }
    }, [])


    const leftSlideButton = () =>{
        console.log(imageIndex)
        setImageIndex(currentIndex =>{
            let index = currentIndex === 0 ? 3 : currentIndex - 1;
            return index

        })
    }

    const rightSlideButton = () =>{
        setImageIndex(currentIndex =>{
            let index = currentIndex === 3 ? 0 : currentIndex + 1;
            return index

        })
    }

    const bookRoomHandler = () => {
        modalToggleHandler(true)
    }

    return (
        <React.Fragment>
            {
                showModal &&
                <HotelBookingForm onCloseHandler={() =>modalToggleHandler(false)}/>
            }
            <CustomHeader title={hotelData.name} link={url}/>
			<div className='container'>
                <div className='detail'>
                    <div className='detail__images'>
                        <div className='detail__preview-image'>
                            <BiLeftArrow className='left' onClick={leftSlideButton} />
                            <BiRightArrow className='right' onClick={rightSlideButton} />
                             <img src={hotelData.images[imageIndex].default} alt={hotelData.name}/>
                        </div>
                        <div className='detail__list-images'>
                            {hotelData.images.map((img, i) =>(
                                <div 
                                    onClick={() =>setImageIndex(i)}
                                    className={`detail__list-image ${imageIndex === i ? "active" : ""}`}>
                                    <img src={img.default} alt={`clip-${i}`}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='detail__info'>
                        <div className='u-center-text u-margin-bottom-medium'>
                            <h2 className='header-2'>{hotelData.name}</h2>
                            <h3 className='header-3'> {hotelData.country}</h3>
                            
                        </div>
                            <ul className='detail__list'>
                                <li className='detail__item'>
                                    Security Deposit: ${hotelData.security}
                                </li>
                                <li  className='detail__item'>
                                    Minimum Stay: {hotelData.minimumStay} days
                                </li>
                                <li  className='detail__item'>
                                   Rating: <StarRating starsSelected={hotelData.stars} />
                                </li>
                            </ul>
                         <CustomButton 
                            title='book' 
                            color='goldenrod'
                            onClick={bookRoomHandler}
                            icon={<RiSendPlane2Line/>}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
    hotel: hotelById(ownProps.match.params.hotelId)(state)
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetails)