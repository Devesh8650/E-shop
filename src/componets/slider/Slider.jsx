import React, { useEffect, useState } from 'react'
import "./slider.css"
// import { ImageData } from './data';

function Slider({Data,timer}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % Data?.length);
        }, timer);
        return () => clearInterval(interval);
    }, [currentSlide, Data?.length]);

    return (
        <>
        <div className="slider">
            {Data?.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}>
                        <img src={image.ImageSrc} alt='' />

                    </div>
            ))}
        </div>
        </>
    );
}
export default Slider;