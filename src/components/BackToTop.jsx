import React, { useState, useEffect } from "react";
import backtotopimg from "../assets/images/png/search-logo.png";
const BackToTop = () => {
  const [BackToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 150) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  const backtotop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      {BackToTop ? (
        <div
          onClick={backtotop}
          className="position-fixed cursor_pointer bottom_40 right_40 z-3 h_50 w_50"
        >
          <button className="bg-black border-0 transform_rotate rounded-pill transisation animate_backtotop">
            <svg
              className="z-3 position-relative"
              width="46"
              height="46"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17.9247" cy="17.6415" r="17.6415" fill="#f60" />
              <path
                d="M15.4181 10.3442L22.174 17.0801C22.2542 17.1602 22.3111 17.2471 22.3448 17.3407C22.3785 17.4342 22.3951 17.5345 22.3945 17.6414C22.3945 17.7483 22.3779 17.8485 22.3448 17.9421C22.3117 18.0356 22.2547 18.1225 22.174 18.2027L15.4181 24.9586C15.231 25.1457 14.9971 25.2393 14.7165 25.2393C14.4358 25.2393 14.1952 25.139 13.9948 24.9386C13.7943 24.7381 13.694 24.5042 13.694 24.2369C13.694 23.9696 13.7943 23.7357 13.9948 23.5352L19.8886 17.6414L13.9948 11.7475C13.8076 11.5604 13.7141 11.3297 13.7141 11.0555C13.7141 10.7812 13.8143 10.5441 14.0148 10.3442C14.2153 10.1437 14.4492 10.0435 14.7165 10.0435C14.9837 10.0435 15.2176 10.1437 15.4181 10.3442Z"
                fill="#FAFAFA"
              />
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BackToTop;
