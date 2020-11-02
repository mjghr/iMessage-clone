import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../provider/userSlice";
import chatReducer from "../provider/chatSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});
