import h from "../styles/Home.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import Chat from "./chat";
import Navbar from "./navbar";
import Blinking_title from "./blinking_title";
import Clause from "./clause";
import {braces} from "./texts.js";
import happy1 from "../public/happy1.jpg";
import happy2 from "../public/happy2.jpg";
import happy3 from "../public/happy3.jpg";
import happy4 from "../public/happy4.jpg";
import happy5 from "../public/happy5.jpg";
import happy6 from "../public/happy6.jpg";
import happy7 from "../public/happy7.jpg";
import happy8 from "../public/happy8.jpg";

const Home_p = () => {
    const [modal, setModal] = useState(false)
    const [service, setService] = useState(braces)
    const one = [happy1,happy2,happy3,happy4, happy5, happy6,happy7, happy8]
    const two = [happy4, happy5, happy6]
    const three = [happy7, happy8, happy1]

    const [smiles,setSmiles] = useState(one)

    return (
        <div className={h.home}>
            <div className={h.home_skeleton}>
                <div className={h.home_skeleton_heart}>
                </div>
                <Navbar/>
                <div className={h.home_skeleton_helpdesk}>
                        <Image
                        onClick={()=> setModal(!modal)}
                        src="/askme.png"
                        width={90}
                        height={120}
                        alt="xxx"
                        />
                        <h2>Ask me</h2>
                </div>
{/*                 <span style={{position:"absolute", top:"50px", right:"50px"}}>
                    <Link  href="/desk">
                        Desk "Officer only"
                    </Link>
                </span> */}
            </div>
            <div className={h.home_servicedetails}>
                {
                    service.map(c=>
                    c
                    )
                }
            </div>
            <Chat modal={modal}/>
            <div className={h.home_happy}>
                <div className={h.home_happy_right} style={{backgroundImage: `url(${smiles[0].src})`}}>
                </div>
                <div className={h.home_happy_central} style={{backgroundImage: `url(${smiles[3].src})`}}>
                </div>
                <div className={h.home_happy_left} style={{backgroundImage: `url(${smiles[2].src})`}}>
                </div>
            </div>
        </div>
      );
}
 
export default Home_p;