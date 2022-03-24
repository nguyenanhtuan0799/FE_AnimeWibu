import axios from "axios";
import * as actions from "../reducer/reducer";
import { BASE_URL } from "../../constain/constain";

export const getTrendingAnimeDay = async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/ranking/ngay`);
    const arr = res.data.data.map((data) => {
      const res1 = axios.get(`${BASE_URL}/anime/${data.slug}`);
      return res1;
    });
    let info = await Promise.all(arr).then((value) => value);
    if (info !== null && info !== undefined) {
      const data1 = info.reduce((init, element) => {
        const e = element.data.data;
        return [...init, e];
      }, []);

      const data = data1.map((data, i) => {
        return { ...data, ...res.data.data[i] };
      });
      dispatch(actions.getTrendingDay(data));
    }
  } catch (e) {
    console.log("error getTrendingDay", e);
  }
};

export const getTrendingAnimeMonth = async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/ranking/thang`);

    dispatch(actions.getTrendingMonth(res.data.data));
  } catch (e) {
    console.log("error getTrendingMonth", e);
  }
};
export const getTrendingAnimeYear = async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/ranking/nam`);

    dispatch(actions.getTrendingYear(res.data.data));
  } catch (e) {
    console.log("error getTrendingYear", e);
  }
};

export const getInfomationAnime = async (dispatch, slug) => {
  try {
    const res = await axios.get(`${BASE_URL}/anime/${slug}`);

    dispatch(actions.getInfoAnime(res.data.data));
  } catch (e) {
    console.log("error getInfoAnime", e);
  }
};

export const getEpisodesAnime = async (dispatch, slug, id) => {
  try {
    const res = await axios.get(`${BASE_URL}/anime/${slug}/episodes/${id}`);

    dispatch(actions.getEpisodesAnime(res.data.data));
  } catch (e) {
    console.log("error getInfoAnime", e);
  }
};
