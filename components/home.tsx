import h from "../styles/Home.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import Chat from "./chat";
import Navbar from "./navbar";
import Blinking_title from "./blinking_title";
import Clause from "./clause";

const Home_p = () => {
    const [modal, setModal] = useState(false)
    const braces = "The purpose of orthodontic treatment is to make the best of your teeth. This includes straightening your teeth so you're able to care for your teeth and gums more easily, and improving your bite so you can eat more comfortably. And your smile will benefit, too. Treatment almost always involves using braces to straighten crooked, crowded or protruding teeth, close gaps between teeth, and correct the bite so the top and bottom teeth meet when the mouth is closed. You'll need to have healthy teeth and gums before you can have a brace fitted. This is because you must be able to keep your teeth and your brace very clean while you're wearing it to avoid getting tooth decay or gum disease. Treatment usually lasts from 12 months to 2 and a half years, and visits to the orthodontist are needed every 4 to 10 weeks."
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
                <Clause content={"The purpose of orthodontic treatment is to make the best of your teeth."}/>
            </div>
            <Chat modal={modal}/>
        </div>
      );
}
 
export default Home_p;