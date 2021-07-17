import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import io from "socket.io-client";
import JoinCreateRoom from "./JoinCreateRoom";
import Room from "./Room";

import "./style.css";

const App = () => {
  const [userNo, setUserNo] = useState(0);
  const [roomJoined, setRoomJoined] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  let socket;
  const connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  const uuid = () => {
    var S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };

  useEffect(() => {
    if (roomJoined) {
      const server = "http://localhost:5000";
      socket = io(server, connectionOptions);
    }
  }, [roomJoined]);

  return (
    <div className="home">
      <ToastContainer />
      {roomJoined ? (
        <Room userNo={userNo} user={user} socket={socket} />
      ) : (
        <JoinCreateRoom
          uuid={uuid}
          setRoomJoined={setRoomJoined}
          setUser={setUser}
        />
      )}
    </div>
  );
};
export default App;
