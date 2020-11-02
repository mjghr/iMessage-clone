import React, { useEffect, useState } from "react";
import "../stylesheets/sideBarChat.css";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setChat } from "../provider/chatSlice";
import db from "../auth/firebase";
import * as timeago from "timeago.js";

function SideBarChat({ id, chatName }) {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);

  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
    dispatch(
      setChat({
        chatId: id,
        chatName: chatName,
      })
    );
  }, [id]);

  return (
    <div
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        );
      }}
      className="sideBarChat"
    >
      <Avatar
        className="sideBarChat__avatar"
        src={chatInfo[chatInfo.length - 1]?.picture}
      />
      <div className="sideBarChat__info">
        <h3>{chatName}</h3>
        <p>{chatInfo[chatInfo.length - 1]?.message}</p>
        <small>
          {timeago.format(
            new Date(chatInfo[chatInfo.length - 1]?.timestamp?.toDate())
          )}
        </small>
      </div>
    </div>
  );
}

export default SideBarChat;
