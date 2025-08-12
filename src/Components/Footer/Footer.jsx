import React from "react";
import "./Footer.css";

const Footer = ({ onOpenTerms }) => {
  return (
    <div className="footer">
      <p>© 2025 MafenitanFit. All rights reserved.</p>
      <ul>
        <li>
          <span onClick={onOpenTerms} style={{ cursor: "pointer" }}>
            Terms of Service
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
