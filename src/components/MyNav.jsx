import React from "react";
import nav_btn from "../assets/images/png/page-logo.png";
import { ImCross } from "react-icons/im";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Container } from "react-bootstrap";
import searchlogo from "../assets/images/png/search-logo.png";
const MyNav = () => {
  const [First, setFirst] = React.useState(true);
  function clickshow() {
    setFirst(!First);
  }
  if (!First) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="nav_bg ">
        {/* btn */}
        <Container>
          <div className=" d-flex justify-content-between d-lg-none align-items-center px-4 py-3">
            <span>
              <a href="#">
                <img
                  src={nav_btn}
                  alt="nav_btn"
                  className="w-100 mw_161 position-relative z_10"
                />
              </a>
            </span>
            <h2
              onClick={clickshow}
              className="pointer position-relative z_10 text-white ps-4"
            >
              {First ? <AiOutlineAlignRight /> : <ImCross />}
            </h2>
          </div>
          {/* nav */}
          <div className={`nav_show ${First ? "" : "ps-0 showw"}`}>
            <div className="position-relative">
              <div className="pt_20 pb_19">
                <div className="">
                  <div className=" d-flex align-items-center flex-lg-row flex-column min_100vh_lg justify-content-center justify-content-lg-between">
                    <span className=" d-lg-block d-none">
                      <a href="#">
                        <img
                          src={nav_btn}
                          alt="nav_logo"
                          className="w-100 mw_161"
                        />
                      </a>
                    </span>
                    <div className="w_398 bg_nav_input rounded-pill d-xl-flex align-items-center d-none d-xl-block">
                      <input
                        type="text"
                        placeholder="Search here..."
                        className="bg-transparent w_300 border-0 opacity_06 fst-italic color_white"
                      />
                      <span className="cursor-pointer">
                        <img src={searchlogo} alt="search logo" />
                      </span>
                    </div>
                    <div className="d-xl-none d-none d-lg-block">
                      <button className="search_bg border-0 rounded-pill px-2 py-2">
                        <img src={searchlogo} alt="search logo" />
                      </button>
                    </div>

                    <ul className="d-flex align-items-center mb-lg-0 flex-lg-row flex-column ps-0 gap-lg-0 gap-2 ">
                      <li onClick={clickshow} className="mt_lg_24">
                        <a
                          href="#about"
                          className="ff_raleway fw_400 hover_font mr_33 mr_0_lg  fs_sm color_white mb-0 opacity_06"
                        >
                          About
                        </a>
                      </li>
                      <li onClick={clickshow}>
                        <a
                          href="#features"
                          className="ff_raleway fw_400 hover_font mr_33 mr_0_lg fs_sm color_white mb-0 opacity_06"
                        >
                          Features
                        </a>
                      </li>
                      <li onClick={clickshow}>
                        <a
                          href="#pricing"
                          className="ff_raleway fw_400 hover_font mr_33 mr_0_lg fs_sm color_white mb-0 opacity_06"
                        >
                          Pricing
                        </a>
                      </li>
                      <li onClick={clickshow}>
                        <a
                          href="#support"
                          className="ff_raleway fw_400 hover_font mr_33 mr_0_lg fs_sm color_white mb-0 opacity_06"
                        >
                          Support
                        </a>
                      </li>
                      <li onClick={clickshow}>
                        <a
                          href="#faqs"
                          className="ff_raleway fw_400 hover_font mr_33 mr_0_lg fs_sm color_white mb-0 opacity_06"
                        >
                          FAQs
                        </a>
                      </li>
                      <button className="ff_raleway fw_400  header_card overflow-hidden position-relative p_button bg-transparent border_nav_button mb-0 mt-lg-0 mt-4 color_white fs_sm">
                        Login
                      </button>
                      <button className="ff_raleway fw_400 box_shadow_hover header_card overflow-hidden position-relative p_button color_white border-0 mt_lg_12 ms-lg-2 ms-0 mb-0 bg_orange fs_sm">
                        SignUp
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyNav;
