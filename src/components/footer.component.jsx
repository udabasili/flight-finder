import React from 'react'
import { SiFloatplane } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='logo'>
                <SiFloatplane className='logo__icon'/>
                <span className='logo__text'>
                    <span>Flight</span>
                    Finder
                </span>
            </div>
            <div className="footer__navigation">
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <NavLink exact to='/' className='footer__link' activeClassName='active-nav--footer' >Home</NavLink>
                        </li>
                        <li className='footer__item'>
                            <NavLink to='/hotels' className='footer__link' activeClassName='active-nav--footer' >Hotel</NavLink>
                        </li>
                        <li className='footer__item'>
                            <NavLink to='/flights' className='footer__link' activeClassName='active-nav--footer'>Flight</NavLink>
                        </li>
                        <li className='footer__item'>
                            <NavLink to='/car-rental' className='footer__link' activeClassName='active-nav--footer'>Car Rental</NavLink>
                        </li>
                        <li className='footer__item'>
                            <NavLink to='/places' className='footer__link' activeClassName='active-nav--footer'>Places</NavLink>
                        </li>
                    </ul>
                </div>
                <p className="footer__copyright">
                     &copy; Acumen Developers 2020
                </p>
        </footer>
    )
}
