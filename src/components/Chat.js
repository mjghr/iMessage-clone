import React, { useEffect, useState } from "react";
import "../stylesheets/chat.css";
import MicNoneIcon from "@material-ui/icons/MicNone";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { IconButton } from "@material-ui/core";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../provider/chatSlice";
import { selectUser } from "../provider/userSlice";
import db from "../auth/firebase";
import FlipMove from "react-flip-move";
import firebase from "firebase";

function Chat() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId !== null && chatId !== undefined) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                data: doc.data(),
              };
            })
          )
        );
    }
  }, [chatId]);

  const scrollToBottom = () => {
    console.log("gg");
    window.scrollTo({ bottom: 0, behavior: "smooth" });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      picture: user.picture,
      email: user.email,
      displayName: user.displayName,
    });

    setInput("");
    scrollToBottom();
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__body">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} contents={data} />
          ))}
        </FlipMove>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input
            className="chat__footer__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="type to send a message"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
