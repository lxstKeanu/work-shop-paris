/** @format */

import { React } from "react";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Telegram } from "../../images/telegram.svg";
import { ReactComponent as Cancel } from "../../images/cancel.svg";
import "./modal-window.css";

function ModalWindow({ showAddForm, handleAddFormHide }) {
  return (
    <div>
      {showAddForm && (
        <div className="modal">
          <div className="modal-cancel">
            <Cancel onClick={handleAddFormHide} />
          </div>
          <div className="modal-information">
            <div className="modal-title">
              <span className="modal-title-text">
                Contact us and book your place
              </span>
            </div>
            <div className="modal-social-information">
              <div className="modal-social">
                <span className="modal-name">Alesia</span>
                <div className="svg-icon">
                  <a href="https://instagram.com/alesia__ag">
                    <Instagram />
                  </a>
                  <a href="https://t.me/alesia_ag">
                    <Telegram />
                  </a>
                </div>
              </div>
              <div className="modal-line"></div>
              <div className="modal-social">
                <span className="modal-name">Valeria</span>
                <div className="svg-icon">
                  <a href="https://instagram.com/leka_fotografia">
                    <Instagram />
                  </a>
                  <a href="https://t.me/ValeriiaChirun">
                    <Telegram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ModalWindow;
