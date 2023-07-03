import React from "react";
import { Col, Row } from "react-bootstrap";
import checkboxabout from "../assets/images/png/ekos-about-checkbox.png";
import ekosaboutimg from "../assets/images/png/ekos-about-img.png";
const EkosAbout = () => {
  return (
    <>
      <section id="about" className="pt_37 pt_0_md pb-3">
        <div className="hero_container">
          <Row className="justify-content-between flex-md-row flex-column-reverse align-items-center pb-5">
            <Col xl={5} md={6}>
              <div>
                <p className="ff_raleway fw_500 text-md-start text-center fs_xl color_white m-0">
                  About EkosLive
                </p>
                <div className="d-flex align-items-center pt_12">
                  <img src={checkboxabout} alt="about section checkbox" />
                  <p className="ps-4 ff_manrope fs_sm fw_400 color_lightwhite m-0">
                    Powered by Open Source technologies.
                  </p>
                </div>
                <div className="d-flex align-items-center pt-lg-4 pt-3">
                  <img src={checkboxabout} alt="about section checkbox" />
                  <p className="ps-4 ff_manrope fs_sm fw_400 color_lightwhite m-0">
                    Transforms your astrophotography capture platform to the
                    cloud.
                  </p>
                </div>
                <div className="d-flex align-items-center pt-lg-4 pt-3">
                  <img src={checkboxabout} alt="about section checkbox" />
                  <p className="ps-4 ff_manrope fs_sm fw_400 color_lightwhite m-0">
                    Online community where you can explore, share, and
                    collaborate your passion in Astronomy.
                  </p>
                </div>
                <div className="d-flex align-items-center  pt-lg-4 pt-3">
                  <img src={checkboxabout} alt="about section checkbox" />
                  <p className="ps-4 ff_manrope fs_sm fw_400 color_lightwhite m-0">
                    Access to global community-driven observatories. Host and
                    broadcast virtual star parties.
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={7} md={6}>
              <div className="pt-md-0 pt-5">
                <img
                  src={ekosaboutimg}
                  alt="ekos about section image"
                  className="w-100 mw_628 opacity_06"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default EkosAbout;
