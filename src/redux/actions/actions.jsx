import axios from "axios";
import * as actions from "../reducer/reducer";
import img1 from "../../image/anime/img1.jpg";
import img3 from "../../image/anime/img3.jpg";
import img4 from "../../image/anime/img4.jpg";
import titleBaner from "../../image/anime/titleBaner.png";

import { BASE_URL } from "../../constants/constain";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as Storage from "../../utils/saveStorage";

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

export const getAnimeSlide = async (dispatch) => {
  try {
    const res1 = await axios.get(`${BASE_URL}/anime/date-a-live`);
    const res2 = await axios.get(`${BASE_URL}/anime/date-a-live-ii`);
    const res3 = await axios.get(
      `${BASE_URL}/anime/date-a-live-movie-mayuri-judgment`
    );
    const arr = [
      {
        banner: titleBaner,
        avatar: img1,
        ...res1.data.data,
      },
      {
        banner: titleBaner,
        avatar: img3,
        ...res2.data.data,
      },
      {
        banner: titleBaner,
        avatar: img4,
        ...res3.data.data,
      },
    ];
    dispatch(actions.getAnimeSlide(arr));
  } catch (e) {
    console.log("error getInfoAnime", e);
  }
};

export const LoginAccount = async (dispatch, email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    Storage.setStorage("auth", auth.currentUser.email);
    dispatch(actions.getLoginAccount(auth.currentUser.email));
  } catch (e) {
    console.log("error account", e);
  }
};

export const LogoutAccount = async (dispatch) => {
  try {
    await signOut(auth);
    Storage.removeStorage("auth");
    dispatch(actions.getLogoutnAccount());
  } catch (e) {
    console.log("error account", e);
  }
};
export const registerAccount = async (dispatch, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    Storage.setStorage("auth", auth.currentUser.email);
    dispatch(actions.getLoginAccount(auth.currentUser.email));
  } catch (e) {
    console.log("error account", e);
  }
};
