import h from "../styles/Home.module.css";
import Image from "next/image";

const Home_p = () => {
    return (
        <div className={h.home}>
            <div className={h.home_skeleton}>
<                   Image
                    src="/heart.png"
                    width={90}
                    height={130}
                     />
            </div>
                
        </div>
      );
}
 
export default Home_p;