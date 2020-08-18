import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";

export const socketConnect = (data, setStandBy) => {
  const io = socketIOClient(ENDPOINT);
  io.on("connect", () => {
    console.log("Connected");
  });
  io.on("onJoin", (msg) => {
    setStandBy("activePlayer center waiting");
  });
};
