import React from "react";
import { Col, Row } from "react-bootstrap";

const Prices = () => {
  return (
    <>
      <section className="bg_prices py-5">
        <div className="hero_container py-5">
          <Row
            className="justify-content-end
          "
          >
            <Col lg={10}>
              <p className="ff_raleway fw_500 fs_xl color_white">Pricing Plans</p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Prices;
