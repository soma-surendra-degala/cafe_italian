import React from "react";
import "./main.css";
import food from "../../assets/food.png";
import drink from "../../assets/drink.png";
import atmosphere from "../../assets/atmostsphere.png";

export default function Main() {
  return (    
    <div className="container my-5">
      <div className="bg-black text-white py-5">
        <div className="main-page my-5">
          <span className="fs">WE OFFER</span>
          <span className="fs-7">
            Unforgettable <br />Dining <span className="sub">Experience</span>
          </span>
        </div>
      </div>

      <div className="photos my-5">
        {[ 
          { img: food, title: "Food", desc: "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our chefs." },
          { img: drink, title: "Drink", desc: "We serve handcrafted cocktails and an expertly curated wine list to elevate every dining experience at Bavette." },
          { img: atmosphere, title: "Atmosphere", desc: "Immerse yourself in an inviting ambiance where modern design meets timeless comfort — perfect for every occasion." }
        ].map((item, index) => (
          <div className="photo-container" key={index}>
            <img src={item.img} alt={item.title} className="photo-img" />
            <div className="photo-overlay"></div>
            <div className="photo-text">
              <h2 className="photo-heading">{item.title}</h2>
              <p className="photo-caption">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
