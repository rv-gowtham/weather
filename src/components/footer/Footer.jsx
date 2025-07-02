import React from "react";
import Glitch from "../../assets/glitch.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import x from "../../assets/twitter.png";
import linkin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <>
      <div className="footer container-fluid col-12 d-flex flex-column flex-md-row align-items-center text-white">
        <div className="col-12 col-md-4">
          <div className="footer_brand d-flex justify-content-center align-items-center">
            <h1 className="display-3">CLEAR</h1>
            <img
              className=""
              src={Glitch}
              style={{ width: "50px", height: "50px" }}
              alt=""
            />
          </div>
          <div className="col-12 mt-4 mt-md-2 text-center">
            <p>
              <span className=" footer_brand">CLEAR✨</span>
              <br className="d-block d-md-none" /> is a smart, user-friendly
              weather app that delivers real-time updates on temperature,
              humidity, wind, and more. Stay ahead of the weather—anytime,
              anywhere.
            </p>
          </div>
        </div>
        <div className="mt-md-5 col-12 col-md-4 d-flex flex-column align-items-center">
          <p>“Your daily weather, simplified.”</p>
          <p>“Forecasting made smart.”</p>
          <p>“Know the skies before you go.”</p>
        </div>
        <div className="link_icons col-12 col-md-4 d-flex flex-column flex-md-row align-items-center justify-content-around row-gap-3">
          <div>
            <a href="https://www.linkedin.com/in/rv-gowtham-44900a27b/">
              <img src={linkin} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/_rvgowtham/">
              <img className="col-12" src={instagram} alt="" />
            </a>
          </div>
          <div>
            <a href="http://">
              <img className="col-12" src={x} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100045407825680">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
