import Image from "next/image";
import Link from "next/link";
import {useState} from "react"
import Button from "components/Button";
import Layout from "components/Layout";
import { SlMustache } from "react-icons/sl";
import { FaPhoneAlt, FaWhatsapp} from "react-icons/fa";
import { ImQuotesLeft,ImQuotesRight } from "react-icons/im";
export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService ] = useState('Barba')
  const [barber, setBarber] = useState('Tiago')
  const handleDadosForm  =(e:any)=>{
        e.preventDefault()
        console.log(name,email,phone,service,barber)
    const url = "https://api.whatsapp.com/send?phone=5551997338612&text=" // Seu numero
    + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Nome*: " + name + "%0a" // Dados do formulário
    + "*Telefone*: " + phone + "%0a"
    + "*E-mail*: " + email + "%0a"
    
   window.open(url as string  , '_blank')?.focus() 
}
  
  const [OpenOrClosed , setOpenOrClosed] = useState(5)
  return (
    <Layout>
      <section className="boxBanner">
        <div className="boxChamada">
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
        <div className="boxBannerOpenClosed">
          {
            OpenOrClosed <= 16 ?
            <img src="/open.png" alt="" width={250} height={150} />
            :
            <div className="">
            </div>
            
          }
       
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
          <div className="boxSobreImg">
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
        <h1>SERVIÇOS</h1>
        <div className=" boxServicosFlex">
          <div className="boxService">
            <div className="boxServiceImg">
              <Image
                src={"/tesoura.png"}
                width={50}
                height={50}
                alt="Tesoura"
              />
              <span>Tesoura Tradicional</span>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Corte Tradiconal</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$39.90</p>
              </div>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Corte Luxo</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$89.90</p>
              </div>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Corte Crianças</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$29.90</p>
              </div>
            </div>
          </div>

          <div className="boxService">
            <div className="boxServiceImg">
              <Image
                src={"/navalha.png"}
                width={50}
                height={50}
                alt="Tesoura"
              />
              <span>Navalha Tradicional</span>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Barba Pequena</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$49.90</p>
              </div>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Barba Média</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$69.90</p>
              </div>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Barba Grande</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$79.90</p>
              </div>
            </div>
          </div>
          <div className="boxService">
            <div className="boxServiceImg">
              <Image
                src={"/maquina.png"}
                width={50}
                height={50}
                alt="Tesoura"
              />
              <span>Máquina </span>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Tradicional</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$49.90</p>
              </div>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Degradê</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$79.90</p>
              </div>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Arte Visual</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$89.90</p>
              </div>
            </div>
          </div>
          <div className="boxService">
            <div className="boxServiceImg">
              <Image src={"/tinta.png"} width={50} height={50} alt="Tesoura" />
              <span>Extras</span>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Pintura</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$99.90</p>
              </div>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Mechas</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$109.90</p>
              </div>
            </div>
            <div className="boxServicePrice">
              <div className="boxServicePriceTitle">
                <p>Plátinado</p>
              </div>
              <div className="boxServicePriceBorder">
                <span></span>
              </div>
              <div className="boxServicePricePrice">
                <p>R$199.90</p>
              </div>
            </div>
          </div>
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
                  <FaPhoneAlt size={15} color={"#ccc"} />
                </span>
                <p>(51)xxx-xxx-xxx</p>
              </Link>
            </div>

            <div className="boxContatoDescr">
              <Link href={"#"}>
                <span>
                  <FaWhatsapp size={20} color={"#ccc"} />
                </span>
                <p>(51)xxx-xxx-xxx</p>
              </Link>
            </div>
          </div>
          <div className="boxContatoForm">
            <h1>AGENDE SEU HORÁRIO</h1>
            <form className="boxContatoFormulario">
              <div className="boxContatoInput">
                <input type={"text"} 
                placeholder="Nome"
                value={name}
                onChange={e  => setName(e.target.value)}
                />
              </div>
              <div className="boxContatoInput">
                <input type={"email"}
                value={email}
                onChange={ e => setEmail(e.target.value)} 
                placeholder="E-mail" />
              </div>
              <div className="boxContatoInput">
                <input type={"text"}
                value={phone}
                 onChange={e=> setPhone(e.target.value)}
                 placeholder="Telefone" />
              </div>
              <div className="boxContatoServices">
                <div className="boxContatoCortes">
                  <select>
                    <option value="">Selecione o serviço</option>
                    <option value="">Corte de Cabelo</option>
                    <option value="">Barba</option>
                    <option value="">Coloração / Mechas</option>
                  </select>
                  <div className="boxContatoColaborador">
                    <select>
                      <option value="">Selecione o colaborador</option>
                      <option value="">Tiago Becker</option>
                      <option value="">Guilherme oliveira</option>
                      <option value="">Denis Padilha</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="boxContatoBtn" onClick={handleDadosForm }>
                <Button title="ENVIAR" className="btnClass"/>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="boxGaleria">
        <h1>GALERIA </h1>
        <div className="boxGaleriaFlex">
          <div className="boxGaleriaImg">
            <Image
              src={"/corte1.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
          <div className="boxGaleriaImg">
            <Image
              src={"/corte2.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
          <div className="boxGaleriaImg">
            <Image
              src={"/corte3.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
          <div className="boxGaleriaImg">
            <Image
              src={"/corte4.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
          <div className="boxGaleriaImg">
            <Image
              src={"/corte5.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
          <div className="boxGaleriaImg">
            <Image
              src={"/corte6.jpg"}
              width={300}
              height={300}
              alt="Serviços"
            />
          </div>
        </div>
        <div className="boxGaleriaBtn">
          <Button title="GALERIA" className="btnClass" />
        </div>
        <div className="boxDepoimentos">
          <div className="boxDepoimentoDescript">
           <div className="quoteLeft">
            <ImQuotesLeft size={50} color={"#fff"}/>
           </div>
          <div className="boxDepoimentoDescr">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            illo eos libero culpa. In odio commodi corporis obcaecati rem
            explicabo rerum ullam vitae voluptas sint! Tempore accusantium
            reiciendis aliquam vel.
            </p>
          </div>
          <div className="quoteRigth">
            <ImQuotesRight size={50} color={"#fff"}/>
          </div>
          </div>
          <div className="boxDepoimentoCliente">
            <h2>Juníor Menendez</h2>
          </div>
        </div>
      </section>
    </Layout>
  );
}
