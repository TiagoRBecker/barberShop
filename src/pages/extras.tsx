import Link from "next/link";
import Layout from "components/Layout"
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { SlMustache } from "react-icons/sl";
import Contato from "components/Contato";

const Extras = ()=>{
  const phone = 51997338612;
    return(
      <Layout>
      <section className="pageService">
       <h1>Tabela de preços Extras</h1>
       <div className="pageServiceFlex">
        <div className="pageServicesPrice">
          <h2>EXTRAS</h2>
                <div className="pageServicePriceDecript">
                  <span>Coloração</span>
                  <p>R$59,90</p>
                </div>
                <div className="pageServicePriceDecript">
                  <span>Platinado</span>
                  <p>R$59,90</p>
                </div>
                <div className="pageServicePriceDecript">
                  <span>Mechas</span>
                  <p>R$59,90</p>
                </div>
                <div className="pageServicePriceDecript">
                  <span>Hidratação</span>
                  <p>R$59,90</p>
                </div>
                <div className="pageServicePriceDecript">
                  <span>Hidratação Barba grande</span>
                  <p>R$59,90</p>
                </div>
                <div className="pageServicePriceDecript">
                  <span>Hidratação Barba Média</span>
                  <p>R$59,90</p>
                </div>
                <div className="pageServicePriceDecript">
                  <span>Hidratação Barba Pequena</span>
                  <p>R$59,90</p>
                </div>
                <div className="pageServicePriceDecript">
                  <span>Platinado Infantil</span>
                  <p>R$59,90</p>
                </div>
                <div className="pageServicePriceDecript">
                  <span>Coloraçao Infantil</span>
                  <p> R$ 59,90</p>
                </div>
        </div>
       </div>
       <div className="boxContatoGaleria">
            <div className="boxContatoFlex">
              <div className="boxContatoText">
                <div className="boxContatoMustache">
                  <SlMustache size={80} fill={"#fff"} />
                </div>
                <div className="boxContatoAdress">
                  <div className="boxAdressTitle">
                    <h2>LOCALIZAÇÃO</h2>
                  </div>
                  <div className="boxAdress">
                    <p>Rua: Jesrusálem Nº 1652 / Bairro: Floresta Poa/Rs</p>
                  </div>
                  <div className="boxIframeAdress">
                    <iframe
                      title="bairro floresta"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13818.471798810153!2d-51.21701958346447!3d-30.01912472943655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979bb9de83c59%3A0x8ea873ac15723dd0!2sFloresta%2C%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1677592007953!5m2!1spt-BR!2sbr"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="boxContatoNumbers">
                  <div className="boxContatoNumbersTitle">
                    <h2>CONTATO</h2>
                  </div>
                  <div className="boxContatoNumber">
                    <Link href={`tel:${phone}`}>
                      <span>
                        <AiOutlinePhone size={25} color={"#fff"} />
                      </span>
                      <p>(51) 997-338-612</p>
                    </Link>
                  </div>
                  <div className="boxContatoNumber">
                    <Link
                      target={"_blank"}
                      href={"https://api.whatsapp.com/send?phone=5551997338612"}
                    >
                      <span>
                        <AiOutlineWhatsApp size={25} color={"#fff"} />
                      </span>
                      <p>(51) 997-338-612</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="boxContatoForm">
                <h1>AGENDE SEU HORÁRIO</h1>
                <Contato />
              </div>
            </div>
       </div>
      </section>
      </Layout>
    
    )
}
export default Extras