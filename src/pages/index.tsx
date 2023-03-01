import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "components/Button";
import Layout from "components/Layout";
import { SlMustache } from "react-icons/sl";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { services, colaborador, servicesLayout } from "../../utils/utils";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Barba");
  const [barber, setBarber] = useState("Tiago");
  const [date, setDate] = useState<Date>();

  const dateAtual = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const dataAtual = ano + "-" + mes + "-" + dia;
    return dataAtual;
  };

  const handleDadosForm = (e: any) => {
    e.preventDefault();
    const data = new Date(date as any);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const dataAtual = dia + "-" + mes + "-" + ano;

    const url =
      "https://api.whatsapp.com/send?phone=5551997338612&text=" + // Seu numero
      "*Formulário de Contato*" +
      "%0a" + // Mensagem personalizada
      "%0a" + // Quebra de linha
      "*Nome*: " +
      name +
      "%0a" + // Dados do formulário
      "*Telefone*: " +
      phone +
      "%0a" +
      "*E-mail*: " +
      email +
      "%0a" +
      "*Serviço*: " +
      service +
      "%0a" +
      "*Barbeiro*: " +
      barber +
      "%0a" +
      "*Data Agendada*: " +
      dataAtual +
      "%0a";

    window.open(url as string, "_blank")?.focus();
  };

  return (
    <Layout>
      <section className="boxBanner">
        <div data-aos="fade-in" className="boxChamada">
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
            <Button title="Agende seu Horário" className="btnClass" />
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
            <Link href={"/servicos"}>
            <div className="boxService" key={indice} 
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
            <form className="boxContatoFormulario">
              <div className="boxContatoInput">
                <input
                  type={"text"}
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="boxContatoInput">
                <input
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                />
              </div>
              <div className="boxContatoInput">
                <input
                  type={"text"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefone"
                />
              </div>
              <div className="boxContatoDate">
                <div className="boxContatoAgenda">
                  <h2>Escolha a Data</h2>
                  <input
                    type="date"
                    min={dateAtual()}
                    className="date"
                    value={date as any}
                    onChange={(e) => setDate(e.target.value as any)}
                  />
                </div>
              </div>
              <div className="boxContatoServices">
                <div className="boxContatoCortes">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="Selecione o Serviço">
                      Selecione o Serviço
                    </option>
                    {services.map((service: any, indice: number) => (
                      <option key={indice} value={service.path}>
                        {service.path}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="boxContatoColaborador">
                  <select
                    value={barber}
                    onChange={(e) => setBarber(e.target.value)}
                  >
                    <option value="Selecione o Colaborador">
                      Selecione o colaborador
                    </option>
                    {colaborador.map((barber: any, indice: number) => (
                      <option key={indice} value={barber.name}>
                        {barber.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="boxContatoBtn" onClick={handleDadosForm}>
                <Button title="ENVIAR" className="btnClass" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="boxGaleria">
        <h1>GALERIA </h1>
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
