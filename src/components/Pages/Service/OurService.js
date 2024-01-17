import React from "react";
import { ServiceItem } from "../../Home/Services";

const OurService = () => {
  return (
    <>
      <div className="tp-service-ara grey-bg-4 pt-140 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center mb-70">
                <span className="tp-section-subtitle mb-30">NOSSOS SERVIÇOS</span>
                <h2 className="tp-section-title">Processos de maior demanda</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ServiceItem
              icon="pe-7s-hammer"
              title="Defesa de busca e apreensão"
              desc="A Defesa de Busca e Apreensão diz respeito às estratégias e procedimentos legais utilizados para proteger os interesses da parte contra a qual uma ação de busca e apreensão foi movida. Visa questionar a legalidade da ação ou defender os direitos do requerido durante o processo de busca e apreensão."
            />
            <ServiceItem
              icon="pe-7s-home"
              title="Direito familiar"
              desc="O Direito da Família é uma área do direito que trata das relações familiares, incluindo casamento, divórcio, guarda de filhos, pensão alimentícia, adoção e outras questões relacionadas à família. Ele visa regular os direitos e deveres dos membros da família e proteger seus interesses."
            />
            <ServiceItem
              icon="pe-7s-glasses"
              title="Direito dos autistas"
              desc="
              O Direito dos Autistas refere-se às leis e regulamentos que protegem os direitos e a inclusão das pessoas no espectro autista, assegurando acesso a oportunidades, tratamento justo e respeito à sua dignidade e autonomia."
            />
            <ServiceItem
              icon="pe-7s-car"
              title="Direito de transito"
              desc="O Direito de Trânsito se refere às leis e regulamentos que regem a circulação de veículos e pessoas nas vias públicas, estabelecendo regras de segurança, direitos e responsabilidades dos condutores, pedestres e passageiros, bem como as penalidades por infrações."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
