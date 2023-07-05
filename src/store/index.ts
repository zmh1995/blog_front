import { createStore } from "vuex";

export default createStore({
  state: {
    collapse: true,
    storedMenus: [],
    menus: [],
    authorization: "",
    refresh_token: "",
    last_token_refresh_time: new Date("October 01, 1975 00:00:00"),
  },
  getters: {},
  mutations: {
    getAccessToken(state) {
      state.authorization;
    },
    setAccessToken(state, val) {
      state.authorization = val;
      // Cookies.set("refresh_token", val);
    },
    setRefreshToken(state, val) {
      state.refresh_token = val;
      // Cookies.set("refresh_token", val);
    },
    updateLastRefreshTime(state) {
      state.last_token_refresh_time = new Date();
    },
  },
  actions: {},
  modules: {},
});
