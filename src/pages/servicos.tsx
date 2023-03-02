import Link from "next/link";
import { useEffect } from "react";
import Layout from "components/Layout"
import AOS from "aos";
import "aos/dist/aos.css";
import Contato from "components/Contato";
import { SlMustache } from "react-icons/sl";
import {
    AiOutlinePhone,
    AiOutlineWhatsApp,
   
  } from "react-icons/ai";
const Servicos = () => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <Layout>
            <section className="pageService">
                <h1>SERVIÇOS</h1>
                <h2>Tabela de Preços</h2>
                <div className="pageServiceFlex">
                    <div className="pageServicesPrice">
                        <h1 data-aos="fade-in " data-aos-delay="200">Tesoura Tradicional</h1>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Corte Tradicional</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Corte Degradê</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Corte Infantil</span>
                            <p>R$59,90</p>
                        </div>
                        <h1 data-aos="fade-in " data-aos-delay="200">NAVALHA</h1>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Navalha Tradicional</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Navalha Degradê</span>
                            <p>R$59,90</p>
                        </div>
                        <h1 data-aos="fade-in " data-aos-delay="200">BARBA</h1>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Barba Grande</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Barba Média</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Barba Pequena</span>
                            <p>R$59,90</p>
                        </div>
                        <h1 data-aos="fade-in " data-aos-delay="200">INFANTIL</h1>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Corte Tradicional</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Corte Degradê</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Corte Máquina</span>
                            <p>R$59,90</p>
                        </div>
                        <h1 data-aos="fade-in " data-aos-delay="200">EXTRAS</h1>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Coloração</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Platinado</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Mechas</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Hidratação</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Hidratação Barba grande</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Hidratação Barba Média</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Hidratação Barba Pequena</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Platinado Infantil</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            <span>Coloraçao Infantil</span>
                            <p> R$ 59,90</p>
                        </div>
                    </div>

                </div>
                <div className="boxContatoGaleria">
        <div className="boxContatoFlex">
          <div className="boxContatoText" 
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          >
            <div className="boxContatoMustache">
              <SlMustache size={80} fill={"#fff"} />
            </div>
            <div className="boxContatoDescr">
              <span>Horário:</span>
              <p>Seg á Sábado das 9h as 19h</p>
            </div>
            <div className="boxContatoDescr">
              <span>Rua:</span>
              <p>xxxxx-xxxxxx-xxxxx 1562</p>
            </div>
            <div className="boxContatoDescr">
              <span>Bairro:</span>
              <p>Floresta, Poa-Rs</p>
            </div>

            <div className="boxContatoDescr">
              <Link href={"#"}>
                <span>
                  <AiOutlinePhone size={25} color={"#ccc"} />
                </span>
                <p>(51) xxx-xxx-xxx </p>
              </Link>
            </div>

            <div className="boxContatoDescr">
              <Link href={"#"}>
                <span>
                  <AiOutlineWhatsApp size={25} color={"#ccc"} />
                </span>
                <p>(51) xxx-xxx-xxx</p>
              </Link>
            </div>
          </div>
          <div className="boxContatoForm"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          >
            <h1>AGENDE SEU HORÁRIO</h1>
            <Contato/>
          </div>
        </div>
        </div>
            </section>
        </Layout>
    )
}
export default Servicos