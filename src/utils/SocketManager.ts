import { io } from "socket.io-client";

// initializing the socket connection
let socket = io("https://localhost:9000");

export default socket;
