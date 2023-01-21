import d from "../styles/desk.module.css";
import { useEffect, useRef } from "react";
import io from 'socket.io-client';
import { useState } from "react";
import { Socket } from "socket.io";
import User from "../components/user";
import Chat from "../components/chat";


const socket = io.connect("http://localhost:9000")


const Desk = () => {
    const ans = useRef(); 
    const [online_users, setOnline_users] = useState([]);
    const [last_asker, setLastAsker] = useState();
   // const [desk_response, setDeskResponse] = useState();
    
    useEffect(()=> {
        socket.emit('refresh', "hello")
        socket.on('after-refresh', (au) => {
            setOnline_users(au)
        });
    },[])

    useEffect(() => {
        socket.on('connect', () => {
            console.log(socket.id)
        });
        
        socket.on('active-users', (au) => {
            setOnline_users(au)
        });
        socket.on('take-him-out', (id) => {
            setOnline_users(online_users.filter(ou => ou.user_id !== id))
        });
      });
      
    return ( 
        <div className={d.desk}>
            <div className={d.desk_actives}>
                {
                    online_users.map(u=>
                        <User uniq={u.user_id} user_messages={u.user_messages}/>
                    )
                }
            </div>        
            <div>
                <h3>{online_users.length}</h3>
                <h3>Last Asker: {last_asker}</h3>
            </div>
            
        </div>
     );
}
 
export default Desk;