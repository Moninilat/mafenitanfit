import React from "react";
import "./Programs.css";
import program_1 from "../../assets/outdoor-training.jpg";
import program_2 from "../../assets/train-at-home.jpg";
import program_3 from "../../assets/gym.jpg";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1}/>
            <p>Train outdoors with energy and fresh air</p>
        </div>
      </div>
      
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2}/>
            <p>Stay fit from the comfort of your home</p>
        </div>
      </div>
       
        <div className="program">
        <img src={program_3} alt="" />
         <div className="caption">
            <img src={program_icon_3}/>
            <p>Push your limits at the gym</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
