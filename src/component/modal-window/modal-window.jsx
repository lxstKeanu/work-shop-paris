/** @format */

import { React } from "react";
import { ReactComponent as Cancel } from "../../images/cancel.svg";
import SocialMedia from "../social-media/social-media";
import "./modal-window.css";

function ModalWindow({ showAddForm, handleAddFormHide }) {
  return (
    <aside onClick={handleAddFormHide}>
      {showAddForm && (
        <div className="overlay">
          <div id="modal" className="modal">
            <button className="modal-cancel" onClick={handleAddFormHide}>
              <Cancel />
            </button>
            <div className="modal-information">
              <div className="modal-title">
                <span className="modal-title-text">
                  Contact us and book your place
                </span>
              </div>
              <div className="modal-social-information">
                <SocialMedia
                  name="Alesia"
                  ins="https://instagram.com/alesia__ag"
                  face="https://t.me/alesia_ag"
                />
                <div className="modal-line"></div>
                <SocialMedia
                  name="Valeria"
                  ins="https://instagram.com/leka_fotografia"
                  face="https://t.me/ValeriiaChirun"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
export default ModalWindow;
