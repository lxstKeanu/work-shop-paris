/** @format */

import React from "react";
import "./footer.css";

function Footer({ handleAddFormShow }) {
  return (
    <footer className="footer">
      <div className="footer-btn">
        <span className="footer-text-btn" onClick={handleAddFormShow}>
          Contact me
        </span>
      </div>
    </footer>
  );
}

export default Footer;
