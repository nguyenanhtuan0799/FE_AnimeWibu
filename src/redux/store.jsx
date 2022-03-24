import { configureStore } from "@reduxjs/toolkit";
import animeApp from "./reducer/reducer";
const store = configureStore({
  reducer: {
    infoAnimeApp: animeApp,
  },
});

export default store;
