import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./specials.css";

import streak from "../../assets/streak.png";
import streak1 from "../../assets/streak1.png";
import streak2 from "../../assets/streak2.png";

export default function Specials() {
  const specials = [
    { name: "Classic Ribeye Steak", img: streak, price: "€30" },
    { name: "Grilled Chicken Breast", img: streak1, price: "€25" },
    { name: "Beef Tenderloin", img: streak2, price: "€35" },
  ];

  return (
    <div className="specials-section container mt-5">
      <span className="fs">WE OFFER</span>
      <h2 className="specials-title">
        Our <span>Specials</span>
      </h2>

      <div className="specials-wrapper">
        <img
          src={streak1}
          alt="Left"
          className="side-img"
          width={304}
          height={202}
        />
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="specials-swiper"
        >
          {specials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="special-card pt-5">
                <img className="spacial-img" src={item.img} alt={item.name} />
                <h3 className="special-name">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}

          {/* Price tag on swiper */}
          <div className="price-tag">{specials[0].price}</div>

          {/* Navigation buttons */}
          <div className="nav-buttons">
            <button className="custom-prev">←</button>
            <button className="custom-next">→</button>
          </div>
        </Swiper>

        <img
          src={streak2}
          alt="Right"
          className="side-img"
          width={304}
          height={202}
        />
      </div>
    </div>
  );
}
