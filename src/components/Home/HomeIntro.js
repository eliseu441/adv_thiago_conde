import React, { useRef } from "react";
import { Link } from "react-router-dom";

const HomeIntro = () => {
  return (
    <>
      {/* <!-- hero slider start --> */}
      <div className="slider-home">
        <div className="tp-slider-area p-relative ">
          <div className="tp-hero_slider slider-active p-relative">
                <div >
                  <div
                    className="tp-single-slider tp-slider-height p-relative"
                    style={{ backgroundImage: `url(assets/img/bg/wallpaper_home.jpg)` }}
                  >
                    <div className="tp-slider-text black-bg d-inline-block">
                     
                      <h3 className="tp-slider-title">
                      inovando a maneira de atendimento
                       
                      </h3>

                      <a
                        href="https://api.whatsapp.com/send/?phone=5512982949104&text&type=phone_number&app_absent=0"
                        className="tp-slider-btn mt-40 d-inline-block"
                      >
                        
                        <i className="fab fa-whatsapp"></i>   Contate me
                      </a>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      {/* <!-- hero slider end  --> */}
    </>
  );
};

export default HomeIntro;
