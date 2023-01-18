import d from "../styles/desk.module.css";
import { useEffect, useRef } from "react";
import io from 'socket.io-client';
import { useState } from "react";
import { Socket } from "socket.io";
import User from "../components/user";
import Chat from "../components/chat";


const socket = io.connect("http://localhost:9000")


const Desk = () => {
    const [answer, setAnswer] = useState("waiting for question");
    const ans = useRef(); 
    const [online_users, setOnline_users] = useState([])

    useEffect(() => {
        socket.on('connect', () => {
            setAnswer(socket.id)
            console.log(socket.id)
        });
    
        socket.on('disconnect', () => {
        });
        
        socket.on('active-users', (au) => {
            console.log("active users from backend",au)
            setOnline_users(au)
        });

        socket.on('take-him-out', (id) => {
            setOnline_users(online_users.filter(ou => ou.user_id !== id))
        });
      });

      const handle_desk = () => {
        socket.connect()
        socket.emit("answer",{to:answer, content:ans.current.value})
      }

      
    return ( 
        <div className={d.desk}>
            <div className={d.desk_actives}>
                {
                    online_users.map(u=>
                        <User uniq={u.user_id} />
                    )
                }
            </div>
            
            
            <div>
                <h3>{online_users.length}</h3>
                <br />
                <br />
                <input type="text" ref={ans}/>
                <button onClick={handle_desk}>Answer the Customer</button>
            </div>
            
        </div>
     );
}
 
export default Desk;