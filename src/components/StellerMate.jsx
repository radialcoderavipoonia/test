import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import demoimage from "../assets/images/png/bg.png";
import playiconbutton from "../assets/images/png/playicon.png"
const StellerMate = () => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  return (
    <section className="py-5 position-relative">
      <div className="py-lg-5 hero_container position-relative z-1">
        <Modal
          size="lg"
          centered
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg contained-modal-title-vcenter"
        >
          <Modal.Header>
            <iframe
              width="100%"
              height="315px"
              src="https://www.youtube.com/embed/Icev9Oxf0WA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="position-relative" onClick={() => setLgShow(true)}>
          <img src={demoimage} alt="demoimg" className="w-100 max_h_641px" />
          <div className="position-absolute start-50 top-50 translate-middle text-center">
            <img
              src={playiconbutton}
              alt="playicon"
              className="playicon_img_w cursor_pointer"
            />
            <p className=" ff_raleway lh_normal fs_40 color_white fw_500 m-0">
              StellerMate app v2.1.0 Demo
            </p>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom_174 d-none d-md-block left_0">
        <div className="video_circle_shadows"></div>
      </div>
      <div className="position-absolute bottom_-130 left_43">
        <div className="video_circle_shadows"></div>
      </div>
      <div className="position-absolute bottom_33 left_-190">
        <div className="video_circle_shadows"></div>
      </div>
      <div className="position-absolute right_-56 d-none top_100 d-md-block ">
        <div className="video_circle_shadows"></div>
      </div>
      <div className="position-absolute right_78 d-none d-md-block top_142">
        <div className="video_circle_shadows"></div>
      </div>
      <div className="position-absolute right_-165 d-none d-md-block top_150">
        <div className="video_circle_shadows"></div>
      </div>
    </section>
  );
};

export default StellerMate;
