import n from "../styles/navbar.module.css";
import Image from "next/image";
import brace from "../public/brace.png";
import implant from "../public/implant.png";
import redbg from "../public/redbg.jpg";

const Navbar = () => {
    return ( 
        <div className={n.navbar}>
            <button className={n.navbar_brace}>
                <span style={{backgroundImage: `url(${brace.src})`}}>
                </span>
                <h3>Braces</h3>
            </button>
            <button className={n.navbar_brace}>
                <span style={{backgroundImage: `url(${implant.src})`}}>
                </span>
                <h3>Implants</h3>
            </button>
        </div>
     );
}
 
export default Navbar;