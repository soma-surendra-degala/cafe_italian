import React from 'react';
import "./highlights.css";
import h1 from '../../assets/h1.png';
import h2 from '../../assets/h2.png';
import h3 from '../../assets/h3.png';
import h4 from '../../assets/h4.png';   

export default function Highlights() {
  const highlights = [
    { name: "Adana Kebab", img: h1, price: "€120" },
    { name: "Meze Platter", img: h2, price: "€120" },
    { name: "Baklava", img: h3, price: "€120" },
    { name: "Kebab Platter", img: h4, price: "€120" },
  ];

  return (
    <div className="highlights-section container py-5">
      <div className="bg-black text-white">
        <div className="highlights-page my-5">
          <span className="fs">Our top picks this month</span>
          <span className="fs-7">
            Monthly <span className="sub">Highlights</span>
          </span>
        </div>
      </div>

      <div className="highlights-wrapper d-flex justify-content-center flex-wrap gap-4 my-5">
        {highlights.map((item, i) => (
          <div key={i} className="highlight-card">
            <div className="highlight-img-wrapper">
              <img src={item.img} alt={item.name} />
            </div>
            <h3 className="highlight-name">{item.name}</h3>
            <p className="highlight-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
