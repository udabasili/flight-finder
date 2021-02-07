import React from 'react'
import { NavLink } from 'react-router-dom';


export default function CustomHeader({title, link}) {

    const linkArray = link.split('/').filter(a => a.length !== 0);

    return (
        <div className='custom-header u-center-text'>
            <h1 className='header-1'>{title}</h1>
            <ul className='custom-header__list'>
                <li className='custom-header__item'>
                    <NavLink exact to='/' className='custom-header__link' activeClassName='active-nav--custom-header' >
                        Home
                    </NavLink>
                </li>
                {linkArray.map((item, i) =>(
                    <li className='custom-header__item' key={i}>
                        <NavLink exact to={`/${linkArray.slice(0, i + 1).join('/')}`}
                             className='custom-header__link' activeClassName='active-nav--custom-header'>
                            {item}
                        </NavLink>
                    </li>
                        
                    ))}
            </ul>
        </div>
    )
}
