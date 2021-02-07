import React,{useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { flightById } from '../../redux/flights/flight.selectors';
import StarRating from '../stars/star-rating.component';
import CustomHeader from '../custom-header.component';
import { RiSendPlane2Line } from 'react-icons/ri';
import { RiFlightTakeoffLine } from 'react-icons/ri';
import CustomButton from '../custom-button.component';
import FlightBookingForm from './booking-form.component';


function FlightDetails({flight,...props}) {

     const url = props.match.url;
    let flightData = flight[0];
    const hours = flightData["LENGTH"].split(":")[0];
    const minutes = flightData["LENGTH"].split(":")[1]
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
            <CustomHeader title={flightData["Airline Name"]} link={url}/>
			<div className='container'>
                <div className='detail detail--flight'>
                    <div className='detail__details'>

                        <div className='detail__details--1'>
                            <h2 className='header-3'>
                                <RiFlightTakeoffLine style={{marginRight: '2rem'}}/>
                                {flightData["Country"]} to {flightData["Destination"]}
                            </h2>
                        </div>

                        <div className='detail__details--2'>
                            <ul className='list'>
                                <li className='item'>
                                    <span className='label'>Departure Date</span>
                                    <span className='value'>{new Date(flightData["Date"]).toDateString()}</span>
                                </li>
                                <li className='item'>
                                    <span className='label'>Departure Time</span>
                                    <span className='value'>{flightData["TIME"]}</span>
                                </li>
                                <li className='item'>
                                    <span className='label'>Length of Flight</span>
                                    <span className='value'>{`${hours} hours ${minutes} minutes`}</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='detail__info'>
                            <ul className='detail__list'>
                                <li className='detail__item'>
                                    Price: ${flightData.COST}
                                </li>
                                <li  className='detail__item'>
                                    Stops: {flightData["stops"]}
                                </li>
                                <li  className='detail__item'>
                                   Class: {flightData["Class"]}
                                </li>
                                <li  className='detail__item'>
                                   Rating: <StarRating starsSelected={flightData.Rating} />
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
    flight: flightById(ownProps.match.params.flightId)(state)
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetails)