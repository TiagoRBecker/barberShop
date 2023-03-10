import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Button from "components/Button";
import Layout from "components/Layout";
import { SlMustache } from "react-icons/sl";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { gallery, servicesLayout ,iconsSocials} from "../../utils/utils";
import {ServiceLayout,Gallery,SocialIcons} from "../../utils/types"
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
     
<title>Bem-Vindo a Barbearia Silva</title>
<meta name="title" content="Bem-Vindo a Barbearia Silva"/>
<meta name="description" content="Na nossa barber shop, oferecemos serviços profissionais de corte de cabelo masculino, barba e bigode, em um ambiente descontraído e acolhedor. Agende sua visita agora."/>
<meta name="author" content="Tiago Becker"/>
<meta name="robots" content="index, follow"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://res.cloudinary.com/tiagobecker/image/upload/v1678113778/banner_pranpe.webp"/>
<meta property="og:title" content="Bem-Vindo a Barbearia Silva"/>
<meta property="og:description" content="Na nossa barber shop, oferecemos serviços profissionais de corte de cabelo masculino, barba e bigode, em um ambiente descontraído e acolhedor. Agende sua visita agora."/>
<meta property="og:image" content=""/>


<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://res.cloudinary.com/tiagobecker/image/upload/v1678113778/banner_pranpe.webp"/>
<meta property="twitter:title" content="Bem-Vindo a Barbearia Silva"/>
<meta property="twitter:description" content="Na nossa barber shop, oferecemos serviços profissionais de corte de cabelo masculino, barba e bigode, em um ambiente descontraído e acolhedor. Agende sua visita agora."/>
<meta property="twitter:image" content=""/>
      </Head>
      <Layout>
        <section className="boxBanner">
          
          <div className="boxChamada" data-aos="fade-up" data-aos-delay="200">
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
          <div className="boxSobreFlex" data-aos="fade-up" data-aos-delay="200">
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
                
               width={500}
               height={500}
                alt="Sobre-Barbearia"
                
                className="sobreBarberImg"
              />
            </div>
          </div>
        </section>
        <section className="boxServicos">
          <h1>SERVIÇOS</h1>
          <div className=" boxServicosFlex" data-aos="fade-up" data-aos-delay="200">
            {servicesLayout.map((service:ServiceLayout, indice: number) => (
              <Link href={service.label} key={indice}>
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

          <div className="boxServiceMustache" data-aos="fade-up" data-aos-delay="200">
            <span className="boxServiceBorder"></span>
            <SlMustache size={80} color={"#fff"} />
            <span className="boxServiceBorder"></span>
          </div>
        </section>
        <section className="boxContato">
          <div className="boxContatoFlex" data-aos="fade-up" data-aos-delay="200">
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
          <div className="boxGaleriaFlex" data-aos="fade-up" data-aos-delay="200">
            {gallery.map((itens: Gallery, indice?: number) => (
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
          <div className="boxGaleriaBtn" data-aos="fade-up" data-aos-delay="200">
            <Link href={"/galeria"}>
              <Button title="GALERIA" className="btnClass" />
            </Link>
          </div>
          <div className="boxDepoimentos" data-aos="fade-up" data-aos-delay="200">
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
          <div className="boxSocials" data-aos="fade-up" data-aos-delay="200">
            <h1>SIGA-NOS</h1>
            <div className="boxSocialsFLex">
              {
               iconsSocials.map((icons:SocialIcons, indice:number)=>(
                <div className="boxSocialsIcons" key={indice}>
                <Link href={icons.path} target="_blank" >
                 <Image src={icons.url} width={48} height={48} alt={icons.alt} className={icons.custom}/>
                </Link>
              </div>
               ))
              }
             
             
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
