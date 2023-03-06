import Link from "next/link";
import { useRouter } from "next/router";
import{navigation} from "../../utils/utils"
import { SlMustache } from "react-icons/sl";
const Footer = () => {
  const router = useRouter()
  return (
    <footer>
      <section className="boxUtils" >
           
           <h1>Navegaçao</h1>
          
            
            <nav className="boxNavUtilsMenu">
            <ul>
              {
                navigation.map((menu:any, indice:number)=>(
                  <li key={indice} >
                  <Link href={menu.path}  className={router.pathname === menu.path ? "colorPath":""}>
                      {menu.label}
                  </Link>
                </li>
                ))
              }
            </ul>
            </nav>
        
      </section>
      <div className="boxFooterceMustache" >
          
          <SlMustache size={25} color={"#fff"} />
          
        </div>
      <div className="credits">
        <p >Todos Direitos Reservados &copy; Barbearia Silva</p>
        <p >Desenvolvido por Tiago Becker</p>
      </div>
    </footer>
  );
};
export default Footer;
