import axios from "axios";

const state = {
  photos: [],
  photobyAlbumID: [],
};

const getters = {
  getPhotos: (state) => {
    return state.photos;
  },
  getPhotobyAlbumID: (state) => {
    return state.photobyAlbumID;
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
  },
};

const mutations = {
  setPhotosMutation: (state, value) => {
    state.photos = value;
  },
  setPhotobyAlbumIDMutation: (state, value) => {
    state.photobyAlbumID = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
