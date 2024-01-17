import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSticky from "../../../hooks/use-sticky";
import Menus from "./Menus";

const Menu = ({ header_style_2 }) => {
  const [isOffCanvas, setOffCanvas] = useState(false);
  const { sticky } = useSticky();
  function topFunction(e) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header__area ${
            header_style_2
              ? "header__area-2 pl-110 pr-110"
              : "header__transparent pr-90 pl-90"
          } header-sticky-active ${sticky ? "header-sticky" : ""}`}
        >
          <div className="header__main" id="header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-4 col-7 p-1">
                  <div className="logo" onClick={e => topFunction(e)}>
                      <img
                        src="assets/img/logo/logo.png"
                        alt="logo"
                      />
                  </div>
                </div>
                <div className=" col-lg-7 col-md-4 d-none d-md-block">
                  <div
                    className={`main-menu ${
                      header_style_2 ? "normal-menu" : ""
                    } text-center`}
                  >
                    <nav id="mobile-menu" className="d-none d-xl-block">
                    </nav>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Menu;
