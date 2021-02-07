import React, { useEffect } from 'react';
import Modal from '../modal.component';

export default function FlightBookingForm({onCloseHandler}) {
    

        const [departureDate, setDepatureDate] = React.useState(new Date());
        const [data, setData] = React.useState({
            name: '',
            departureTime: '',
            numberOfTickets: "",
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
                departureDate,

            }
            alert(JSON.stringify(values, null, 2));
            
        }

            
    

    return (
        <Modal onSubmitHandler={handleSubmit} onCloseHandler={onCloseHandler}>
        <form className='form form--booking'>
                <div className='form__control'>
                    <label className='form__label'>
                        <span className='form__label--main'>Departure Date</span>
                    </label>
                    <input 
                        type='date' 
                        onChange={e => setDepatureDate(e.target.value)} 
                        value={departureDate} 
                        required
                        className=' form__input form__input--date'/>

                </div>
                <div className='form__control'>
                    <label className='form__label'>
                        <span className='form__label--main'>Departure Time</span>
                    </label>
                    <input 
                        type='time' 
                        required
                        name='departureTime'
                        onChange={handleChange} 
                        value={data.departureTime} 
                        className=' form__input form__input--date'/>

                </div>
                <div className='form__control'>
                    <label className='form__label'>
                        <span className='form__label--main'>Name</span>
                    </label>
                    <input 
                        type='text'
                        name="name" 
                        value={data.name}
                        onChange={handleChange}
                        className='form__input  
                        form__input--text' 
                        required
                        placeholder='Your Full Name'/>

                </div>
                <div className='form__control'>
                    <label className='form__label'>
                        <span className='form__label--main'>Number Of Tickets</span>
                    </label>
                    <input 
                        type='number'
                         name="numberOfTickets" 
                        value={data.numberOfTickets}
                        onChange={handleChange}
                        required
                        className='form__input  
                        form__input--number' 
                        placeholder='How many Tickets'/>

                </div>

            </form>
        </Modal>
    )
}
