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
import { db } from "../../firebase/config";
import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import * as Storage from "../../utils/saveStorage";

export const getTrendingAnimeDay = async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/ranking/ngay`);

    dispatch(actions.getTrendingDay(res.data.data));
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
    Storage.setStorage("user", {
      email: auth.currentUser.email,
      uid: auth.currentUser.uid,
    });
    const docSnap = onSnapshot(
      doc(db, "users", auth.currentUser.uid),
      (doc) => {
        Storage.setStorage("dataUser", doc.data());
        return doc.data();
      }
    );
    dispatch(actions.getUsernAccount(docSnap));
    dispatch(actions.getLoginAccount(auth.currentUser.email));
  } catch (e) {
    console.log("error account", e);
  }
};

export const LogoutAccount = async (dispatch) => {
  try {
    await signOut(auth);
    Storage.removeStorage("auth");
    Storage.removeStorage("user");
    Storage.removeStorage("dataUser");
    dispatch(actions.getLogoutnAccount());
  } catch (e) {
    console.log("error account", e);
  }
};
export const registerAccount = async (dispatch, email, password, rest) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    Storage.setStorage("auth", auth.currentUser.email);
    Storage.setStorage("user", {
      email: auth.currentUser.email,
      uid: auth.currentUser.uid,
    });
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      name: rest.firstname + " " + rest.lastname,
      email: email,
      uid: auth.currentUser.uid,
      favorite: [],
      image: null,
      timeStamp: serverTimestamp(),
    });
    const docSnap = onSnapshot(
      doc(db, "users", auth.currentUser.uid),
      (doc) => {
        Storage.setStorage("dataUser", doc.data());
        return doc.data();
      }
    );
    dispatch(actions.getUsernAccount(docSnap));
    dispatch(actions.getLoginAccount(auth.currentUser.email));
  } catch (e) {
    console.log("error account", e);
  }
};
export const updateFavorite = async (dispatch, value) => {
  try {
    const data = Storage.getStorage("dataUser");
    const newDataUser = {
      ...data,
      favorite: [...data.favorite, value],
    };
    await setDoc(doc(db, "users", auth.currentUser.uid), newDataUser);
    const docSnap = onSnapshot(
      doc(db, "users", auth.currentUser.uid),
      (doc) => {
        Storage.setStorage("dataUser", doc.data());
        return doc.data();
      }
    );
    dispatch(actions.getUsernAccount(docSnap));
  } catch (e) {
    console.log("error account", e);
  }
};

export const getImageAnime = async (dispatch, value) => {
  try {
    dispatch(actions.getImageAnime(value));
  } catch (e) {
    console.log("error account", e);
  }
};
