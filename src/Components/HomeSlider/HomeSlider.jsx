
import slider from "react-slick/lib/slider";
import slider1 from "./../../assets/images/slider-image-1.jpeg"
import slider2 from "./../../assets/images/slider-image-2.jpeg"
import slider3 from "./../../assets/images/slider-image-3.jpeg"
import banner from "./../../assets/images/grocery-banner.png"
import banner2 from "./../../assets/images/grocery-banner-2.jpeg"


import Slider from "react-slick";

export default function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };
  return (


    <section className="py-7 mb-5">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-2/3">
          <Slider {...settings}>
            <div>
              <img src={slider1} className="w-full h-[400px]" alt="" />
            </div>
            <div>
              <img src={slider2} className="w-full h-[400px]" alt="" />
            </div>
            <div>
              <img src={slider3} className="w-full h-[400px]" alt="" />
            </div>
          </Slider>
        </div>
        <div className="w-1/3">

          <img src={banner} className="w-full h-[200px] " alt="" />
          <img src={banner2 }  className="w-full h-[200px] " alt="" />
          
        </div>
      </div>
    </section>
  );
}