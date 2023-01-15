import h from "../styles/Home.module.css";
import Image from "next/image";
import Link from 'next/link';

const Home_p = () => {
    return (
        <div className={h.home}>
            <div className={h.home_skeleton}>
                <div className={h.home_skeleton_heart}>
                    <Link href="/cardio">
                        <Image
                        src="/heart.png"
                        width={60}
                        height={100}
                        alt="xxx"
                        />
                    </Link>
                </div>
                <div className={h.home_skeleton_helpdesk}>
                <Link href="/chat">
                        <Image
                        src="/helpdesk.png"
                        width={160}
                        height={120}
                        alt="xxx"
                        />
                         </Link>
                </div>
                <span style={{position:"absolute", top:"200px", left:"200px"}}>
                    <Link  href="/desk">
                        Desk "Officer only"
                    </Link>
                </span>
                
                    
            </div>
                
        </div>
      );
}
 
export default Home_p;