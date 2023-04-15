import { useState } from "react";
import { dataDigitalBestSeller } from "./data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-4xl">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((data) => {
          return (
            <div
              className="h-96 bg-rose-400 flex justify-center items-center"
              key={data.id}
            >
              <div className="">
                <img
                  className="h-96 w-full object-cover flex justify-center items-center "
                  src={data.linkImg}
                  alt=""
                />
                <div>{data.title}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default App;
