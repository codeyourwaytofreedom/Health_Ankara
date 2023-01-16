import { useEffect, useRef } from "react";
import io from 'socket.io-client';
import { useState } from "react";
import h from "../styles/Home.module.css";
import e from "cors";


const socket = io.connect("http://localhost:9000", { autoConnect: false })


const Chat = ({modal}) => {
    const [fb, setFB] = useState("")
  
    useEffect(() => {
      socket.on('connect', () => {
        //console.log(socket.id)
        //setFB(socket.id)
      });
  
      socket.on('disconnect', () => {
      });
  
      socket.on('chat message', msg => {
      });

      socket.on('answer', answer => {
        console.log(answer)
        setFB(answer)
      });

  
      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
      };
    }, []);
    
    const customer = useRef();


    const handle_customer = (e) => {
      e.preventDefault();
      console.log("sent message")
      socket.connect();
      socket.emit('customer-asking', customer.current.value);
    }

    return ( 

          <div className={h.home_chatbox} style={{display: modal ? "grid" : "none"}}>
            <div>
              <form action="">
                <input type="text" ref={customer} />
                <br />
                <button type="submit" onClick={ (e)=> handle_customer(e) }>Customer</button>
              </form>
            </div>
              
          </div>
    );
}
 
export default Chat;