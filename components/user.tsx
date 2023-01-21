import { useEffect, useState, useRef } from "react";
import d from "../styles/desk.module.css";
import io from 'socket.io-client';
import h from "../styles/Home.module.css";
import bg from "../public/background.jpg";
import redbg from "../public/redbg.jpg";
const socket = io.connect("http://localhost:9000")

const User = ({uniq, user_messages}) => {
    const [user_id, setUserid] = useState();
    const ans = useRef(); 

    const handle_desk = (e) => {
      e.preventDefault();
      socket.connect()
      socket.emit("answer",{to:uniq,text:ans.current.value})
      ans.current.value = "";
    }
    
    return ( 
      <>
        <div className={d.desk_actives_user} style={{ backgroundImage: user_messages[user_messages.length-1].q ? `url(${redbg.src})` : `url(${bg.src})` }}> 
            <h3 style={{color:"white"}}>{uniq}</h3>
            <div className={d.desk_actives_user_container}>
              {
                user_messages.map((m) => 
                  <div className={m.q ? d.desk_actives_user_container_message_right : d.desk_actives_user_container_message_left}>
                    {m.q ?? m.a}
                  </div>
                )
              }
              {/* {uniq} */}
            </div>
            <div className={d.desk_actives_user_sender}>
              <form action="" onSubmit={(e)=>handle_desk(e)}>
                <input type="text" ref={ans}/>
              </form>
            </div>
        </div>
      </>
     );
}
 
export default User;