import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";

export const socketConnect = (data, setStandBy, setIO) => {
  const io = socketIOClient(ENDPOINT);

  console.log(io);
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
  setIO(io);
};
