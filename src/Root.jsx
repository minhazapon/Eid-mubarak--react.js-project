
import { Outlet } from "react-router-dom";
import Head from "./Head";
import Nav from "./Nav";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <Head></Head>
            <Nav></Nav>
           <Outlet></Outlet>
           <Footer></Footer>
           
            
        </div>
    );
};

export default Root;