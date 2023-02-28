import Footer from "components/Footer";
import Nav from "components/Navigation";
import { ReactNode } from "react";
type Props = {
    children: ReactNode
  }

const Layout = ({children}:Props)=>{
    return (
         <>
         <Nav/>
         <main>
          {children}
         </main>
         <Footer/>
         </>
    )
}

export default Layout;