import React from 'react'
import CustomButton from '../custom-button.component'
import { RiSendPlane2Line } from 'react-icons/ri';

export default function TourForm() {
    return (
        <form className='header__form'>
            <div className='form__control'>
                <label className='form__label multiple'>
                    <span className='form__label--main'>Where</span>
                </label>
                <input type='text' className='form__input form__input--text' placeholder='Where are your going'/>
            </div>
            <div className='form__control'>
                <label className='form__label'>
                    <span className='form__label--main'>When</span>
                </label>
                <input type='date' className=' form__input form__input--date'/>

            </div>
            <div className='form__control'>
                <label className='form__label'>
                    <span className='form__label--main'>&nbsp;</span>
                </label>
                <input type='number' className='form__input  form__input--number' placeholder='How many people'/>
                <input type='number' className='form__input  form__input--number' placeholder='Budget'/>

            </div>
            <CustomButton 
                type='submit' 
                title='submit' 
                color='goldenrod'
                icon={<RiSendPlane2Line/>}/>
        </form>
    )
}
