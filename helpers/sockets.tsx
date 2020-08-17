import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";

export const socketConnect = (data, callback) => {
  const io = socketIOClient(ENDPOINT);
  io.on("connection", (socket) => {
    console.log("Successful Connection");
  });
};
