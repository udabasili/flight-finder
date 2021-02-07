import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Modal({children, onCloseHandler = f => f, onSubmitHandler = f => f }) {
    return (
        <div className='modal'>
            <div className='modal__content'>
                <div className='modal__header'>
                    <div className='close' onClick={onCloseHandler}>
                        <AiFillCloseCircle/>
                    </div>
                    <div className='submit' onClick={onSubmitHandler}>
                        <AiFillCheckCircle/>
                    </div>
                    <div className='u-center-text u-margin-bottom-medium'>
                        <h2 class='header-2'>
                            Make Booking
                        </h2>
                    </div>
                    
                </div>
                <div className='modal__body'>
                    {children}
                </div>
            </div>
            
            
        </div>
    )
}
