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
                    <Blinking_title letter={"B"} color={"navy"}/>rac <Blinking_title letter={"E"} color={"navy"}/> s
                </span>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${implant.src})`}}>
                </span>
                <span id={n.rest}>
                    Im<Blinking_title letter={"P"} color={"navy"}/>lant <Blinking_title letter={"S"} color={"navy"}/>
                </span>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${extract.src})`}}>
                </span>
                <span id={n.rest}>
                    <Blinking_title letter={"E"} color={"navy"}/>xtrac <Blinking_title letter={"T"} color={"navy"}/>ion
                </span>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${cleaning.src})`}}>
                </span>
                <span id={n.rest}>
                    <Blinking_title letter={"T"} color={"navy"}/>eeth  <Blinking_title letter={"C"} color={"navy"}/>leaning
                </span>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${filling.src})`}}>
                </span>
                <span id={n.rest}>
                    <Blinking_title letter={"F"} color={"navy"}/>illing  <Blinking_title letter={"S"} color={"navy"}/>
                </span>
            </button>
            <button className={n.navbar_tab}>
                <span style={{backgroundImage: `url(${crown.src})`}}>
                </span>
                <span id={n.rest}>
                    <Blinking_title letter={"D"} color={"navy"}/>ental  <Blinking_title letter={"C"} color={"navy"}/>rowns
                </span>
            </button>
        </div>
     );
}
 
export default Navbar;