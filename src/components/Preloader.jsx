import React from "react";
import ekostext from "../assets/images/png/page-logo.png"
import ekoslivepagelogo from "../assets/images/png/ekos-live-img.png"
const Preloader = () => {
  setTimeout(() => {
    document.querySelector(".none").style.display = "none";
    document.body.classList.remove("overflow_hidden");
  }, 2500);
  return (
    <>
      <section className="bg-black">
        <div className="none">
          <div className="bg-black text-center d-flex flex-column align-items-center justify-content-center start-0 top-0  w-100 z_1111111 min-vh-100 position-fixed ">
            <img
              src={ekoslivepagelogo}
              alt="main page logo"
              className="d-flex align-items-center justify-content-center animation_preloader "
            />
            <div className="animation_preloader d-flex justify-content-center">
              <img src={ekostext} alt="ekos text logo " className="w-100" />
            </div>
            <div className="w-50 border_preloader rounded-pill overflow-hidden mt-5">
              <div className="w_60 h_30 bg_gradient animation_preloader_2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preloader;
