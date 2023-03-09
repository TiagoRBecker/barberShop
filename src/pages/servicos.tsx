import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contato from "components/Contato";
import { SlMustache } from "react-icons/sl";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { Accordion } from "react-bootstrap";

const Servicos = () => {
  const phone = 51997338612;
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Head>
        <title>Serviços</title>
      </Head>
      <Layout>
        <section className="pageService">
          <h1>SERVIÇOS</h1>
          <h2>Tabela de Preços</h2>
          <div className="boxAccordion">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>TESOURA TRADICIONAL</Accordion.Header>
                <Accordion.Body>
                  <div className="accordionBodyPrice">
                    <div className="descPrice">
                      <span>Corte Tradicional</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                    </div>
                    <div className="descPrice">
                      <span>Corte Degradê</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Corte Infantil</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                  </div>
                 
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>NAVALHA</Accordion.Header>
                <Accordion.Body>
                <div className="accordionBodyPrice">
                    <div className="descPrice">
                      <span>Navalha Tradicional</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                    </div>
                    <div className="descPrice">
                      <span>Navalha Degradê</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Navalha Degradê Infantil</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                  </div>
                 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>BARBA</Accordion.Header>
                <Accordion.Body>
                <div className="accordionBodyPrice">
                    <div className="descPrice">
                      <span>Corte Barba Pequena </span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                    </div>
                    <div className="descPrice">
                      <span>Corte Barba Média</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Corte Barba Grande</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>INFANTIL</Accordion.Header>
                <Accordion.Body>
                <div className="accordionBodyPrice">
                    <div className="descPrice">
                      <span>Corte Tradicional</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                    </div>
                    <div className="descPrice">
                      <span>Corte Degradê</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Corte Máquina</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>MÁQUINA</Accordion.Header>
                <Accordion.Body>
                <div className="accordionBodyPrice">
                    <div className="descPrice">
                      <span>Máquina Tradicional</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                    </div>
                    <div className="descPrice">
                      <span>Máquina Degradê</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Máquina Corte Infantil</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>EXTRAS</Accordion.Header>
                <Accordion.Body>
                 <div className="accordionBodyPrice">
                    <div className="descPrice">
                      <span>Coloração</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                    </div>
                    <div className="descPrice">
                      <span>Platinado</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Mechas</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Hidratação</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Hidratação Barba grande</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Hidratação Barba Média</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Hidratação Barba Pequena</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Platinado Infantil</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                    <div className="descPrice">
                      <span>Coloraçao Infantil</span>
                      <p>R$59,99</p>
                    </div>
                    <div className="descService">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente adipisci praesentium quaerat eos possimus
                      </p>
                      
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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
                    <span></span>
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
                <h2>AGENDE SEU HORÁRIO</h2>
                <Contato />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Servicos;
