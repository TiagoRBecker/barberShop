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
                        <h1>Tesoura Tradicional</h1>
                        <div className="pageServicePriceDecript"
                           >
                            <span>Corte Tradicional</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                           >
                            <span>Corte Degradê</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                          >
                            <span>Corte Infantil</span>
                            <p>R$59,90</p>
                        </div>
                        <h1 >NAVALHA</h1>
                        <div className="pageServicePriceDecript" 
                            >
                            <span>Navalha Tradicional</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                            >
                            <span>Navalha Degradê</span>
                            <p>R$59,90</p>
                        </div>
                        <h1 >BARBA</h1>
                        <div className="pageServicePriceDecript"
                           >
                            <span>Barba Grande</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript"
                           >
                            <span>Barba Média</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                           >
                            <span>Barba Pequena</span>
                            <p>R$59,90</p>
                        </div>
                        <h1>INFANTIL</h1>
                        <div className="pageServicePriceDecript"
                           >
                            <span>Corte Tradicional</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript"
                          >
                            <span>Corte Degradê</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                           >
                            <span>Corte Máquina</span>
                            <p>R$59,90</p>
                        </div>
                        <h1 >EXTRAS</h1>
                        <div className="pageServicePriceDecript"
                            >
                            <span>Coloração</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                            >
                            <span>Platinado</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                           >
                            <span>Mechas</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                           >
                            <span>Hidratação</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                           >
                            <span>Hidratação Barba grande</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                           >
                            <span>Hidratação Barba Média</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                           >
                            <span>Hidratação Barba Pequena</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                           >
                            <span>Platinado Infantil</span>
                            <p>R$59,90</p>
                        </div>
                        <div className="pageServicePriceDecript" 
                           >
                            <span>Coloraçao Infantil</span>
                            <p> R$ 59,90</p>
                        </div>
                    </div>

                </div>
                <div className="boxContatoGaleria">
        <div className="boxContatoFlex">
          <div className="boxContatoText" 
         
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