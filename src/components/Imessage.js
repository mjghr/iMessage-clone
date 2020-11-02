import React from "react";
import "../stylesheets/imessage.css";
import SideBar from "./SideBar";
import Chat from "./Chat";

function Imessage() {
  return (
    <div className="imessage">
      {/* sidebar  */}
      <SideBar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default Imessage;
