/** @format */

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { get_Banner } from "../../Repository/category";

const FavouritesSlide = () => {
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch_Banner = async () => {
    get_Banner(setLoading, "fav", setBanner);
  };

  useEffect(() => {
    fetch_Banner();
  }, []);

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
          <img src="/Image/8.png" alt="" onClick={prevSlide} />
          <img src="/Image/9.png" alt="" onClick={nextSlide} />
        </div>
      </div>
      <Slider {...settings} className="Fav-Slide" ref={sliderRef}>
        {banner?.map((i, index) => (
          <div className="Main" key={index} >
            <img src={i.} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FavouritesSlide;
