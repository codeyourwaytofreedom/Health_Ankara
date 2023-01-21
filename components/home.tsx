import h from "../styles/Home.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import Chat from "./chat";
import Navbar from "./navbar";

const Home_p = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className={h.home}>
            <div className={h.home_skeleton}>
                <div className={h.home_skeleton_heart}>
                </div>
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
                <span style={{position:"absolute", bottom:"50px", left:"50px"}}>
                    <Link  href="/desk">
                        Desk "Officer only"
                    </Link>
                </span>
            </div>
            <Chat modal={modal}/>
            <Navbar/>
        </div>
      );
}
 
export default Home_p;