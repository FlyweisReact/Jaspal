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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="39"
            viewBox="0 0 35 39"
            fill="none"
          >
            <path
              d="M14.5834 27.625L21.875 19.5L14.5834 11.375"
              stroke="#001A72"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
