import { useEffect, useState, useRef } from "react";
import d from "../styles/desk.module.css";
import io from 'socket.io-client';

const socket = io.connect("http://localhost:9000")

const User = ({uniq, messages}) => {
    const [user_id, setUserid] = useState();
    const ans = useRef(); 
    //const [messages, setMessages] = useState([]);
/*     useEffect(() => {
        socket.on('connect', () => {
        });
    
        socket.on('disconnect', () => {
        });

        socket.on('receive-question', (q, id) => {
            console.log(id)
            console.log(uniq) */
/*             if(uniq === id)
            {
                setUserid(id)
                setMessages([...messages, q])
            } */
/*           });
      }); */

    const handle_desk = () => {
      socket.connect()
      socket.emit("answer",{to:uniq,text:ans.current.value})
      ans.current.value = "";
    }
    
    return ( 
        <div className={d.desk_actives_user}>
            <h3>{uniq}</h3>
            {
                messages.map((m) => 
                  <div>
                    {m.q ?? m.a}
                  </div>
                )
              }
            <input type="text" ref={ans}/>
            <button onClick={handle_desk}>Answer the Customer</button>
        </div>
     );
}
 
export default User;