import { useEffect, useState } from "react";
import d from "../styles/desk.module.css";
import io from 'socket.io-client';

const socket = io.connect("http://localhost:9000")

const User = ({uniq}) => {
    const [user_id, setUserid] = useState();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        socket.on('connect', () => {
        });
    
        socket.on('disconnect', () => {
        });

        socket.on('receive-question', (q, id) => {
            console.log(id)
            console.log(uniq)
            if(uniq === id)
            {
                setUserid(id)
                setMessages([...messages, q])
            }
          });
      });

    return ( 
        <div className={d.desk_actives_user}>
            <h3>{uniq}</h3>
            <h3></h3>
            {
                messages.map((m) => 
                  <div>
                    {m}
                  </div>
                )
              }
        </div>
     );
}
 
export default User;