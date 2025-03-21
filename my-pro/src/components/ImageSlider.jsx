import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const images = [
      {url:"https://m.media-amazon.com/images/I/71-IUsCztsL._AC_UY1000_.jpg" , text:"image1"},
      {url:"https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Ch=1444%2Cq=85%2Cw=2000/wp-content/uploads/carousel-day.jpg", text:"image1"},
      {url:"https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/lands-endslide__800x600.jpg", text:"image2"},
      {url:" https://rawgit.com/creativetimofficial/material-kit/master/assets/img/bg2.jpg", text:"image3"},
      {url:"https://dequeuniversity.com/assets/js/patterns/images/tempimage02.jpeg", text:"image4"},
  
    ]

    const CustomPrevArrow = ({ onClick }) => (
      <button className="slick-arrow slick-prev" onClick={onClick}
        style={{position: "absolute", top: "50%", left: "10px", zIndex: 10,
          border: "none", borderRadius: "50%",  padding: "10px" }} ></button> );

    const CustomNextArrow = ({ onClick }) => (
      <button className="slick-arrow slick-next" onClick={onClick}
        style={{position: "absolute", top: "50%", right: "20px", zIndex: 10,
          border: "none", borderRadius: "50%",  padding: "10px" }} ></button> );
    
    const settings = {
      dots: true, infinite: true,  speed: 500, slidesToShow: 1, slidesToScroll: 1,
      autoplay:true, autoplaySpeed:5000,    pauseOnHover:false,
      prevArrow:<CustomPrevArrow/> , nextArrow:<CustomNextArrow/>   };
  return (
   <>  
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <img 
                src={img.url} 
                alt={img.text} 
                className="w-100" 
                style={{ height: "500px"}} 
              /> 
            </div>
          ))}
        </Slider>
   </>
  )
}

export default ImageSlider
