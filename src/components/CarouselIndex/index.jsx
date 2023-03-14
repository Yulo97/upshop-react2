import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CarouselIndex = () => {
  const images = [
    {
      id: 1,
      link: "/slider1.png",
      alt: "",
    },
    {
      id: 2,
      link: "/slider2.png",
      alt: "",
    },
    {
      id: 3,
      link: "/slider3.png",
      alt: "",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, // Cambia el valor para ajustar la velocidad de transición entre imágenes
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((item) => (
        <div key={item.id}>
          <img src={item.link} alt={item.alt} style={{ width: "100vw", objectFit: "cover" }} />
        </div>
      ))}
    </Slider>
  );
};
