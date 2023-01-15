import d from "../styles/desk.module.css";
import { useEffect, useRef } from "react";
import io from 'socket.io-client';
import { useState } from "react";
import { Socket } from "socket.io";


const socket = io.connect("http://localhost:9000")


const Desk = () => {
    const [answer, setAnswer] = useState("waiting for question");
    //const socket = io.connect("http://localhost:9000")
    useEffect(() => {
        socket.on('connect', () => {
            setAnswer(`connected: ${socket.id}`)
        });
    
        socket.on('disconnect', () => {
        });

        socket.on('answer', answer => {
          console.log(answer)
          setAnswer(answer)
        });

        socket.on('customer-asking', q => {
            console.log(q)
            setAnswer(q)
          });
      }, []);

      const handle_desk = () => {
        socket.connect()
        socket.emit("customer-asking", "question from desk")
      }

      
    return ( 
        <div className={d.desk}>
            <div>
                <h1>{answer}</h1>
                <br />
                <input type="text" />
                <button onClick={handle_desk}>Answer the Customer</button>
            </div>
            
        </div>
     );
}
 
export default Desk;