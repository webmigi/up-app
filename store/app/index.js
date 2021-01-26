export const state = () => ({
  currentScrollValue: "",
  winSize: {
    width: null,
    height: null
  }
});

export const getters = {
  APP_SCROLL_VALUE(state) {
    return state.currentScrollValue;
  },
  APP_WINDOW_SIZE(state) {
    return state.winSize;
  },
};

export const mutations = {
  SET_APP_SCROLL_VALUE(state, payload) {
    state.currentScrollValue = payload.value;
  },
  SET_APP_WINDOW_SIZE(state, payload) {
    state.winSize = {
      width: payload.width,
      height: payload.height
    };
  },
};

export const actions = {
  updateScrollValue({commit}, scrollValue) {
    commit("SET_APP_SCROLL_VALUE", scrollValue);
  },
  setWindowSize({commit}, windowSize) {
    commit("SET_APP_WINDOW_SIZE", windowSize);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
