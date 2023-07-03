import React from 'react'
import { Col, Row } from 'react-bootstrap';
import astrobin from "../assets/images/png/asrtobin-integration.png"
import telescopius from "../assets/images/png/telescopius-integrations.png"
import asap from "../assets/images/png/asap-integrations.png"
import astrometry from "../assets/images/png/astrometry-integrations.png"

const Integrations = () => {
  return (
    <>
      <section className="pt_38 pb_40 position-relative">
        <div className="integrations_container">
          <p className="ff_raleway fw_500 fs_xl pb_25 pb_lg_0 color_white text-center m-0">
            Integrations
          </p>
          <Row className="justify-content-center pt-5 position-relative z-2">
            <Col lg={3} md={4} xs={6}>
              <div className="integrations_box d-flex justify-content-center text-center flex-column h-100">
                <div>
                  <img
                    src={astrobin}
                    alt="astrobin image"
                    className="mw_122 w-100 object-fit-contain h_90"
                  />
                </div>
                <p className="ff_raleway color_orange_change fw_600 pt_28 fs_lg color_white ">
                  Astrobin
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="integrations_box d-flex justify-content-center text-center flex-column h-100">
                <div>
                  <img
                    src={telescopius}
                    alt="telescopius image"
                    className="mw_111 w-100 object-fit-contain h_87"
                  />
                </div>
                <p className="ff_raleway color_orange_change fw_600 pt_28 fs_lg color_white ">
                  Telescopius
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="integrations_box d-flex justify-content-center text-center flex-column h-100 mt-md-0 mt-4">
                <div>
                  <img
                    src={asap}
                    alt="astrobin 2 image"
                    className="mw_80 w-100 object-fit-contain h_81"
                  />
                </div>
                <p className="ff_raleway color_orange_change fw_600 pt_28 fs_lg color_white ">
                  Astrobin
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} xs={6}>
              <div className="integrations_box d-flex justify-content-center text-center flex-column h-100 mt-lg-0 mt-4">
                <div className="h_81 pt_11">
                  <img
                    src={astrometry}
                    alt="astrometry image"
                    className="mw_188 w-100 object-fit-contain h_48"
                  />
                </div>
                <div>
                  <p className="ff_raleway color_orange_change fw_600 pt_28 fs_lg color_white ">
                    Astrometry.net
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="position-absolute d-none d-md-block right_0 z-1 top_55 ">
          <div className="shadow_circle_integrations"></div>
        </div>
        <div className="position-absolute d-n one d-m d-block right_154 z-1  ">
          <div className="shadow_circle_integrations"></div>
        </div>
        <div className="position-absolute d-none d-md-block right_-88 z-1  ">
          <div className="shadow_circle_integrations"></div>
        </div>
      </section>
    </>
  );
}

export default Integrations;