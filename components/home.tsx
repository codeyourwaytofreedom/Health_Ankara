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

const Home_p = () => {
    const [modal, setModal] = useState(false)
    const [service, setService] = useState(braces)

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
                        <h1 style={{position:"relative", left:"-10px"}}>Ask me</h1>
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
                <div className={h.home_happy_left}>

                </div>
                <div className={h.home_happy_central} style={{backgroundImage: `url(${happy1.src})`}}>

                </div>
                <div className={h.home_happy_right}>

                </div>
            </div>
        </div>
      );
}
 
export default Home_p;