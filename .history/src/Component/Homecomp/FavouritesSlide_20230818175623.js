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
        autoplay: true,
        autoplaySpeed: 1000,
      };
    
  return (
    <div>
    <Slider {...settings}>
        <div className="Main">
            <img src="/Image/7.png" alt='' />
        </div>
    </Slider>
  </div>
  )
}

export default FavouritesSlide