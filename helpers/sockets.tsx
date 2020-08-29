import socketIOClient from "socket.io-client";

export const socketConnect = (
  data,
  setStandBy,
  setIO,
  setBoard,
  setActive,
  setRedScore,
  setGrayScore
) => {
  const io = socketIOClient("http://192.168.0.140:8080");

  //console.log(io);
  io.on("connect", () => {
    console.log("Connected");
    io.emit("setSession", data);
  });
  io.on("onJoin", (msg) => {
    console.log(msg);
    setStandBy(msg);
  });
  io.on("secondPlayerJoined", (msg) => {
    console.log("secondPlayerJoined", msg);
    setStandBy(msg);
  });
  io.on("gameMove", (msg) => {
    console.log("gameMove", msg);
    setBoard(msg);
  });
  io.on("setActiveUpdate", (msg) => {
    console.log("ActiveP", msg);
    setActive(msg);
  });
  io.on("setRedScore", (msg) => {
    console.log("New Red Score", msg);
    setRedScore(msg);
  });
  io.on("setGrayScore", (msg) => {
    console.log("New Gray Score", msg);
    setGrayScore(msg);
  });

  setIO(io);
};
