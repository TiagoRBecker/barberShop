import Layout from "components/Layout";
import Image from "next/image";
const Sobre = () => {
  return (
    <Layout>
      <section className="pageSobre">
        
        <div className="pageSobreFlex">
          
          <div className="pageSobreImage">
            <Image
              src={"/sobreBarber.jpg"}
              width={800}
              height={800}
              alt="Sobre"
            />
          </div>
          <div className="pageSobreText">
          <h1>Sobre a Barbearia</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              libero adipisci ex. Totam itaque corrupti expedita enim sit
              incidunt. Molestiae quae a dolorum ullam facilis deleniti qui
              quaerat eius fuga!
            </p>
          </div>
        </div>
        <div className="pageSobreFlex">
          <div className="pageSobreText pageR">
          <h1>O Início da Barbearia</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              atque culpa voluptates officia, qui commodi ipsam neque quam
              voluptatem, impedit explicabo vitae repellendus nostrum cupiditate
              est at quibusdam architecto a.
            </p>
          </div>
          <div className="pageSobreImage">
            <Image
              src={"/sobreBarber2.jpg"}
              width={800}
              height={800}
              alt="Sobre"
            />
          </div>
        </div>
        <div className="pageSobreFlex">
          <div className="pageSobreImage">
            <Image
              src={"/sobreBarber3.jpg"}
              width={800}
              height={800}
              alt="Sobre"
            />
          </div>
          <div className="pageSobreText">
          <h1>Dias Atuais</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              magnam beatae. Voluptate, atque obcaecati. At deleniti,
              consectetur dolores, culpa eum adipisci quam est aspernatur ipsam
              tenetur molestiae quibusdam impedit exercitationem.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Sobre;
