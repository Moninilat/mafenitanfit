import React from "react";
import "./Contact.css";
import message_icon from "../../assets/message-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import email_heart from "../../assets/email-heart.png";
import right_white_arrow from "../../assets/right-white-arrow.png";


const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send me a message <img src={message_icon} alt="" /></h3>
        <p>
          Whether you have questions, need help choosing the right program, or
          just want to say hello, feel free to reach out! I'm here to support
          you on your fitness journey and will get back to you as soon as
          possible.
        </p>
        <ul>
            <li><img src={email_heart} alt="" />mafenitanfit@gmail.com </li>
            <li><img src={phone_icon} alt="" />+58 424-2926239</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Phone number</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" required/>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Type your message here" required></textarea>
            <button type="submit" className="btn dark-btn">Submit <img src={right_white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  );
};

export default Contact;
