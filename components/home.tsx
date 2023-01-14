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
                        />
                    </Link>
                </div>
                
                    
            </div>
                
        </div>
      );
}
 
export default Home_p;