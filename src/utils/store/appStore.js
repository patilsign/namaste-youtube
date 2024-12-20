import { configureStore } from "@reduxjs/toolkit";
import  appSlice  from "./appSlice";

const appStore = configureStore({
  name: "app",
  reducer: {
    app: appSlice,
  },
});

export default appStore;
