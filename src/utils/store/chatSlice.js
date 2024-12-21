import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../apiConstants";

const chatSlice = createSlice({
  name: "message",
  initialState: {
    chatData: [],
  },
  reducers: {
    addChatMessages: (state, action) => {
      state.chatData.splice(LIVE_CHAT_COUNT, 1);
      state.chatData.push(action.payload);
    },
  },
});

export const { addChatMessages } = chatSlice.actions;
export default chatSlice.reducer;
