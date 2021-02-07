import React from 'react'
import { aboutData } from '../data/about.data'
import backgroundVideo from '../assets/video/background.mp4'
import ReactPlayer from 'react-player'

export default function About() {
    return (
        <section className='about-section'>
            <div className='background-video'>
                <ReactPlayer
                    width='100%'
                    height='100%'
                    muted={true}
                    className='video'
                    url={backgroundVideo}
                    playing={true}
                    loop={true}
                />
            </div>
            
            <div className='container'>
                <div className='u-margin-bottom-large u-center-text'>
                    <h2 className='header-2'>What we are about</h2>
                </div>
                <div className='about__items'>
                    {
                    aboutData.map(function (item, index){
                        return(
                            <div className='about__item' key={index}>
                                <img src={item.image} alt={item.title} className='about__image'/>
                                <h3 className='header-3'>{item.title}</h3>
                                <p className='paragraph'>{item.description}</p>
                            </div>
                        )
                    })
                    }
                </div>
                
            </div>
        </section>
    )
}