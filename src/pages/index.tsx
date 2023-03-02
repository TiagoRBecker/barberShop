import Image from "next/image";
import Link from "next/link";
import {  useEffect } from "react";
import Button from "components/Button";
import Layout from "components/Layout";
import { SlMustache } from "react-icons/sl";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
 
} from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import {  servicesLayout } from "../../utils/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import Contato from "../../components/Contato/index";
export default function Home() {
  useEffect(() => {
    AOS.init();
  });
 

  return (
    <Layout>
      <section className="boxBanner">
        <div data-aos="fade-in"  data-aos-delay="300" className="boxChamada">
          <div className="boxChamadaTitle">BARBEARIA SILVA</div>
          <div className="boxChamadaText">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quos
              deleniti magnam, est perspiciatis molestias cumque ut minus
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
        <div className="boxBannerOpenClosed"></div>
      </section>
      <section className="boxSobre">
        <div className="boxSobreFlex">
          <div className="boxSobreText" 
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          >
            <div className="boxSobreTitle">
              <h2>Sobre a barbearia </h2>
            </div>
            <div className="boxSobreTitleSub">
              <h1>Bem-Vindo a Barbearia Silva</h1>
            </div>
            <div className="boxSobreDescription">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                tempore, nobis debitis amet similique sunt itaque odit adipisci
                excepturi magni sint culpa minima eveniet error dignissimos! Sit
                numquam reprehenderit aliquam!
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
          <div className="boxSobreImg" 
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          >
            <Image
              src={"/sobre.jpg"}
              width={800}
              height={500}
              alt="Sobre-Barbearia"
            />
          </div>
        </div>
      </section>
      <section className="boxServicos">
        <h1 data-aos="fade-in " data-aos-delay="300">SERVIÇOS</h1>
        <div className=" boxServicosFlex">
          {servicesLayout.map((service: any, indice: number) => (
            <Link href={"/servicos"} key={indice} >
            <div className="boxService" 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              <div className="boxServiceImg">
                <Image src={service.img} width={50} height={50} alt="Tesoura" />
                <span>{service.name}</span>
              </div>
            </div>
            </Link>
          ))}
        </div>

        <div className="boxServiceMustache" data-aos="fade-up" data-aos-delay="300">
          <span className="boxServiceBorder"></span>
          <SlMustache size={80} color={"#fff"} />
          <span className="boxServiceBorder"></span>
        </div>
      </section>
      <section className="boxContato">
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
                <p>(51) 997-338-612 </p>
              </Link>
            </div>

            <div className="boxContatoDescr">
              <Link href={"#"}>
                <span>
                  <AiOutlineWhatsApp size={25} color={"#ccc"} />
                </span>
                <p>(51) 997-338-612</p>
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
      </section>
      <section className="boxGaleria">
        <h1 data-aos="fade-in " data-aos-delay="300">GALERIA </h1>
        <div className="boxGaleriaFlex">
          <div className="boxGaleriaImg"
          
          >
            <Image
            data-aos="fade-right"
            data-aos-offset="250"
            data-aos-easing="ease-in-sine"
              src={"/corte1.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
          <div className="boxGaleriaImg"
         
          >
            <Image
            data-aos="fade-right"
            data-aos-offset="350"
            data-aos-easing="ease-in-sine"
              src={"/corte2.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
          <div className="boxGaleriaImg"
          >
            <Image
            data-aos="fade-right"
            data-aos-offset="450"
            data-aos-easing="ease-in-sine"
              src={"/corte3.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
          <div className="boxGaleriaImg">
            <Image
            data-aos="fade-left"
            data-aos-offset="250"
            data-aos-easing="ease-in-sine"
              src={"/corte4.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
          <div className="boxGaleriaImg">
            <Image
            data-aos="fade-left"
            data-aos-offset="350"
            data-aos-easing="ease-in-sine"
              src={"/corte5.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
          <div className="boxGaleriaImg">
            <Image
            data-aos="fade-left"
            data-aos-offset="450"
            data-aos-easing="ease-in-sine"
              src={"/corte6.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
        </div>
        <div className="boxGaleriaBtn" 
         data-aos="fade-up"
        >
          <Button title="GALERIA" className="btnClass" />
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
                obcaecati rem explicabo rerum ullam vitae voluptas sint! Tempore
                accusantium reiciendis aliquam vel.
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
        <div className="boxSocials"  data-aos="fade-in " data-aos-delay="300">
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
  );
}
