const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

app.use(cors({ origin: true, credentials: true }));

let active_users = [];

io.on('connection', (socket) => {
  //console.log('a user connected');
  //console.log(socket.id);
  
  // on message
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    //io.emit('chat message', msg); // --> to all users, including the sender
    socket.broadcast.emit('chat message', msg);  // --> to all users but the sender
  });

  socket.on('customer-asking', (question) => {
    console.log(question, socket.id)  
    active_users.push(socket.id)
    console.log(active_users)
  })
  socket.on('disconnect', () => {
    if(active_users.includes(socket.id))
    {
      console.log(socket.id, "left")
      const index = active_users.indexOf(socket.id)
      active_users.splice(index,1)
      console.log(index)
      console.log("after ddisconnect, reamining users: ", active_users)
    }
    
/*     console.log("disconnect öncesi kullanıcılar", active_users)
    active_users = active_users.filter( user => user.user_id !==socket.id)
    console.log("disconnect sonrası kullanıcılar", active_users)
    io.emit('active-users', active_users);
    console.log(socket.id, "this id disconnected")
    console.log(active_users) */
    //io.emit('active-users', active_users)
    //io.emit("take-him-out", socket.id)
  })
  socket.on('answer', (answer) => {
    //console.log(active_users)
    //console.log("Cevap sonrası kullanıcılar bunlar: ")
    //io.emit('active-users', active_users);
    //io.emit('desk-answer', answer)
    //console.log(answer, "arrived")
  })
});

server.listen(9000, () => {
  console.log('listening on 9000');
});



//could be useful
/*   socket.onAny((event, ...args) => {
    console.log(event, args);
  }); */