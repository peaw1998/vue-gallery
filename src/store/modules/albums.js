import axios from "axios";

const state = {
  albums: [],
};

const getters = {
  getAlbums: (state) => {
    return state.albums;
  },
};

const actions = {
  fetchAlbums: ({ commit }) => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
      commit("setAlbumsMutation", res.data);
    });
  },
};

const mutations = {
  setAlbumsMutation: (state, value) => {
    state.albums = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
