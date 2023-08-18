import Slider from "react-slick";

const FavouritesSlide = () => {
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
            </div>
        </div>
    </Slider>
  </div>
  )
}

export default FavouritesSlide