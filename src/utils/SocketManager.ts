import { io } from "socket.io-client";

// initializing the socket connection
let socket = io("https://server-gfc.onrender.com");

export default socket;
