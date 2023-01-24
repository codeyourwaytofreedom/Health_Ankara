import n from "../styles/navbar.module.css";
import Image from "next/image";
import brace from "../public/brace.png";
import implant from "../public/implant.png";
import extract from "../public/extract.png";
import cleaning from "../public/cleaning.png";
import filling from "../public/filling.png";
import crown from "../public/crown.png";
import Blinking_title from "./blinking_title";


const Navbar = () => {
    return ( 
        <div className={n.navbar}>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${brace.src})`}}>
                </span>
                <span id={n.rest}>
                    <Blinking_title letter={"B"} color={"navy"}/>races
                </span>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${implant.src})`}}>
                </span>
                <span id={n.rest}>
                    <Blinking_title letter={"I"} color={"navy"}/>mlants
                </span>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${extract.src})`}}>
                </span>
                <span id={n.rest}>
                    <Blinking_title letter={"E"} color={"navy"}/>xtraction
                </span>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${cleaning.src})`}}>
                </span>
                <span id={n.rest}>
                    <Blinking_title letter={"T"} color={"navy"}/>eeth  Cleaning
                </span>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${filling.src})`}}>
                </span>
                <span id={n.rest}>
                    <Blinking_title letter={"F"} color={"navy"}/>illings
                </span>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${crown.src})`}}>
                </span>
                <span id={n.rest}>
                    <Blinking_title letter={"D"} color={"navy"}/>ental  Crowns
                </span>
            </button>
        </div>
     );
}
 
export default Navbar;