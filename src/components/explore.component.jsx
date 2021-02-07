import React, { useEffect, useState, useRef } from 'react'
import { images } from '../data/images.data'

export default function Explore() {
    const [currentIndex, setCurrentIndex] = useState(0)
    let interval = useRef(null)

    const slideShow = () =>{
        return setInterval(function(){
            setCurrentIndex(current => { 
                let index; 
                index = current === 5 ? 0 : current + 1
                return index;
            })
        }, 2000)
    }
    useEffect(() =>{
        interval.current = slideShow()

        return () =>{
            clearInterval(interval.current)
        }
    },[])



    const pause = () =>{
        clearInterval(interval.current)
    }

    const resume = () =>{
        interval.current = slideShow()
    }
    return (
        <section className='section-explore'>
            <div className='container'>
                <div className='u-margin-bottom-large u-center-text'>
                    <h2 className='header-2'>Explore with us</h2>
                </div>
                <div className='slide'>
                    <div className='slide__thumbnail'>
                        {
                            images.map((image,i) =>(
                                <div 
                                    key={i}
                                    onMouseEnter={pause} onMouseLeave={resume}
                                    className={`thumbnail ${currentIndex === i ? 'active' : " "}`} 
                                    onClick={() =>setCurrentIndex(i)}>
                                    <img src={image.small} alt={image.name} />
                                </div>
                            ))
                        }
                    </div>
                    <div className='slide__preview'>
                        <div className='preview__image' onMouseEnter={pause} onMouseLeave={resume}>
                            <img src={images[currentIndex].large} alt={images[currentIndex].name} />
                        </div>
                        <div className='preview__details'>
                            <h3 className='header-3'>{images[currentIndex].name}</h3>
                            <p className='paragraph'>{images[currentIndex].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
