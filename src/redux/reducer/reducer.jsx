import { createSlice } from "@reduxjs/toolkit";
import * as Storage from "../../utils/saveStorage";

const animeApp = createSlice({
  name: "Anime",
  initialState: {
    trendingAnimeDay: null,
    trendingAnimeMonth: null,
    trendingAnimeYear: null,
    infoAnime: null,
    episodesAnime: null,
    animeSlide: null,
    accountUser: Storage.getStorage("auth") || null,
    loading: false,
    dataUser: Storage.getStorage("dataUser") || null,
    imageAnime: null,
  },

  reducers: {
    getTrendingDay: (state, action) => {
      state.trendingAnimeDay = action.payload;
    },
    getTrendingMonth: (state, action) => {
      state.trendingAnimeMonth = action.payload;
    },
    getTrendingYear: (state, action) => {
      state.trendingAnimeYear = action.payload;
    },
    getInfoAnime: (state, action) => {
      state.infoAnime = action.payload;
    },
    getEpisodesAnime: (state, action) => {
      state.episodesAnime = action.payload;
    },
    getAnimeSlide: (state, action) => {
      state.animeSlide = action.payload;
    },
    getLoginAccount: (state, action) => {
      state.accountUser = action.payload;
    },
    getLogoutnAccount: (state) => {
      state.accountUser = null;
    },
    getUsernAccount: (state, action) => {
      state.dataUser = action.payload;
    },
    getLoading: (state, action) => {
      state.loading = action.payload;
    },
    getImageAnime: (state, action) => {
      state.imageAnime = action.payload;
    },
  },
});

export const {
  getTrendingDay,
  getTrendingMonth,
  getTrendingYear,
  getInfoAnime,
  getEpisodesAnime,
  getAnimeSlide,
  getLoginAccount,
  getLogoutnAccount,
  getUsernAccount,
  getLoading,
  getImageAnime,
} = animeApp.actions;
export default animeApp.reducer;
