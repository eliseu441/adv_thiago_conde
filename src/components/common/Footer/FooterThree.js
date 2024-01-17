import React from 'react';
import { Link } from 'react-router-dom';

const FooterThree = () => {
  return (
    <footer>
      <div className="tp-footer__area black-bg">
        <div className="tp-footer">
          {/* <!-- main-footer start  --> */}
          <div className="tp-footer__main">
            <div className="container">
              <div className="tp-footer-border pt-30 pb-70">
                <div className="pb-30 ">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="footer-logo mb-30">
                        <img src="/assets/img/logo/logo.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Meios de contato:</h3>
                      <ul>
                        <li><p className='text-white'>WHATSAPP: <a class='text-white'href="https://api.whatsapp.com/send/?phone=5512982949104&text&type=phone_number&app_absent=0">(12) 98294-9104</a></p></li>
                        <li><p className='text-white'>INSTAGRAM: <a class='text-white'href="https://www.instagram.com/thiago.condeadv/">@thiago.condeadv</a></p></li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main footer end  --> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;