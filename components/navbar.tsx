import n from "../styles/navbar.module.css";
import Image from "next/image";
import brace from "../public/brace.png";
import implant from "../public/implant.png";
import extract from "../public/extract.png";
import cleaning from "../public/cleaning.png";
const Navbar = () => {
    return ( 
        <div className={n.navbar}>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${brace.src})`}}>
                </span>
                <h3>Braces</h3>
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
        </div>
     );
}
 
export default Navbar;