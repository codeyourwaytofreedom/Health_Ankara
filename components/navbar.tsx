import n from "../styles/navbar.module.css";
import Image from "next/image";
import brace from "../public/brace.png";
import implant from "../public/implant.png";
import extract from "../public/extract.png";
import cleaning from "../public/cleaning.png";
import Blinking_title from "./blinking_title";

const Navbar = () => {
    return ( 
        <div className={n.navbar}>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${brace.src})`}}>
                </span>
                <span style={{fontSize:"21px"}}>
                    <Blinking_title letter={"B"} color={"purple"}/>rac <Blinking_title letter={"E"} color={"purple"}/> s
                </span>
  
                
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${implant.src})`}}>
                </span>
                <h3>Implants</h3>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${extract.src})`}}>
                </span>
                <h3>Extractions</h3>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${cleaning.src})`}}>
                </span>
                <h3>Teeth Cleaning</h3>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${extract.src})`}}>
                </span>
                <h3>Extractions</h3>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${cleaning.src})`}}>
                </span>
                <h3>Teeth Cleaning</h3>
            </button>
        </div>
     );
}
 
export default Navbar;