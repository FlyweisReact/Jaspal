/** @format */

import React , { useState , useEffect} from "react";
import { get_Banner } from "../../Repository/category";
import FavouritesSlide from "./FavouritesSlide";

const OfferProduct = () => {

  const [ banner , setBanner ] = useState([])
  const [ loading , setLoading ] = useState(false)

  const fetch_Banner = async () => {
    get_Banner(setLoading, "fav" , setBanner)
  }


  useEffect(() => {
    fetch_Banner()
  },[])

  const data = [
    {
      img: "/Image/10.png",
      title: "Women’s Flats Summer Straps",
      price: 2999,
    },
    {
      img: "/Image/11.png",
      title: "Borgia Boots  Close",
      price: 2599,
    },
  ];

  return (
    <div className="offer-products">
      <div className="left-container">
      {banner?.map((i))}
        <div className="img-container">
          <h5>GET UPTO 50% OFF</h5>
          <button>Explore</button>
        </div>
      

        <div className="two-sec">
          <div className="left">
            <img src="/Image/6.png" alt="" />
          </div>
          <div className="right">
            <FavouritesSlide />
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="product-container">
          {data.map((i, index) => (
            <div className="Main" key={index}>
              <i className="fa-regular fa-heart"></i>
              <img src={i.img} alt="" />
              <p className="pick">Our Picks</p>

              <div className="desc">
                <span> {i.title} </span>
                <button>₹{i.price} </button>
              </div>
            </div>
          ))}
        </div>

        <div className="img-container">
          <img src="/Image/12.png" alt='' />
        </div>
      </div>
    </div>
  );
};

export default OfferProduct;
