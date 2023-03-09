import Head from "next/head";
import Image from "next/image";
import Layout from "components/Layout";
import {gallerybarber} from "../../utils/utils";
import { SlMustache } from "react-icons/sl";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
const Sobre = () => {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>
      <Layout>
        <section className="pageSobre">
          <div className="sobrePage">
            <h1>BARBEARIA SILVA</h1>
            <div className="boxSobreMustache">
              <span className="boxBorder"></span>
              <SlMustache size={35} color={"#fff"} />
              <span className="boxBorder"></span>
              
            </div>
            <p>2019 a 2023</p>
            <div className="sobreDescBarber">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                convallis lacus id pretium bibendum. Aenean eu nulla volutpat,
                sodales sapien vitae, feugiat metus. Phasellus varius, augue et
                porttitor euismod, sapien diam scelerisque massa, in euismod
                magna nulla vitae ante. Donec volutpat viverra lorem ut porta.
                Nam semper cursus felis eu sagittis. Vivamus at sagittis odio,
                et tincidunt orci. Sed eu nibh lorem. Vestibulum id ullamcorper
                orci. Duis vehicula turpis id enim dignissim, ac elementum mi
                ullamcorper. Praesent elementum elementum ante sed scelerisque.
                Praesent lorem lectus, posuere vel consequat consectetur,
                ullamcorper vel arcu. In vel mauris non mauris laoreet iaculis
                sed et mauris. Maecenas at eleifend dui. Praesent luctus
                scelerisque aliquet. Aenean non velit dolor. Aenean non risus
                fermentum, blandit urna sit amet, scelerisque velit. Maecenas
                cursus orci id quam congue convallis. Morbi ipsum orci, rutrum
                ac purus vitae, porttitor ullamcorper odio. Pellentesque
                tincidunt nisl eu convallis tempor. Nulla facilisi. Etiam augue
                lorem, tristique non tempus eu, eleifend sit amet nisi. Quisque
                vestibulum vitae tellus in dapibus. Ut vel sagittis lacus.
                Suspendisse blandit mattis orci ac elementum. Pellentesque
                accumsan hendrerit erat, egestas aliquet mauris. Donec fermentum
                enim vel dignissim lobortis. Maecenas a neque vel nulla
                malesuada tempus. Praesent vitae lacus at elit efficitur
                malesuada. Quisque et sem at felis suscipit vestibulum sit amet
                at tortor. Vestibulum risus odio, congue a felis sit amet,
                vehicula fermentum velit. Proin quis nulla commodo lorem sodales
                lacinia. Vestibulum a vehicula urna. Quisque semper magna in
                dolor interdum, id faucibus erat pulvinar. Nam massa purus,
                dapibus mattis erat tempor, fringilla fermentum massa. Quisque
                id nunc tincidunt risus bibendum venenatis. Vivamus ac bibendum
                eros. Nulla orci arcu, cursus eget egestas in, mattis id dui.
                Pellentesque vitae ipsum mi. Etiam quam eros, iaculis ultricies
                mauris ac, tincidunt pellentesque dui. Nam tempus mauris turpis,
                eget efficitur nisl efficitur non. Proin eros lacus, aliquet vel
                porta et, egestas vitae eros. Praesent eget euismod orci.
                Pellentesque blandit ultricies nulla, sit amet semper tortor
                tincidunt et. Donec at euismod purus. Suspendisse in mattis
                odio, sit amet egestas augue. Nunc vulputate at lectus in
                dictum. Proin sodales nec eros scelerisque commodo. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Proin convallis, tellus at mattis ultricies,
                eros turpis viverra tellus, a pellentesque mauris lacus vitae
                tortor. Phasellus nec consectetur metus. Aliquam ultricies
                viverra dolor et euismod. Pellentesque iaculis augue nec mauris
                rutrum, ac ornare ligula suscipit. Integer commodo id felis ac
                elementum. Phasellus ante arcu, semper ac tellus nec, pretium
                euismod magna. Duis nec luctus erat. Maecenas rutrum tellus leo,
                at condimentum nulla porttitor vel. Phasellus sit amet mattis
                est. Mauris tempor nulla eros, ultricies mollis felis convallis
                non. Etiam dictum id eros at rutrum.
              </p>
            </div>
            <div className="sobreGaleriaImg">
              <h1>GALERIA </h1>
              <Gallery>
            <div className="container-galeria">
              {
                gallerybarber.map((img:any, indice:number)=>(
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
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Sobre;
