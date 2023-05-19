import React from 'react'
import '../App.css';
import '../styles.css';

const HeroSection = () => {
    return (
        <>
            <div className="hero-container hover-underline-animation">
                <img src="/assets/videos/goldfish.gif" alt="" />
                <span className='hero--heading small'>Hi, I'm</span>
                <span className='hero--heading big' >Jemaica Mon</span>
                <span className='hero--heading role'>Full-Stack Engineer / Software Engineer</span>


                <div className={"hero-btns"}>
                </div>
                <div className='ref'><a href='https://www.artstation.com/artwork/GawB1z'>https://www.artstation.com/artwork/GawB1z</a></div>
            </div>
        </>
    );
}

export default HeroSection;