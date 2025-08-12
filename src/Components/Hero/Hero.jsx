import React from "react";
import "./Hero.css";
import right_arrow from "../../assets/right-arrow.png";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Personal Training with Mafe</h1>
        <p>
          Reach your goals with personalized workouts tailored to your needs.
          Train at home, outdoors, or wherever suits you best.
        </p>
        <Link to="contact" smooth={true} duration={500} className="btn">
          More info <img src={right_arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
