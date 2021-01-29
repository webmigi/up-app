export const state = () => ({
  currentScrollValue: "",
  winSize: {
    width: null,
    height: null,
  },
  galleryCursorActive: false,
});

export const getters = {
  APP_SCROLL_VALUE(state) {
    return state.currentScrollValue;
  },
  APP_WINDOW_SIZE(state) {
    return state.winSize;
  },
  GALLERY_CURSOR_ACTIVE(state) {
    return state.galleryCursorActive;
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
  SET_GALLERY_CURSOR_ACTIVE(state, payload) {
    debugger
    state.galleryCursorActive = payload;
  },
};

export const actions = {
  updateScrollValue({commit}, scrollValue) {
    commit("SET_APP_SCROLL_VALUE", scrollValue);
  },
  setWindowSize({commit}, windowSize) {
    commit("SET_APP_WINDOW_SIZE", windowSize);
  },
  setGalleryCursorActive({commit}, value) {
    commit("SET_GALLERY_CURSOR_ACTIVE", value);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
