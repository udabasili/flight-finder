import React from 'react'
import { RiSendPlane2Line } from 'react-icons/ri';
import CustomButton from '../custom-button.component';


export default function FlightForm() {
    return (
        <form className='header__form'>
        <div className='form__control'>
            <label className='form__label multiple'>
                <span className='form__label--main'>Where</span>
            </label>
            <input type='text' className='form__input form__input--text' placeholder='Enter your location'/>
            <input type='text' className='form__input form__input--text' placeholder='Enter your destination'/>
        </div>
        <div className='form__control'>
            <label className='form__label'>
                <span className='form__label--main'>When</span>
            </label>
            <input type='date' className=' form__input form__input--date'/>

        </div>
        <div className='form__control'>
            <label className='form__label'>
                <span className='form__label--main'>How many</span>
            </label>
            <input type='number' className='form__input  form__input--number' placeholder='How many people' />
        </div>
        <CustomButton 
                type='submit' 
                title='submit' 
                color='goldenrod'
                icon={<RiSendPlane2Line/>}/>
    </form>
    )
}
