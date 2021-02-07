import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import StarRating from '../stars/star-rating.component';
import CustomHeader from '../custom-header.component';
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';
import { RiSendPlane2Line } from 'react-icons/ri';
import CustomButton from '../custom-button.component';
import PlacesBookingForm from './booking-form.component';
import { placeById } from '../../redux/places/place.selectors';


function CollectionDetails({place,...props}) {

    const url = props.match.url;
    let placeData = place[0]   

    const images =[
        placeData['images/0/images-src'],
        placeData['images/1/images-src'],
        placeData['images/2/images-src'],
        placeData['images/2/images-src']
    ]

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
                <PlacesBookingForm onCloseHandler={() =>modalToggleHandler(false)}/>
            }
            <CustomHeader title='places' link={url}/>
			<div className='container'>
                <div className='detail'>
                    <div className='detail__images'>
                        <div className='detail__preview-image'>
                            <BiLeftArrow className='left' onClick={leftSlideButton} />
                            <BiRightArrow className='right' onClick={rightSlideButton} />
                             <img src={images[imageIndex]} alt={placeData.title}/>
                        </div>
                        <div className='detail__list-images'>
                            {images.map((img, i) =>(
                                <div 
                                    onClick={() =>setImageIndex(i)}
                                    className={`detail__list-image ${imageIndex === i ? "active" : ""}`}>
                                    <img src={img} alt={`clip-${i}`}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='detail__info'>
                        <div className='u-center-text u-margin-bottom-medium'>
                            <h2 className='header-2'>{placeData.title}</h2>
                            <h3 className='header-3'> {placeData.location}</h3>
                            
                        </div>
                            <ul className='detail__list'>
                                <li className='detail__item'>
                                    Location: {placeData.location}
                                </li>
                                <li  className='detail__item'>
                                    Price: {placeData.price} days
                                </li>
                                <li  className='detail__item'>
                                   Rating: <StarRating starsSelected={placeData.rating} />
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
    place: placeById(ownProps.match.params.placeId)(state)
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetails)