import io from "socket.io-client";
import { WS_URI } from "_/__config";

const socket = io(WS_URI, {
  path: "/io/",
});

socket.on("connection", () => {
  console.log("connected");
});
socket.on("message", (data) => {
  console.log("message:", data);
});

export default socket;
