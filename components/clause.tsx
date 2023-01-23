import h from "../styles/Home.module.css";
import brush from "../public/toothbrush.png";

const Clause = ({content}) => {
    return ( 
        <div id={h.clause}>
            <span id={h.logo} style={{backgroundImage: `url(${brush.src})`}}>
                
            </span>
            <span id={h.text}>
                {content}
            </span>
        </div>
     );
}
 
export default Clause;