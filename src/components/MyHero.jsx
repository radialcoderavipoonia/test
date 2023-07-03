import React from "react";
import { Col, Row } from "react-bootstrap";
import MyNav from "./MyNav";
import searchlogo from "../assets/images/png/search-logo.png";

const MyHero = () => {
  return (
    <>
      <section className="h_100vh d-flex flex-column bg_hero">
        <MyNav />
        <div className="d-flex justify-content-center ">
          <div className="w_398 bg_nav_input rounded-pill d-flex align-items-center d-lg-none d-block">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent w_300 border-0 fst-italic color_opacity"
            />
            <span className="cursor-pointer">
              <img src={searchlogo} alt="search logo" />
            </span>
          </div>
        </div>
        <div className="hero_container  d-flex flex-column justify-content-end flex-grow-1">
          <div className="d-flex align-items-end pb-5">
            <Row className="align-items-end">
              <Col lg={8}>
                <div className="pb-md-0 pb-4">
                  <h2 className="ff_raleway fw_400 fs_xxl color_white m-0">
                    Your ultimate <span className="color_orange">cloud</span>{" "}
                    astrophotography platform
                  </h2>
                  <p className="pt_13 ff_manrope fw_400 fs_sm color_opacity m-0">
                    Capture, share, and explore the sky from anywhere and at any
                    time.
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="d-flex justify-content-md-end justify-content-start ">
                  <button className="ff_manrope header_card overflow-hidden position-relative  fw_600 fs_sm color_white bg_orange p_button border-0">
                    Discover
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyHero;
