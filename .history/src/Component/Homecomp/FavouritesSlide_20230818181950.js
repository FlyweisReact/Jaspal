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
    <div className="Favorite-slider">
      <div className="Prev-Next_cont">
        <span>Favourites</span>
        <div>
            <img src='/Image/8.png' alt="" />
            <img src='/Image/9.png' alt="" />
        </div>
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>NExt</button>
      </div>
      <Slider {...settings} className="Fav-Slide" ref={sliderRef}>
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
