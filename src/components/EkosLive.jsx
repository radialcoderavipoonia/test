import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ekosliveimg from "../assets/images/png/ekos-live-img.png"

const EkosLive = () => {
  return (
    <>
      <section className="py-5 mt_-4">
        <div className="ekos_live_container pt_35 pt_lg_0">
          <Row className="justify-content-between align-items-center">
            <Col lg={5} md={5}>
              <div className="d-flex justify-content-center position-relative z-2">
                <img
                  src={ekosliveimg}
                  alt="ekos live img"
                  className="w-100 mw_358"
                />
                <div className="position-absolute top_0 left_0 z-n1">
                  <div className="ekos_live_circle"></div>
                </div>
                <div className="position-absolute bottom_0 right_0 z-n1">
                  <div className="ekos_live_circle"></div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={7}>
              <div>
                <p className="ff_raleway fw_500 fs_xl text-md-start text-center color_white m-0 pt_39 ">
                  What is EkosLive?
                </p>
                <p className="ff_manrope fs_sm fw_400 color_white text-md-start text-center opacity_06 pb_74 m-0">
                  EkosLive is an online cloud-based App to remotely control your
                  observatory from anywhere and at any time. Store, search,
                  share, and tag your images. Get notifications about the
                  imaging progress, live-stack deep sky targets, and invite
                  others to join your session. Engage with the astrophotography
                  community and discover new targets and equipment. Use it on
                  your phone, tablet, or computer.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default EkosLive;