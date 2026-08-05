import { useEffect } from "react";
import socket from "./socket";
import { useAuth } from "../useContext/UseContext";
 
const SocketProvider = ({ children }) => {
  const isLogin = JSON.parse(localStorage.getItem("_login"))
 
 

  useEffect(() => {
    if(!isLogin) return 
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default SocketProvider;