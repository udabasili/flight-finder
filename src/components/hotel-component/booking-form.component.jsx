import React, { useEffect } from 'react';
import Modal from '../modal.component';

export default function HotelBookingForm({onCloseHandler}) {
    

        const [checkInDate, setCheckInDate] = React.useState(new Date());
        const [checkOutDate, setCheckOutDate] = React.useState(new Date());
        const [data, setData] = React.useState({
            numberOfRooms: '',
            numberOfOccupants: "",
            lengthOfStay: ""
        });

        useEffect(() => {
            window.scrollTo(0, 0)

        }, [])

        const handleChange = (e) =>{
            const {name, value} = e.target
            setData(prevState => ({
                ...prevState,
                [name]: value

            }))
        }

        const handleSubmit = () => {
            let values = {
                ...data,
                checkInDate,
                checkOutDate
            }
            alert(JSON.stringify(values, null, 2));
            
        }

            
    

    return (
        <Modal onSubmitHandler={handleSubmit} onCloseHandler={onCloseHandler}>
        <form className='form form--booking'>
                <div className='form__control'>
                    <label className='form__label'>
                        <span className='form__label--main'>Check In</span>
                    </label>
                    <input 
                        type='date' 
                        onChange={e => setCheckInDate(e.target.value)} 
                        value={checkInDate} 
                        required
                        className=' form__input form__input--date'/>

                </div>
                <div className='form__control'>
                    <label className='form__label'>
                        <span className='form__label--main'>Check Out</span>
                    </label>
                    <input 
                        type='date' 
                        required
                        onChange={e => setCheckOutDate(e.target.value)} 
                        value={checkOutDate} 
                        className=' form__input form__input--date'/>

                </div>
                <div className='form__control'>
                    <label className='form__label'>
                        <span className='form__label--main'>Number Of Rooms</span>
                    </label>
                    <input 
                        type='number'
                        name="numberOfRooms" 
                        value={data.numberOfRooms}
                        onChange={handleChange}
                        className='form__input  
                        form__input--number' 
                        required
                        placeholder='How many rooms'/>

                </div>
                <div className='form__control'>
                    <label className='form__label'>
                        <span className='form__label--main'>Number Of Occupants</span>
                    </label>
                    <input 
                        type='number'
                         name="numberOfOccupants" 
                        value={data.numberOfOccupants}
                        onChange={handleChange}
                        required
                        className='form__input  
                        form__input--number' 
                        placeholder='How many Occupants'/>

                </div>
                <div className='form__control'>
                    <label className='form__label'>
                        <span className='form__label--main'>Length Of Stay</span>
                    </label>
                    <input 
                        type='number'
                        required
                        name="lengthOfStay" 
                        value={data.lengthOfStay}
                        onChange={handleChange}
                        className='form__input  
                        form__input--number' 
                        placeholder='How many Occupants'/>

                </div>

               
              
            </form>
        </Modal>
    )
}
