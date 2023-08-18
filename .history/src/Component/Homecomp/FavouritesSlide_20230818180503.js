/** @format */
import Slider from 'react-slick'

const FavouritesSlide = () => {
//   const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

//   const nextSlide = () => {
//     sliderRef.current.slickNext();
//   };

//   const prevSlide = () => {
//     sliderRef.current.slickPrev();
//   };
  return (
      <Slider {...settings} className='Fav-Slide' >
        <img src='/Image/7.png' alt='' />
        <img src='/Image/7.png' alt='' />
      </Slider>
    </div>
  );
};

export default FavouritesSlide;
