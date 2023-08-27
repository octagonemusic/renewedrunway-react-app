import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer flex-col">
        <div className="top flex-row">
          <div className="left">
            <h1 className="title">Renewed Fasion.</h1>
            <div className="link-wrapper">
              <a href="#Careers">Careers</a>
              <a href="#Customer care">Customer care</a>
              <a href="#Our Office">Our Office</a>
              <a href="#Services">Services</a>
            </div>
            <div className="social-links flex-row">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-skype"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="right flex-col">
            <span>Get the freshest collections</span>
            <div className="subscribe flex-row">
              <input
                placeholder="Your email here"
                type="email"
                name="subscribe"
                id="subscribe"
              />
              <button type="submit">Subscribe</button>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check">
                By checking the box, you agree that you are at least 16 years of
                age
              </label>
            </div>
          </div>
        </div>
        <div className="bottom flex-col">
          <div className="flex-row row">
            <a href="#Website Terms">Website Terms</a>
            <a href="#Privacy Policy">Privacy Policy</a>
            <a href="#Accessibility Statement">Accessibility Statement</a>
            <a href="#Supplier Code of Conduct">Supplier Code of Conduct</a>
          </div>
          <span className="text">Do not Sell My Information</span>
          <div className="copyright">
            <i className="fa fa-copyright" aria-hidden="true"></i> 2023 Renewed
            <span>Fasion, LLC. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
