/** @format */

import { useRef } from "react";
import Slider from "react-slick";

const FavouritesSlide = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div >
       <div className="Prev-Next_cont">
       <button>Prev</button>
          <img src={img5} className="PrevImg" alt="" />
          <img src={img6} onClick={nextSlide} className="NextImg" alt="" />
        </div>
      <Slider {...settings} className='Fav-slide' ref={sliderRef} >
        <div className="Main">
          <img src="/Image/7.png" alt="" />
        </div>
        <div className="Main">
          <img src="/Image/7.png" alt="" />
        </div>
        <div className="Main">
          <img src="/Image/7.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default FavouritesSlide;