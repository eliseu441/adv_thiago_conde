import React from "react";
import { Link } from "react-router-dom";

const TopAbout = () => {
  return (
    <>
      {/* <!-- about area start --> */}
      <div className="tp-about-area pt-140 pb-10">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="tp-about-left pr-90">
                <div className="tp-section-wrapper pt-5">
                  <span className="tp-section-subtitle">
                    traga sua causa para análise
                  </span>
                  <h3 className="tp-section-title pt-25 mb-30">
                    Nosso objetivo
                  </h3>
                  <p>
                  No campo do Direito Civil, nossa equipe está preparada para abordar uma ampla variedade de questões, 
                  como disputas contratuais, responsabilidade civil, propriedade, direito das sucessões e muito mais. 
                  Estamos profundamente empenhados em conduzir investigações meticulosas, realizar pesquisas detalhadas 
                  e construir argumentos sólidos para defender nossos clientes em tribunal.
                  </p>
                  <p className="pt-10">
                  Não medimos esforços para alcançar resultados concretos para nossos clientes. 
                  Nosso histórico de sucesso em casos de Direito Civil e outras áreas é um testemunho de 
                  nosso compromisso com a excelência e a busca da justiça.
                  </p>
                </div>
                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-right p-relative">
                <div className="about-img text-md-end">
                  <img src="assets/img/about/about.png" alt="" />
                </div>
                <div className="tp-about-info text-center grey-bg-4">
                  <h3>10</h3>
                  <h4>
                    Anos de <br />
                    Experiencia
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about about end--> */}
    </>
  );
};

export default TopAbout;
