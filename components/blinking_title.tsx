import n from "../styles/navbar.module.css";

const Blinking_title = ({letter,color}) => {
    return ( 
        <span id={n.blinking_title} style={{color:color}}>
            {letter}
        </span>
     );
}
 
export default Blinking_title;