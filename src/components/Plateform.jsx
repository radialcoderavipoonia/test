import React from "react";
import { Col, Row } from "react-bootstrap";
import dottedcircle from "../assets/images/png/dotted-circle-plateform.png";

const Plateform = () => {
  return (
    <>
      <section id="support">
        <div className="py-lg-5 mt_-4">
          <div className="py-5">
            <div className="py-5">
              <div className="pt_36 pt_lg_0 pb_lg_0 pb_36">
                <div className="hero_container">
                  <Row className="justify-content-md-between justify-content-center">
                    <Col md={6}>
                      <div className="d-flex justify-content-center justify-content-md-start">
                        <span className="position-relative z-1 dotted_circle_image">
                          <span className="dotted_circle_img z-1  position-relative pt_21 pb_45">
                            <img
                              src={dottedcircle}
                              alt="dotted circle"
                              className="w-100 mw_400 ms-md-0 me-md-0 ms-auto me-auto h_182"
                            />
                            <div className="position-absolute top_-32 left_-152 ">
                              <div className="plateform_shadow"></div>
                            </div>
                          </span>
                        </span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="pt-md-0 pt-5">
                        <p className="ff_raleway fw_500 text-md-start text-center fs_xl color_white lh_normal m-0">
                          Supported Platforms
                        </p>
                        <p className="ff_manrope fw_400 fs_sm text-md-start text-center color_white opacity_06 m-0 pt_12">
                          Out of the box support for StellarMate, Linux, and
                          MacOS using KStars. 3rd party integrations planned for
                          popular capture software.
                        </p>

                        <div className="mt_43 mb_26 d-flex justify-content-md-start justify-content-center">
                          <button className=" p_button header_card overflow-hidden position-relative  bg_orange border-0 color_white ff_manrope fw_600 fs_sm ">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plateform;
