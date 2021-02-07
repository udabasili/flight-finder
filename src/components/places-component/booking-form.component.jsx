import React, { useEffect } from 'react';
import Modal from '../modal.component';

export default function FlightBookingForm({onCloseHandler}) {
    

        const [visitDate, setVisitDate] = React.useState(new Date());
        const [data, setData] = React.useState({
            name: '',
            visitTime: '',
            numberOfTickets: "",
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
                visitDate,

            }
            alert(JSON.stringify(values, null, 2));
            
        }

            
    

    return (
        <Modal onSubmitHandler={handleSubmit} onCloseHandler={onCloseHandler}>
        <form className='form form--booking'>
                <div className='form__control'>
                    <label className='form__label'>
                        <span className='form__label--main'>Visit Date</span>
                    </label>
                    <input 
                        type='date' 
                        onChange={e => setVisitDate(e.target.value)} 
                        value={visitDate} 
                        required
                        className=' form__input form__input--date'/>

                </div>
                <div className='form__control'>
                    <label className='form__label'>
                        <span className='form__label--main'>Visit Time</span>
                    </label>
                    <input 
                        type='time' 
                        required
                        name='visitTime'
                        onChange={handleChange} 
                        value={data.visitTime} 
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
