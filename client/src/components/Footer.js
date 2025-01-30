import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <hr></hr>
      <div className="footer-top">
        <div className="footer-section connect">
          <h2>Connect with us</h2>
          <h6>We're always looking to connect with those who share an interest<br></br> in a sustainable future.</h6>
          <div className="social-icons">
            <a href="#" className="facebook"></a>
            <a href="#" className="linkedin"></a>
            <a href="#" className="youtube"></a>
            <a href="#" className="instagram"></a>
            <a href="#" className="custom"></a>
          </div>
        </div>
        <div className="footer-section contact">
          <h2>Contact us</h2>
          <p>Get in touch with Secure and specialist teams in our headquarters, or find contacts around the world.</p>
          <div className="regions">
            <a href="#">Africa</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Australia</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Europe</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">India</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Middle East</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">South East Asia</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">South Asia</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">UK</a>
          </div>
          <a href="/contact" className="contact-link">Contact us</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src='./images/Secure_logo.jpg'></img>
        </div>
        <div className="footer-links">
          <div className="company-links">
            <h3>Company links</h3>
            <a href="#">About us</a><br></br>
            <a href="#">Events</a><br></br>
            <a href="#">Privacy policy</a><br></br>
            <a href="/contact">Contact us</a>
          </div>
          <div className="solutions-links">
            <h3>Our solutions</h3>
            <a href="#">Electricity – Metering, billing and collection</a><br></br>
            <a href="#">Gas – Metering, billing and collection</a><br></br>
            <a href="#">Beanbag Care</a><br></br>
            <a href="#">Beanbag Heat</a><br></br>
            <a href="#">Beanbag Cool</a><br></br>
          </div>
          <div className="support-links">
            <h3>Support</h3>
            <a href="#">Customer support</a><br></br>
            <a href="#">Supplier portal</a><br></br>
            <a href="#">Customer feedback</a><br></br>
          </div>
        </div>
        <div className="brands">
          <span>Our brands: Cewe Instrument | Horstmann</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
