import d from "../styles/desk.module.css";
import { useEffect, useRef } from "react";
import io from 'socket.io-client';
import { useState } from "react";
import { Socket } from "socket.io";
import User from "../components/user";
import Chat from "../components/chat";


const socket = io.connect("http://localhost:9000")


const Desk = () => {
    const [last_asker, setLastAsker] = useState();
    const ans = useRef(); 
    const [online_users, setOnline_users] = useState([])

    useEffect(() => {
        socket.on('connect', () => {
            console.log(socket.id)
        });
    
        socket.on('disconnect', () => {
        });
        
        socket.on('active-users', (au) => {
            //console.log("active users from backend",au)
            setOnline_users(au)
        });

        socket.on('take-him-out', (id) => {
            setOnline_users(online_users.filter(ou => ou.user_id !== id))
        });
        socket.on('receive-question', (q,id)=> {
            console.log(q,"this question received from: ", id)
            setLastAsker(id)
        })
      },[online_users]);

/*       const handle_desk = () => {
        socket.connect()
        socket.emit("answer",ans.current.value)
      } */

      
    return ( 
        <div className={d.desk}>
            <div className={d.desk_actives}>
                {
                    online_users.map(u=>
                        <User 
                            uniq={u.user_id} 
                            messages={u.user_messages}
                        />
                    )
                }
            </div>
            <h1>Son Soru Soran: {last_asker}</h1>
            
            
            <div>
                <h3>{online_users.length}</h3>
                <br />
                <br />
{/*                 <input type="text" ref={ans}/>
                <button onClick={handle_desk}>Answer the Customer</button> */}
            </div>
            
        </div>
     );
}
 
export default Desk;