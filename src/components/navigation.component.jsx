import React, { useEffect, useState } from 'react'
import { SiFloatplane } from 'react-icons/si';
import { NavLink, useHistory } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { currency } from '../data/currency.data';


export default function Navigation() {

    const history = useHistory()

    const [currencyValue, setCurrency] = useState('USD')

    // function screenChangeHandler(mm){
    //     const dropdown = document.querySelector('#auth-dropdown');
    //     if(mm.matches){
    //         dropdown.addEventListener('click', () =>{
    //         let menu  = dropdown.querySelector('.menu');
    //         dropdown.classList.toggle('active');
    //         if (menu.style.display === 'block'){
    //             menu.style.display = 'none'
    //         }else{
    //             menu.style.display = 'block'
    //         }
    //     })
    //         }else{
    //         dropdown.classList.remove('active');
    //         let menu  = dropdown.querySelector('.menu');
    //         menu.style = null

    //     }
    // }
    
    const dropdownHandler = () =>{
        document.querySelector('.navigation__checkbox').checked = false

    }
    

    useEffect(() => {
        const widthMatch = window.matchMedia("(max-width: 1200px)");
        history.listen(() =>{
            dropdownHandler()
        })
        
        // screenChangeHandler(widthMatch)
        // widthMatch.addEventListener('change', screenChangeHandler)

        return () =>{
            // widthMatch.removeEventListener('change', screenChangeHandler)

        }
        
       
    }, [])
    return (
        <React.Fragment>
            <div className='top-bar'>
            
            </div>
            <nav className='navigation'>
                <div className='logo'>
                    <SiFloatplane className='logo__icon'/>
                    <span className='logo__text'>
                        <span>Flight</span>
                        Finder
                    </span>
                </div>
                <input type='checkbox' id='toggler' className='navigation__checkbox'/>
                <label className='navigation__button' htmlFor='toggler'>
                    <span className='navigation__icon'>

                    </span>
                </label>
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <NavLink exact to='/' className='navigation__link' activeClassName='active-nav' >Home</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink to='/hotels' className='navigation__link' activeClassName='active-nav' >Hotel</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink to='/flights' className='navigation__link' activeClassName='active-nav'>Flight</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink to='/car-rental' className='navigation__link' activeClassName='active-nav'>Car Rental</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink to='/places' className='navigation__link' activeClassName='active-nav'>Places</NavLink>
                    </li>

                    {/* <li id='auth-dropdown' className='navigation__item'>
                            <span>Auth</span>
                        <ul className='menu'>
                            <li className='menu__item'>
                                Register
                            </li>
                            <li className='menu__item'>
                                Login
                            </li>
                        </ul>
                    </li> */}
                </ul>
                <div className='user-nav'>
                    <div className='user-nav__profile'>
                            <FaUserCircle/>
                    </div>
     
                        <select value={currencyValue} className='user-nav__currency' onChange={e => setCurrency(e.target.value)}>
                            {Object.keys(currency).map((curren) =>(
                                <option className='menu__item' key={curren} value={curren} >
                                    {curren}
                                </option>
                            ))}
                            
                        </select>
                </div>
            </nav>
        </React.Fragment>
        
    )
}
