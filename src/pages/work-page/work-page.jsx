/** @format */

import { React, useState, useEffect } from "react";
import preview from "../../images/preview-1.jpg";
import { ReactComponent as ArrowDown } from "../../images/arrow-down.svg";
import GalleryPhoto from "../../utilities/gallery/gallery";
import Footer from "../../component/footer/footer";
import ModalWindow from "../../component/modal-window/modal-window";
import "./work-page.css";

function WorkPage() {
  const [showAddForm, setShowAddForm] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("modal-open", showAddForm);
  }, [showAddForm]);

  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddFormShow = () => {
    setShowAddForm(true);
  };

  const handleAddFormHide = () => {
    setShowAddForm(false);
  };
  return (
    <div className="container">
      <section className="album-root">
        <div className="album-preview">
          <img className="photo-preview" src={preview} alt="" />
          <span className="preview-title">Start shooting in Europe!</span>
          <span className="preview-title-2">Workshop Paris</span>
          <span className="preview-date">May 10</span>
        </div>
        <div className="arrow">
          <ArrowDown onClick={handleClickScroll} />
        </div>
      </section>
      <section id="section-1" className="gallery-section">
        <GalleryPhoto />
        <div id="modal">
          <ModalWindow
            handleAddFormHide={handleAddFormHide}
            showAddForm={showAddForm}
          />
        </div>
      </section>
      <Footer handleAddFormShow={handleAddFormShow} />
    </div>
  );
}
export default WorkPage;
