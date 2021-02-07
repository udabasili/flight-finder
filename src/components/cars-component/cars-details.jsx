import React,{useEffect, useState} from 'react';
import { connect } from 'react-redux';
import StarRating from '../stars/star-rating.component';
import CustomHeader from '../custom-header.component';
import { RiSendPlane2Line } from 'react-icons/ri';
import CustomButton from '../custom-button.component';
import FlightBookingForm from './booking-form.component';
import { carById } from '../../redux/cars/cars.selector';


function FlightDetails({car,...props}) {

     const url = props.match.url;
    let carData = car[0];
    console.log(car)
    const [showModal, modalToggleHandler] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {
            
        }
    }, [])

     const bookRoomHandler = () => {
        modalToggleHandler(true)
    }
    
    return (
        <React.Fragment>
            {
                showModal &&
                <FlightBookingForm onCloseHandler={() =>modalToggleHandler(false)}/>
            }
            <CustomHeader title={carData["Name"]} link={url}/>
			<div className='container'>
                <div className='detail detail--car'>
                    <div className='detail__details'>



                        <div className='detail__details--2'>
                            <ul className='list'>
                                <li className='item'>
                                    <span className='label'>Miles per Gallon</span>
                                    <span className='value'>{carData["Miles_per_Gallon"]}</span>
                                </li>
                                <li className='item'>
                                    <span className='label'>Horse Power</span>
                                    <span className='value'>{carData["Horsepower"]}</span>
                                </li>
                                <li className='item'>
                                    <span className='label'>Acceleration</span>
                                    <span className='value'>{carData["Acceleration"]}</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='detail__info'>
                            <div className='u-center-text u-margin-bottom-medium'>
                                <h2 className='header-2'>{carData.Name}</h2>
                                <h3 className='header-3'> {carData.Origin}</h3>
                                
                            </div>
                            <ul className='detail__list'>
                                <li className='detail__item'>
                                    Price: ${carData.Price}
                                </li>
                                <li  className='detail__item'>
                                    Cylinders: {carData["Cylinders"]}
                                </li>
                                <li  className='detail__item'>
                                   Weight in lbs: {carData["Weight_in_lbs"]}
                                </li>
                                <li  className='detail__item'>
                                   Rating: <StarRating starsSelected={carData.Rating} />
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
    car: carById(ownProps.match.params.carId)(state)
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetails)