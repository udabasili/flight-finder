import React from 'react'

export default function CustomButton({title, color='black', icon, classProp='',  ...otherProps}) {
    return (
        <button className={`custom-button  ${classProp}`} {...otherProps} style={{background: color }} >
            <span className='custom-button__text'>{title}</span>
            <span className='custom-button__icon' style={{background: `dark${color}`}}>
                {icon}
            </span>
        </button>
    )
}
