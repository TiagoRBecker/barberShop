import Link from "next/link";
import Layout from "components/Layout"
import { Gallery, Item } from 'react-photoswipe-gallery'
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
 
} from "react-icons/ai";
import 'photoswipe/dist/photoswipe.css'
import { SlMustache } from "react-icons/sl";
import Contato from "components/Contato"
const Galeria = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
  }


  return (
    <Layout>
      <section className="pageGaleria">
        <h1>GALERIA</h1>
         <p>Confira alguns de nossos trabalhos </p>
        <Gallery >

          <div className="container-galeria">
            <div className="item-galeria w-2 h-2">

              <Item

                original="/corte1.jpg"
                thumbnail="/corte1.jpg"
                width="800"
                height="800"
              >
                {({ ref, open }) => (
                  <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src="/corte1.jpg"
                    className="img-galeria"
                  />
                )}
              </Item>
            </div>
            <div className="item-galeria item-galeria w-2 h-1">

              <Item

                original="/corte5.jpg"
                thumbnail="/corte5.jpg"
                width="800"
                height="800"
              >
                {({ ref, open }) => (
                  <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src="/corte5.jpg"
                    className="img-galeria"
                  />
                )}
              </Item>
            </div>
            <div className="item-galeria item-galeria w-1 h-2">

              <Item

                original="/corte2.jpg"
                thumbnail="/corte2.jpg"
                width="800"
                height="800"
              >
                {({ ref, open }) => (
                  <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src="/corte2.jpg"
                    className="img-galeria"
                  />
                )}
              </Item>
            </div>
            <div className="item-galeria item-galeria w-1 h-1">

              <Item

                original="/corte3.jpg"
                thumbnail="/corte3.jpg"
                width="800"
                height="800"
              >
                {({ ref, open }) => (
                  <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src="/corte3.jpg"
                    className="img-galeria"
                  />
                )}
              </Item>
            </div>
            <div className="item-galeria item-galeria w-1 h-1">

              <Item

                original="/corte4.jpg"
                thumbnail="/corte4.jpg"
                width="800"
                height="800"
              >
                {({ ref, open }) => (
                  <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src="/corte4.jpg"
                    className="img-galeria"
                  />
                )}
              </Item>
            </div>
            <div className="item-galeria item-galeria w-1 h-1">

              <Item

                original="/corte7.jpg"
                thumbnail="/corte7.jpg"
                width="800"
                height="800"
              >
                {({ ref, open }) => (
                  <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src="/corte7.jpg"
                    className="img-galeria"
                  />
                )}
              </Item>
            </div>
            <div className="item-galeria item-galeria w-1 h-1">

              <Item

                original="/corte6.jpg"
                thumbnail="/corte6.jpg"
                width="800"
                height="800"
              >
                {({ ref, open }) => (
                  <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src="/corte6.jpg"
                    className="img-galeria"
                  />
                )}
              </Item>
            </div>
          </div>
        </Gallery>
        <div className="boxServiceMustache" data-aos="fade-up" data-aos-delay="300">
          <span className="boxServiceBorder"></span>
          <SlMustache size={80} color={"#fff"} />
          <span className="boxServiceBorder"></span>
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
export default Galeria