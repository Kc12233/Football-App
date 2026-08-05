// socket.js
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_URL, {
  autoConnect: false, // don't connect immediately,
  withCredentials:true
});

export default socket;