import React, { useRef } from 'react';
import r1 from '../../assets/r1.jpg';
import r2 from '../../assets/r2.jpg';
import r3 from '../../assets/r3.jpg';
import './reviews.css';


function Reviews() {
  const scrollRef = useRef(null);

  const reviews = [
    {
      id: 1,
      img: r1,
      text: "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back!",
      author: "Anna Mathew",
      time: "one day ago",
      rating: 5,
    },
    {
      id: 2,
      img: r2,
      text: "We booked private dining for our anniversary, and everything was perfect. The steak was melt-in-your-mouth delicious, and the staff was amazing!",
      author: "Gerrin Tom",
      time: "one day ago",
      rating: 5,
    },
    {
      id: 3,
      img: r3,
      text: "Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
      author: "Mery Elza",
      time: "one day ago",
      rating: 5,
    }
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <div className="container text-white py-5 position-relative">
      <div className="menu-page text-center mb-5">
        <span className="fs-6 d-block">REVIEWS</span>
        <span className="fs-7">Hear Our Guests</span>
      </div>

      {/* Scrollable Review Cards */}
      <div className="reviews-scroll" ref={scrollRef}>
        {reviews.map((review) => (
          <div key={review.id} className="review-card p-4 mx-3">
            <div className="d-flex align-items-center mb-3">
              <img src={review.img} alt={review.author} className="review-img me-3" />
              <div>
                <span className="review-author">{review.author}</span>
                <br />
                <span className="review-time">{review.time}</span>
              </div>
            </div>
            <br />
              <div className="review-rating">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="star"> <i class="bi bi-star-fill"></i>  </span>
              ))}
            </div>
            <p className="review-text">{review.text}</p>
            <br />

          </div>
        ))}
      </div>

      <div className="nav-buttons text-center mt-4">
          <button className="nav-btn-btm me-3" onClick={scrollLeft}><i class="bi bi-arrow-left"></i></button>
          <button className="nav-btn-btm" onClick={scrollRight}><i class="bi bi-arrow-right"></i></button>
      </div>
    </div>
  );
}

export default Reviews;
