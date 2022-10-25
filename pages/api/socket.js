// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import { Server } from "socket.io";

export default function SocketHandler(req, res) {
 
  console.log(req);
  // It means that socket server was already initialised
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;


  io.on("connection", (socket) => {
    // socket.emit('request', /* … */); // emit an event to the socket
    // io.emit('broadcast', /* … */); // emit an event to all connected sockets
    // socket.on('reply', () => { /* … */ }); // listen to the event
    //var sessionId;
  
    socket.on("setSession", (msg) => {
      console.log("sessionKey", msg);
      socket.join(msg);
      console.log(socket.rooms);
    });

    socket.on("secondPlayer", (msg) => {
      socket.join(msg);
      console.log(msg);
      console.log(socket.rooms);
      io.in(msg).emit("secondPlayerJoined", "inPlay");
    });
  
    socket.on("sendGameMove", (msg) => {
      console.log("msg", msg);
      console.log("msg Session", msg.session);
      io.in(msg.session).emit("gameMove", msg.gameState);
    });
  
    socket.on("setActivePlayer", (msg) => {
      console.log("msg", msg);
      console.log("msg Session", msg.session);
      io.in(msg.session).emit("setActiveUpdate", msg.activePlayer);
    });
  
    socket.on("redScoreUpdate", (msg) => {
      console.log("msg", msg);
      console.log("msg Session", msg.session);
      io.in(msg.session).emit("setRedScore", msg.redScore);
    });
  
    socket.on("grayScoreUpdate", (msg) => {
      console.log("msg", msg);
      console.log("msg Session", msg.session);
      io.in(msg.session).emit("setGrayScore", msg.grayScore);
    });
  
    socket.emit("onJoin", "waiting");
    //console.log(socket);
    // console.log(req.body.type);
    // sessionId = req.body.session;
    // console.log("sessionId", sessionId);
  });
  
};
