import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foto1 from "../assets/prambanan1.jpg";
import foto2 from "../assets/prambanan2.jpg";
import foto3 from "../assets/prambanan3.jpg";
import foto4 from "../assets/prambanan4.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Carousel1 = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      customPaging: function (i) {
        return (
          <div
            className={`w-4 h-4 mt-2 mx-2 rounded-full border-2 border-[#3c87ca] ${
              currentSlide === i ? "bg-[#3c87ca]" : "bg-white"
            }`}
          ></div>
        );
      },
      beforeChange: (current, next) => setCurrentSlide(next),
    };
  
    const goToNextSlide = () => {
      sliderRef.current.slickNext();
    };
  
    const goToPrevSlide = () => {
      sliderRef.current.slickPrev();
    };
  
    return (
      <div className="max-w-screen-xl mx-auto mt-8 relative">
        <Slider className="" ref={sliderRef} {...settings}>
          <div>
            <img src={foto1} alt="Foto 1" className="w-full h-auto rounded-xl" />
          </div>
          <div>
            <img src={foto2} alt="Foto 2" className="w-full h-auto rounded-xl" />
          </div>
          <div>
            <img src={foto3} alt="Foto 3" className="w-full h-auto rounded-xl" />
          </div>
          <div>
            <img src={foto4} alt="Foto 4" className="w-full h-auto rounded-xl" />
          </div>
        </Slider>
  
        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 hover:text-white text-4xl hover:bg-[#3c87ca] rounded-full text-[#3c87ca] bg-white focus:outline-none"
        >
          <BiChevronLeft  />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:text-white text-4xl hover:bg-[#3c87ca] rounded-full text-[#3c87ca] bg-white focus:outline-none"
        >
          <BiChevronRight />
        </button>
      </div>
    );
  };

export default Carousel1