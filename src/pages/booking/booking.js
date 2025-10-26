import React from 'react';
import b1 from '../../assets/b1.png';
import './booking.css';

function Booking() {
  return (
    <div className='booking-container'>
      <img src={b1} alt="img" className='booking-img' />
      <div className='booking-overlay'></div>

      <div className='booking-text'>
        <div className='mb-4 animate-text'>
          <span className='booking-subtitle'>BOOKING</span>
          <br />
          <span className='booking-title'>Private & <br />Group Dining</span>
          <p className='booking-para'>
            At Bavette, we specialize in creating memorable dining experiences, whether you're seeking an intimate gathering or a grand celebration. Our private and group dining options are designed to meet your unique needs with personalized service, exceptional food, and a welcoming atmosphere.
          </p>
        </div>
        <button className='booking-btn'>
          Book Now <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Booking;
