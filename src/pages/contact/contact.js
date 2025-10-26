import React from 'react';
import c1 from '../../assets/c1.png';
import './contact.css';

function Contact() {
  return (
    <div className="contact-section">
      {/* Background Images */}
      <div className="contact-images">
        <img src={c1} alt="background" />
        <img src={c1} alt="background" />
        <img src={c1} alt="background" />
      </div>

      {/* Overlay content */}
      <div className="contact-overlay">
        <div className="menu-page text-center text-white mb-4">
          <span className="fs">CONNECT WITH US</span>
          <span className="fs-7">Contact Us</span>
        </div>

        {/* Contact Details */}
        <div className="mt-5">
          <div className="contact-details d-flex justify-content-center flex-wrap gap-5">
            <div className="contact-details-box text-center">
              <span className="text-yellow d-block my-3">BOOKING REQUEST</span>
              <span className="fs-5">0161 795 5502</span>
            </div>
            <div className="contact-details-box text-center">
              <span className="text-yellow d-block mb-2">LOCATION</span>
              <span className="fs-6">
                2 Bury Old Road,<br />
                Manchester, M8 9JN
              </span>
            </div>
            <div className="contact-details-box text-center">
              <span className="text-yellow d-block mb-2">OPENING HOURS</span>
              <span className="fs-6">
                Monday to Saturday<br />
                11:00am - 11:30pm<br />
                Sunday 12:00pm - 11:00pm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
