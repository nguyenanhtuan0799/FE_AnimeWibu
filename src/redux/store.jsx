import { configureStore } from "@reduxjs/toolkit";
import animeApp from "./reducer/reducer";
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["Anime/getUsernAccount"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["infoAnimeApp.dataUser"],
      },
    }),
  reducer: {
    infoAnimeApp: animeApp,
  },
});

export default store;
