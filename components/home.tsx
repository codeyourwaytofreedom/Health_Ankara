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
                    {/* <Link href="/cardio"> */}
                        <Image
                        src="/dental.jpeg"
                        width={600}
                        height={408}
                        alt="xxx"
                        />
                    {/* </Link> */}
                </div>
                <div className={h.home_skeleton_helpdesk}>
                {/* <Link href="/chat"> */}
                        <Image
                        onClick={()=> setModal(!modal)}
                        src="/helpdesk.png"
                        width={160}
                        height={120}
                        alt="xxx"
                        />
                         {/* </Link> */}
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