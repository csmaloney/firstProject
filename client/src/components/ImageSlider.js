import React, { useState } from 'react';
import { SliderData } from '../assets/SliderData';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const ImageSlider = ({ slides }) => {



    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


  return (


    <div className='slider-container'>
        <section className='slider'>
            <IoIosArrowDropleft className="left-arrow" onClick={ prevSlide } />
                {SliderData.map((slide, index) => {
                    return(
                        <div className={ index === current ? 'slide active' : 'slide' } key={index} >
                            { index === current && (<img src={ slide.image } alt="image" className='image'/>) }
                        </div>
                    )
                })}
            <IoIosArrowDropright className="right-arrow" onClick={ nextSlide } />
        </section>
    </div>
  )
}

export default ImageSlider;