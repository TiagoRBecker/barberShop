import Head from "next/head";
import Image from "next/image";
import Layout from "components/Layout";
const Sobre = () => {
  return (
    <>
    <Head>
      <title>Sobre</title>
    </Head>
    <Layout>
      <section className="pageSobre">
       
        <div className="pageFlex">
          <div className="pageText">
            <div className="pageTextTitle">
              <h1>O Início</h1>
                
            </div>
            <div className="pageTextDesc">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias.
              </p>
            </div>
          </div>
          <div className="pageTextImg">
            <Image
              src={"/sobreBarber.jpg"}
              width={800}
              height={800}
              alt="sobre"
            />
          </div>
        </div>
        <div className="pageFlex">
        <div className="pageTextImg">
            <Image
              src={"/sobreBarber5.jpg"}
              width={800}
              height={800}
              alt="sobre"
            />
        </div>
          <div className="pageText">
            <div className="pageTextTitle">
              <h1>A Barbearia Silva</h1>
                
            </div>
            <div className="pageTextDesc">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              excepturi consequuntur perspiciatis aut magnam veniam pariatur
              harum fugit repudiandae impedit at maxime nostrum labore id dolore
              voluptates non, sequi alias.
              </p>
            </div>
          </div>
          
        </div>
        
       
        <div className="boxImageBarber">
          <div className="boxImgBarber">
            <Image src={"/sobreBarber2.jpg"} width={800} height={500} alt="sobre"/>
          </div>
          <div className="boxImgBarber">
          <Image src={"/sobreBarber3.jpg"} width={800} height={500} alt="sobre"/>
          </div>
          <div className="boxImgBarber">
          <Image src={"/sobreBarber4.jpg"} width={800} height={500} alt="sobre"/>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};
export default Sobre;
