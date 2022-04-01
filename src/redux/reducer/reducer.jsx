import { createSlice } from "@reduxjs/toolkit";

const animeApp = createSlice({
  name: "Anime",
  initialState: {
    trendingAnimeDay: null,
    trendingAnimeMonth: null,
    trendingAnimeYear: null,
    infoAnime: null,
    episodesAnime: null,
    animeSlide: null,
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
  },
});

export const {
  getTrendingDay,
  getTrendingMonth,
  getTrendingYear,
  getInfoAnime,
  getEpisodesAnime,
  getAnimeSlide,
} = animeApp.actions;
export default animeApp.reducer;
