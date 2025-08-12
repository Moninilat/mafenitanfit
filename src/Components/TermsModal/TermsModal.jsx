import React from "react";
import "./TermsModal.css";

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Class Policies with @MafenitanFit</h2>
        <ol>
          <li>
            Please agree on the payment method and date before starting any
            plan. Payments are typically made at the beginning of the package.
          </li>
          <li>
            Select your preferred app for live classes: WhatsApp, Zoom, or
            Google Meet.
          </li>
          <li>
            If you choose a package, schedule all sessions in advance. For
            individual classes, please book at least 24 hours ahead or according
            to availability.
          </li>
          <li>
            If you can’t attend a class, notify in advance so it can be
            rescheduled within the available calendar.
          </li>
          <li>
            If internet issues (WiFi or mobile data) interrupt a class, the
            day’s workout will be sent to you.
          </li>
          <li>
            Training sessions can take place in different locations depending on
            the client’s preference: gym, home, with or without equipment.
          </li>
        </ol>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
