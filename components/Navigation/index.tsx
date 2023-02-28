import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GiMustache } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
const Nav = ()=>{
    const router = useRouter()
    const [showMenu ,setShowMenu] = useState(false)
    const handleMenuOpen = ()=>{
      setShowMenu(!showMenu)
      console.log(showMenu)
    }
    return(
        <header className="header">
             <div className="logo">
               <GiMustache size={35} color={"#ccc"}/>
            </div>
         <nav className="menuDesk">
           
            <ul>
              <li>
                <Link href={"/"} >
                    <h3 className={router.pathname === "/" ? "colorPath":""}>Home</h3>
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
            <div className="mobile" >
            <AiOutlineMenu size={35} color={"#ccc"} onClick={handleMenuOpen} />
            </div>
       
         </nav>
         <nav className={showMenu ?"menuMobile":"menuMobileClosed"}>
           
            <ul>
              <li>
                <Link href={"/"} >
                    <h3 className={router.pathname === "/" ? "colorPath":""}>Home</h3>
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
         </header>
    )
}
export default Nav;