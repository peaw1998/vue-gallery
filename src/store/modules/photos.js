import axios from "axios";

const state = {
  photos: [],
  photobyAlbumID: [],
  albumID: 0,
};

const getters = {
  getPhotos: (state) => {
    return state.photos;
  },
  getPhotobyAlbumID: (state) => {
    return state.photobyAlbumID;
  },
  getAlbumID: (state) => {
    return state.albumID;
  },
};

const actions = {
  fetchPhotos: ({ commit }) => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      commit("setPhotosMutation", res.data);
    });
  },

  fetchPhotobyAlbumID: ({ commit }, id) => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      commit("setPhotosMutation", res.data);
      const array = state.photos.filter((item) => item.albumId == id);
      commit("setPhotobyAlbumIDMutation", array);
    });
    commit("setAlbumIDMutation", id);
  },
  fetchNextAlbumID: ({ commit }) => {
    if (state.albumID + 1 <= 100)
      commit("setAlbumIDMutation", state.albumID + 1);
    const array = state.photos.filter((item) => item.albumId == state.albumID);
    commit("setPhotobyAlbumIDMutation", array);
  },
  fetchPrevAlbumID: ({ commit }) => {
    if (state.albumID - 1 > 0) commit("setAlbumIDMutation", state.albumID - 1);
    const array = state.photos.filter((item) => item.albumId == state.albumID);
    commit("setPhotobyAlbumIDMutation", array);
  },
  clearState: ({ commit }) => {
    commit("setPhotosMutation", []);
    commit("setPhotobyAlbumIDMutation", []);
    commit("setAlbumIDMutation", 0);
  },
};

const mutations = {
  setPhotosMutation: (state, value) => {
    state.photos = value;
  },
  setPhotobyAlbumIDMutation: (state, value) => {
    state.photobyAlbumID = value;
  },
  setAlbumIDMutation: (state, value) => {
    state.albumID = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
