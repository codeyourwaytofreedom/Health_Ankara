import { useEffect, useRef } from "react";
import io from 'socket.io-client';
import { useState } from "react";
import h from "../styles/Home.module.css";
import e from "cors";


const socket = io.connect("http://localhost:9000")


const Chat = ({modal}) => {
  const [my_messages, setMymessages] = useState([]);
  const customer = useRef();
  
  socket.on('answer', answer => {
    setMymessages([...my_messages, {who:"desk", message:answer}])
  });

  const handle_customer = (e) => {
    e.preventDefault();
    setMymessages([...my_messages, {who:"customer", message:customer.current.value}])
    console.log(my_messages)
    socket.connect();
    socket.emit('customer-asking', customer.current.value);
    customer.current.value = "";
  }

    return ( 

          <div className={h.home_chatbox} style={{display: modal ? "flex" : "none"}}>
            <div className={h.home_chatbox_message_container}>
              {
                my_messages.map((m) => 
                  <div className={m.who === "desk" ? h.home_chatbox_message_container_message_right : h.home_chatbox_message_container_message_left}>
                    {m.message.content}
                  </div>
                )
              }
            </div>
            
            <div className={h.home_chatbox_sender}>
              <form action="" onSubmit={(e)=> handle_customer(e) }>
                <input type="text" placeholder="Ask help desk..." ref={customer} />
              </form>
            </div>
          </div>
    );
}
 
export default Chat;