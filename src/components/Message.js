import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../provider/userSlice";
import "../stylesheets/message.css";

const Message = forwardRef(({ id, contents }, ref) => {
  const { displayName, uid, email, picture, message, timestamp } = contents;
  const user = useSelector(selectUser);

  return (
    <div
      ref={ref}
      className={`message ${user.uid === uid && "message--sender"}`}
    >
      <Avatar className="message__photo" src={picture} />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  );
});

export default Message;
