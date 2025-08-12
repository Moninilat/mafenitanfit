import React, { useRef } from "react";
import "./Testimonials.css";
import right_arrow from "../../assets/right-white-arrow.png";
import left_arrow from "../../assets/left-white-arrow.png";
import testimonial_1 from "../../assets/testimonial-1.jpg";
import testimonial_2 from "../../assets/testimonial-2.jpg";
import testimonial_3 from "../../assets/testimonial-3.jpg";
import testimonial_4 from "../../assets/testimonial-4.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={right_arrow}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={left_arrow}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={testimonial_1} alt="" />
                <div>
                  <h3>Mercedes</h3>
                  <span>(pregnancy + post-partum)</span>
                </div>
              </div>
              <p>
                “Training with Mafe during my pregnancy and postpartum has been
                a blessing. She always made me feel safe, strong, and empowered.
                Her knowledge and support helped me recover faster and feel
                better both physically and mentally.”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={testimonial_2} alt="" />
                <div>
                  <h3>Martina </h3>
                  <span>(pregnancy)</span>
                </div>
              </div>
              <p>
                “As a first-time mom, I was nervous about working out while
                pregnant. Mafe reassured me every step of the way. Her workouts
                are gentle, safe, and effective. I always feel amazing after
                class!”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={testimonial_3} alt="" />
                <div>
                  <h3>Josefina</h3>
                  <span>(pregnancy + post-partum)</span>
                </div>
              </div>
              <p>
                “I trained with Mafe during my pregnancy and came back to her
                postpartum. Her guidance made a huge difference in my recovery
                and confidence. I’m so grateful for her continued support!”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={testimonial_4} alt="" />
                <div>
                  <h3>Maite </h3>
                  <span>(4-year client, most loyal)</span>
                </div>
              </div>
              <p>
                “I’ve been training with Mafe for over four years now, and I
                wouldn’t change it for anything. Her programs evolve with you,
                and she always keeps it fresh, challenging, and fun. She’s the
                best trainer I’ve ever had!”
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
