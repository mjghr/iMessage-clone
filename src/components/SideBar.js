import React, { useEffect, useState } from "react";
import SideBarChat from "./SideBarChat";
import "../stylesheets/sideBar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlined from "@material-ui/icons/RateReviewOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "../provider/userSlice";
import db, { auth } from "../auth/firebase";

function SideBar() {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addChat = () => {
    const chatName = prompt("please enter a chat name");
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    }
  };

  return (
    <div className="sideBar">
      <div className="sideBar__header">
        <Avatar src={user.picture} className="sideBar__avatar" />

        <div className="sideBar__dropDown">
          {/* <SearchIcon />
          <input type="text" placeholder="search" /> */}
          {/* <ul className="dropDown__list">
            <li>Update Profile</li>
            <li>Logout</li>
          </ul> */}
          <p>{user?.displayName}</p>
          <p onClick={() => auth.signOut()}>Logout</p>
        </div>
        <IconButton className="sideBar__inputButton" onClick={addChat}>
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className="sideBar__chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SideBarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
