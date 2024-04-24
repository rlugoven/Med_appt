import React from "react";
import { Link } from "react-router-dom";
import "./Landing_Page.css";

const Landing_Page = () => {
  return (
    <section className="hero-section">
      <div>
        <div data-aos="fade-up" className="flex-hero">
            
            <h1>
              Your Health<br/>

              <span className="text-gradient">
                
                Our Responsibility
              </span>
            </h1>
              <div class="blob-cont">
                  <div class="blue blob"></div>
              </div>
              <div class="blob-cont">
                  <div class="blue1 blob"></div>
              </div>
            <h4>
            Welcome to StayHealthy &#45; Your Gateway to Convenient and Compassionate Care. Experience connecting with top-tier healthcare professionals from the comfort of your home. Embrace a new era of accessible healthcare where your well-being is just a click away.
            </h4>
            <a href="#services">
              <button class="button">Get Started</button>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Landing_Page;