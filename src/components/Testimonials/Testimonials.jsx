import React from "react";
import "./Testimonials.scss";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonials from "../../data/testimonials";

const Testimonials = () => {

  let settings = {
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="container">
        <Slider {...settings}>
          {testimonials.map((current) => (
            <div className="out" key={current.id}>
              <div className="card">
                <img
                  className="rounded-circle"
                  alt="Image of person who gave testimonial"
                  src={current.image}
                />
                <div className="card-body">
                  <h5 className="card-title">{current.name}</h5>
                  <small className="card-text text-sm-center text-muted">
                    {current.quote}
                  </small>
                  <br />
                </div>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  );
};

export default Testimonials;
