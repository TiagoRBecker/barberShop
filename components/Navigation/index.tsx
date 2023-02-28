import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GiMustache } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import {navigation} from "../../utils/utils"
const Nav = ()=>{
    const router = useRouter()
    const [showMenu ,setShowMenu] = useState(false)
    const handleMenuOpen = ()=>{
      setShowMenu(!showMenu)
      
    }
    const handleClosedMenu = ()=>{
      setShowMenu(false)
    }
    return(
        <header className="header">
             <div className="logo">
               <GiMustache size={35} color={"#ccc"}/>
            </div>
         <nav className="menuDesk">
         <ul>
           {
            navigation.map((menu:any,indice:number)=>(
              
                <li key={indice}>
                <Link href={menu.path} >
                    <h3 className={router.pathname === menu.path ? "colorPath":""}>{menu.label}</h3>
                </Link>
              </li>
             
            ))
           }
          </ul>
            
            <div className="mobile" >
            <AiOutlineMenu size={35} color={"#ccc"} onClick={handleMenuOpen} />
            </div>
       
         </nav>
         <nav className={showMenu ?"menuMobile":"menuMobileClosed"}>
           
            <ul>
              {
                navigation.map((menu:any, indice:number)=>(
                  <li key={indice} onClick={handleClosedMenu}>
                  <Link href={menu.path} >
                      <h3 className={router.pathname === menu.path ? "colorPath":""}>{menu.label}</h3>
                  </Link>
                </li>
                ))
              }
            </ul>
           
       
         </nav>
         </header>
    )
}
export default Nav;