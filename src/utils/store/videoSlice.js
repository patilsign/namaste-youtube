import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState:null,
  reducers: {
    feedVideoList: (state, action) => {
      return action.payload;
    },
  },
});
export const { feedVideoList } = videoSlice.actions;
export default videoSlice.reducer;
