/** @format */

import React from "react";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Telegram } from "../../images/telegram.svg";

function SocialMedia({ name, ins, face }) {
  return (
    <div className="modal-social">
      <span className="modal-name">{name}</span>
      <div className="svg-icon">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          href={ins}
        >
          <Instagram />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          href={face}
        >
          <Telegram />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
