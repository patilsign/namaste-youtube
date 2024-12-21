import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
import chatSlice from "./chatSlice";
const appStore = configureStore({
  name: "app",
  reducer: {
    app: appSlice,
    search: searchSlice,
    feed: videoSlice,
    chat: chatSlice,
  },
});

export default appStore;
