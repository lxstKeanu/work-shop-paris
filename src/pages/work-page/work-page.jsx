/** @format */

import { React, useState } from "react";
import "./work-page.css";
import preview from "../../images/preview-1.png";
import { ReactComponent as ArrowDown } from "../../images/arrow-down.svg";
import GalleryPhoto from "../../utilities/gallery/gallery";
import Footer from "../../component/footer/footer";
import ModalWindow from "../../component/modal-window/modal-window";

function WorkPage() {
  const [showAddForm, setShowAddForm] = useState(false);

  const handlerScrolldown = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAddFormShow = () => {
    setShowAddForm(true);
  };
  const handleAddFormHide = () => {
    setShowAddForm(false);
  };
  return (
    <div className="container">
      <div className="album-preview">
        <img className="photo-preview" src={preview} alt="" />
        <span className="preview-title">Start shooting in Europe!</span>
        <span className="preview-title-2">Workshop Paris</span>
        <span className="preview-date">May 10</span>
        <div className="arrow">
          <ArrowDown onClick={handlerScrolldown} />
        </div>
      </div>
      <div className="g">
        <GalleryPhoto />
        <ModalWindow
          handleAddFormHide={handleAddFormHide}
          showAddForm={showAddForm}
        />
      </div>
      <Footer handleAddFormShow={handleAddFormShow} />
    </div>
  );
}
export default WorkPage;
