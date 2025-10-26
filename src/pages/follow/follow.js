import React from 'react';
import './follow.css';
import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';
import f4 from '../../assets/f4.png';
import f5 from '../../assets/f5.png';
import f6 from '../../assets/f6.png';
import f7 from '../../assets/f7.png';
import f8 from '../../assets/f8.png';

const images = [f1, f2, f3, f4, f5, f6, f7, f8];

function Follow() {
  return (
    <div className="follow-section container py-5">
      {/* Header Section */}
      <div className="follow-header text-center mb-5">
        <div className='left'>
        <span className="gallery-label">GALLERY</span>
        <h2 className="follow-title">Follow Us</h2>
        </div>
        <div>
        <a
          className="instagram-btn"
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="insta-icon"><i class="bi bi-instagram"></i></span>
          CHECK OUT OUR INSTAGRAM
        </a>
        </div>
      </div>

      {/* Image Grid */}
      <div className="image-grid">
        {images.map((img, idx) => (
          <div key={idx} className="image-cell">
            <img src={img} alt={`gallery item ${idx + 1}`} />
            <div className="overlay">
              <span className="overlay-icon"><i class="bi bi-instagram"></i></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Follow;
