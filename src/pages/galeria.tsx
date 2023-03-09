import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "components/Layout";
import { useEffect } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { SlMustache } from "react-icons/sl";
import Contato from "components/Contato";
import { galleryGrid } from "../../utils/utils";
import {GalleryGrid} from "../../utils/types"
const Galeria = () => {
  const phone = 51997338612;
  useEffect(() => {
    Gallery;
  });
 

  return (
    <>
      <Head>
        <title>Galeria</title>
      </Head>
      <Layout>
        <section className="pageGaleria">
          <h1>GALERIA</h1>
          <p>Confira alguns de nossos trabalhos </p>
          <Gallery>
            <div className="container-galeria">
              {
                galleryGrid.map((img:GalleryGrid, indice:number)=>(
                  <div className={img.gridLayout} key={indice}>
                <Item
                  original={img.url}
                  thumbnail={img.url}
                  width="800"
                  height="800"
                >
                  {({ ref, open }) => (
                    <Image
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      onClick={open}
                      src={img.url}
                      width={800}
                      height={800}
                      className={img.imgClass}
                      alt={img.alt}
                    />
                  )}
                </Item>
              </div>
                ))
              }
              
            </div>
          </Gallery>
          <div className="boxServiceMustache">
            <span className="boxServiceBorder"></span>
            <SlMustache size={80} color={"#fff"} />
            <span className="boxServiceBorder"></span>
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
    </>
  );
};
export default Galeria;
