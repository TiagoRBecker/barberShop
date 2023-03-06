import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Button from "components/Button";
import Layout from "components/Layout";
import { SlMustache } from "react-icons/sl";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { gallery, servicesLayout } from "../../utils/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import Contato from "../../components/Contato/index";
import Head from "next/head";
export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  const phone = 51997338612;

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <section className="boxBanner">
          <Image
            src="/banner.webp"
            alt="banner"
            width={1080}
            height={600}
            priority
            sizes="(min-width: 66em) 33vw,
                   (min-width: 44em) 50vw,
                    100vw"
            className="banner"
          />
          <div className="boxChamada">
            <div className="boxChamadaTitle">BARBEARIA SILVA</div>
            <div className="boxChamadaText">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                quos deleniti magnam, est perspiciatis molestias cumque ut minus
                numquam aliquam enim at! Odio doloribus nam ipsa exercitationem
                accusamus incidunt possimus!
              </p>
            </div>
            <div className="boxButton">
              <Link href={"/contato"}>
                <Button title="Agende seu Horário" className="btnClass" />
              </Link>
            </div>
          </div>
        </section>
        <section className="boxSobre">
          <div className="boxSobreFlex">
            <div className="boxSobreText">
              <div className="boxSobreTitle">
                <h2>Sobre a barbearia </h2>
              </div>
              <div className="boxSobreTitleSub">
                <h1>Bem-Vindo a Barbearia Silva</h1>
              </div>
              <div className="boxSobreDescription">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam tempore, nobis debitis amet similique sunt itaque odit
                  adipisci excepturi magni sint culpa minima eveniet error
                  dignissimos! Sit numquam reprehenderit aliquam!
                </p>
              </div>
              <div className="boxSobreMustache">
                <span className="boxBorder"></span>
                <SlMustache size={35} color={"#fff"} />
                <span className="boxBorder"></span>
              </div>
              <div className="boxSobrHistory">
                <p>De 2019 a 2023</p>
              </div>
            </div>
            <div className="boxSobreImg">
              <Image
                src={"/sobre.webp"}
                priority
                width={500}
                height={500}
                alt="Sobre-Barbearia"
                sizes="(min-width: 66em) 33vw,
                       (min-width: 44em) 50vw,
                        100vw"
                className="sobreBanner"
              />
            </div>
          </div>
        </section>
        <section className="boxServicos">
          <h1>SERVIÇOS</h1>
          <div className=" boxServicosFlex">
            {servicesLayout.map((service: any, indice: number) => (
              <Link href={"/servicos"} key={indice}>
                <div className="boxService">
                  <div className="boxServiceImg">
                    <Image
                      src={service.img}
                      width={50}
                      height={50}
                      alt="Tesoura"
                    />
                    <span>{service.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="boxServiceMustache">
            <span className="boxServiceBorder"></span>
            <SlMustache size={80} color={"#fff"} />
            <span className="boxServiceBorder"></span>
          </div>
        </section>
        <section className="boxContato">
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
        </section>
        <section className="boxGaleria">
          <h1>GALERIA </h1>
          <div className="boxGaleriaFlex">
            {gallery.map((itens: any, indice?: number) => (
              <Link href={"/galeria"} key={indice}>
                <div className="boxGaleriaImg">
                  <Image
                    src={itens.url}
                    width={300}
                    height={300}
                    alt={itens.alt}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="boxGaleriaBtn">
            <Link href={"/galeria"}>
              <Button title="GALERIA" className="btnClass" />
            </Link>
          </div>
          <div className="boxDepoimentos">
            <div className="boxDepoimentoDescript">
              <div className="quoteLeft">
                <ImQuotesLeft size={50} color={"#fff"} />
              </div>
              <div className="boxDepoimentoDescr">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis illo eos libero culpa. In odio commodi corporis
                  obcaecati rem explicabo rerum ullam vitae voluptas sint!
                  Tempore accusantium reiciendis aliquam vel.
                </p>
              </div>
              <div className="quoteRigth">
                <ImQuotesRight size={50} color={"#fff"} />
              </div>
            </div>

            <div className="boxDepoimentoCliente">
              <h2>Juníor Menendez</h2>
            </div>
          </div>
          <div className="boxSocials">
            <h1>SIGA-NOS</h1>
            <div className="boxSocialsFLex">
              <div className="boxSocialsIcons">
                <img src="/face.png" alt="" className="face" />
              </div>
              <div className="boxSocialsIcons">
                <img src="/twitter.png" alt="" className="tw" />
              </div>
              <div className="boxSocialsIcons">
                <img src="/insta.png" alt="" className="insta" />
              </div>
              <div className="boxSocialsIcons">
                <img src="/tk.png" alt="" className="tk" />
              </div>
              <div className="boxSocialsIcons">
                <img src="/yt.png" alt="" className="yt" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
