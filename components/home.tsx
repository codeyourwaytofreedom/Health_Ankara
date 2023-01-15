import h from "../styles/Home.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

const Home_p = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className={h.home}>
            <div className={h.home_skeleton}>
                <div className={h.home_skeleton_heart}>
                    <Link href="/cardio">
                        <Image
                        src="/heart.png"
                        width={135}
                        height={180}
                        alt="xxx"
                        />
                    </Link>
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
                <span style={{position:"absolute", top:"200px", left:"200px"}}>
                    <Link  href="/desk">
                        Desk "Officer only"
                    </Link>
                </span>
            </div>
            <div className={h.home_chatbox} style={{display: modal ? "grid" : "none"}}>
                    Modal
            </div>
                
        </div>
      );
}
 
export default Home_p;