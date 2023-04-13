/** @format */

import React from "react";
import "./footer.css";

function Footer({ handleAddFormShow }) {
  return (
    <footer className="footer">
      <div className="footer-btn" onClick={handleAddFormShow}>
        <span className="footer-text-btn">Contact me</span>
      </div>
    </footer>
  );
}

export default Footer;
