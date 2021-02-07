import React, { useEffect, useState } from 'react'
import CustomButton from '../custom-button.component';
import { RiFilter3Line } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
import { hotelsCount } from '../../redux/hotels/hotel.selectors';
import { connect } from 'react-redux';
import StarRating from '../stars/star-rating.component';
import { setHotelFilter } from '../../redux/hotels/hotel.actions';

function Filter({hotelNum, setHotelFilter}) {
    

    const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null)
    const [rating, setRating] = useState(null)

    function screenChangeHandler(mm){
        const filterPanel = document.querySelector('.filter__panel');
                const filterBackground = document.querySelector('.filter__background');
            if(!mm.matches){
                
                filterBackground.style.display = 'none'
                filterPanel.style.display = 'grid'
            }else{
                filterPanel.style.display = 'none'

            }
    }

    useEffect(() => {
        setHotelFilter({})
        const widthMatch = window.matchMedia("(max-width: 900px)")
        if (!widthMatch.matches){
            const filterPanel = document.querySelector('.filter__panel');
            const filterBackground = document.querySelector('.filter__background');
            filterBackground.style.display = 'none';
            filterPanel.style.display = 'grid';
        }
        widthMatch.addEventListener('change', screenChangeHandler)
        return () => {
            widthMatch.removeEventListener('change', screenChangeHandler)
        }
    }, [setHotelFilter])

    const openFilterHandler = () =>{
        const filterPanel = document.querySelector('.filter__panel');
        const filterBackground = document.querySelector('.filter__background');
        filterBackground.style.display = 'block'
        filterPanel.style.display = 'grid'

    }

    const closeFilterHandler = () =>{
        const filterPanel = document.querySelector('.filter__panel');
        const filterBackground = document.querySelector('.filter__background');
        filterBackground.style.display = 'none'
        filterPanel.style.display = 'none'
    }

   

    const setPriceRange = (min, max) => (e) => {
        setMinPrice(min);
        setMaxPrice(max);
        
    }

    const submitFilter = () =>{
        const filters = {
            pricesFilter:{
                min: minPrice,
                max: maxPrice
            },
            ratingFilter:{
                rating
            }
        }
        setHotelFilter(filters)
    }


    return (
        <div className='filter'>
            <div className='filter__result'>
                <h2 className='header-2'>{hotelNum} Results</h2>
            </div>
            <div className='filter__component'>
                <CustomButton 
                    title='filter' 
                    classProp='btn--filter'
                    color='orange'
                    onClick={openFilterHandler}
                    icon={<RiFilter3Line/>}/>
                <div className='filter__background'/>
                <div className='filter__panel'>
                    <AiFillCloseCircle className='close-button' onClick={closeFilterHandler}/>
                        <label className='filter__title'>Rating</label>
                    <div className="filter__btn-group" >
                        <input className="filter__input" name='rating' type="radio" id='rating-4'/>
                        <label htmlFor='rating-4' className='filter__btn'  onClick={() => setRating(4)}>
                                <StarRating starsSelected={4}/>
                                <span>{` & Up`}</span>
                        </label>
                        <input className="filter__input" name='rating' type="radio"  id='rating-3'/>
                        <label htmlFor='rating-3' className='filter__btn'  onClick={() => setRating(3)}>
                                <StarRating starsSelected={3}/>
                                <span>{` & Up`}</span>
                        </label>
                        <input className="filter__input" name='rating' type="radio"  id='rating-2'/>
                        <label htmlFor='rating-2' className='filter__btn'  onClick={() => setRating(2)}>
                                <StarRating starsSelected={2}/>
                                <span>{` & Up`}</span>
                        </label>
                        <input className="filter__input" name='rating' type="radio"  id='rating-1'/>
                        <label htmlFor='rating-1' className='filter__btn'  onClick={() => setRating(1)}>
                                <StarRating starsSelected={1}/>
                                <span>{` & Up`}</span>
                        </label>
                    </div>
                    <label className='filter__title'>Price</label>
                    <div className="filter__btn-group" >
                        <input className="filter__input" name='price' type="radio" id='all'/>
                        <label htmlFor='all' className='filter__btn' onClick={setPriceRange(null, null)} >
                                All Prices
                        </label>
                        <input className="filter__input" name='price' type="radio" id='range-1'/>
                        <label htmlFor='range-1' className='filter__btn' onClick={setPriceRange(0, 50)}>
                                Under $50
                        </label>
                        <input className="filter__input" name='price' type="radio" id='range-2'/>
                        <label htmlFor='range-2' className='filter__btn'  onClick={setPriceRange(50, 100)}>
                                $50 to $100
                        </label>
                        <input className="filter__input" name='price' type="radio" id='range-3'/>
                        <label htmlFor='range-3' className='filter__btn' onClick={setPriceRange(100, 200)}>
                                $100 to $200
                        </label>
                        <input className="filter__input" name='price' type="radio" id='range-4'/>
                        <label htmlFor='range-4' className='filter__btn' onClick={setPriceRange(100, 200)}>
                                $100 to $200
                        </label>
                        <input className="filter__input" name='price' type="radio" id='range-5'/>
                        <label htmlFor='range-5' className='filter__btn' onClick={setPriceRange(200, 300)}>
                                $200 to $300
                        </label>
                        <input className="filter__input" name='price' type="radio" id='range-6'/>
                        <label htmlFor='range-6' className='filter__btn' onClick={setPriceRange(300, null)}>
                                $300 and above
                        </label>
                       
                    </div>
                        <CustomButton 
                            title='submit' 
                            classProp='btn--search'
                            color='orange'
                            onClick={submitFilter}
                            icon={<RiFilter3Line/>}/>                   
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    hotelNum : hotelsCount(state),
    filter: state.hotels.filter
})

const mapDispatchToProps = {
    setHotelFilter
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter)