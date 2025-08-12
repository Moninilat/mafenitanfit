import React from "react";
import "./About.css";
import play_icon from "../../assets/play-icon.png";
import mafe_about from "../../assets/mafe-about.JPG";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={mafe_about} alt="mafe picture" className="mafe-about" />
        <img src={play_icon} alt="Play Video" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT MAFE</h3>
        <h2>Certified Personal Trainer</h2>
        <p>
          Mafe Rosal is a certified personal trainer with several years of
          experience designing effective and personalized fitness programs. Her
          passion for health and movement has driven her to help people of all
          fitness levels reach their goals in a sustainable and enjoyable way.
          She takes pride in building strong relationships with her clients and
          understanding their individual needs to create realistic and
          motivating plans.
        </p>

        <p>
          Every training program Mafe offers is fully customized. Whether your
          goal is weight loss, muscle gain, improved endurance, or simply a
          healthier lifestyle, she adapts her approach to fit your body,
          schedule, and preferences. Her programs are designed to evolve as you
          do, ensuring long-term results and steady progress. You can train with
          her outdoors, at home, or at the gym, depending on what suits you
          best.
        </p>

        <p>
          Mafe currently works with clients from all over the world, delivering
          support and guidance online and in person. In addition to her coaching
          work, she is also a certified CrossFit judge, which reflects her deep
          involvement in the fitness community. Her commitment to quality,
          affordability, and professional excellence makes her services a smart
          choice for anyone serious about getting fit.
        </p>
      </div>
    </div>
  );
};

export default About;
