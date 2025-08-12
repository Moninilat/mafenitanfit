import React from "react";
import "./Plans.css";
import training_1 from "../../assets/training-1.jpg";
import training_2 from "../../assets/training-2.jpeg";
import training_3 from "../../assets/training-3.jpeg";
import training_4 from "../../assets/training-4.jpg";
import training_5 from "../../assets/training-5.jpg";
import training_6 from "../../assets/training-6.jpg";

const plans = [
  {
    title: "2 days a week",
    image: training_1,
    details: [
      "1 hour of training per day",
      "2 days a week (Monday to Friday, your choice)",
      "4 weeks of personalized planning",
      "Live video call classes (FaceTime, WhatsApp or Google Meet)",
      "Basic nutritional guidance",
      "Monthly payment: $70",
    ],
  },
  {
    title: "3 days a week",
    image: training_2,
    details: [
      "1 hour of training per day",
      "3 days a week (Monday to Friday, your choice)",
      "4 weeks of personalized planning",
      "Live video call classes (FaceTime, WhatsApp or Google Meet)",
      "Basic nutritional guidance",
      "Monthly payment: $100",
    ],
  },
  {
    title: "4 days a week",
    image: training_3,
    details: [
      "1 hour of training per day",
      "4 days a week (Monday to Friday, your choice)",
      "4 weeks of personalized planning",
      "Live video call classes (FaceTime, WhatsApp or Google Meet)",
      "Basic nutritional guidance",
      "Monthly payment: $140",
    ],
  },
  {
    title: "5 days a week + stretching",
    image: training_4,
    details: [
      "1 hour of training per day",
      "5 days a week (Monday to Friday)",
      "4 weeks of personalized planning",
      "Live video call classes (FaceTime, WhatsApp or Google Meet)",
      "Basic nutritional guidance",
      "Includes one (1) 15min stretching session per week",
      "Monthly payment: $170",
    ],
  },
  {
    title: "Individual class",
    image: training_5,
    details: [
      "1 live class by video call",
      "Choose your schedule depending on availability",
      "Contact via WhatsApp, Zoom or Google Meet",
      "Payment per class: $10",
    ],
  },
  {
    title: "Payment Methods",
    image: training_6,
    details: ["Zelle", "PayPal"],
  },
];

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="card-grid">
        {plans.map((plan, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div
                className="flip-card-front"
                style={{
                  backgroundImage: plan.image
                    ? `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${plan.image})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3>{plan.title}</h3>
              </div>

              <div className="flip-card-back">
                <ul>
                  {plan.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
