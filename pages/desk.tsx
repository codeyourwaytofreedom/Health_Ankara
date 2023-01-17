import d from "../styles/desk.module.css";
import { useEffect, useRef } from "react";
import io from 'socket.io-client';
import { useState } from "react";
import { Socket } from "socket.io";


const socket = io.connect("http://localhost:9000")


const Desk = () => {
    const [answer, setAnswer] = useState("waiting for question");
    const ans = useRef(); 
    const [online_users, setOnline_users] = useState([])

    useEffect(() => {
        socket.on('connect', () => {
            setAnswer(socket.id)
        });
    
        socket.on('disconnect', () => {
        });

        socket.on('receive-question', (q, id) => {
            console.log(q)
            console.log(id)
            setAnswer(id)
            setOnline_users([...online_users, {user:id, question:q}])
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
                    online_users.map(u =>
                        <div className={d.desk_actives_user}>
                            Active User
                        </div>
                    )
                }
                
            </div>
            <div>
                <h1>{answer}</h1>
                <br />
                <br />
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