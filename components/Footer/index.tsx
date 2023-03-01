import Link from "next/link";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <section className="boxUtils" >
        <div className="boxUtilsFlex" data-aos="fade-in ">
          <div className="boxLocation ">
            <h1>Localização</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13818.471798810153!2d-51.21701958346447!3d-30.01912472943655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979bb9de83c59%3A0x8ea873ac15723dd0!2sFloresta%2C%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1677592007953!5m2!1spt-BR!2sbr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="boxContatoUtils">
            <h1>Contatos</h1>
            <div className="ct">
              <Link href={"#"}>
                <span>
                  <AiOutlinePhone size={20} color={"#ccc"} />
                </span>
                <p>(51) xxx-xxx-xxx</p>
              </Link>
            </div>
            <div className="ct">
              <Link href={"#"}>
                <span>
                  <AiOutlineWhatsApp size={20} color={"#ccc"} />
                </span>
                <p>(51) xxx-xxx-xxx</p>
              </Link>
            </div>
            <div className="ct">
              <Link href={"#"}>
                <span>
                  <AiOutlineMail size={20} color={"#ccc"} />
                </span>
                <p>cliente@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className="boxNavutil">
            <h1>Menu</h1>
            <nav className="boxNavUtilsMenu">
              <ul>
                <li>
                  <Link href={"/"}>
                    <h3>Home</h3>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <h3>Sobre</h3>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <h3>Serviços</h3>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <h3>Galeria</h3>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <h3>Contato</h3>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div className="credits">
        <span >Todos Direitos Reservados &copy; Barbearia Silva</span>
        <p >Desenvolvido por Tiago Becker</p>
      </div>
    </footer>
  );
};
export default Footer;
