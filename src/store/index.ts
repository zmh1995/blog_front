import { createStore } from "vuex";

export default createStore({
  state: {
    collapse: true,
    storedMenus: [],
    menus: [],
    access_token: "",
    refresh_token: "",
    last_token_refresh_time: new Date("October 01, 1975 00:00:00"),
  },
  getters: {},
  mutations: {
    getAccessToken(state) {
      // state.access_token = state.access_token || Cookies.get("access_token");
    },
    setRefreshToken(state, val) {
      state.refresh_token = val;
      // Cookies.set("refresh_token", val);
    },
    updateLastRefreshTime(state) {
      // state.last_token_refresh_time = new Date().getTime();
      // Cookies.set("last_token_refresh_time", state.last_token_refresh_time);
    },
  },
  actions: {},
  modules: {},
});
