export const state = () => ({
  currentScrollValue: "",
  winSize: {
    width: null,
    height: null,
  },
  galleryCursorActive: false,
  windowCursor:{
    x:0,
    y:0
  },
  logoStartHeight: 0,
  headerComponentHeight:0,
  modalIsActive: false,
  modalImgIsActive: false
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
  WINDOW_CURSOR(state) {
    return state.windowCursor;
  },
  LOGO_START_HEIGHT(state) {
    return state.logoStartHeight;
  },
  HEADER_COMPONENT_HEIGHT(state) {
    return state.headerComponentHeight;
  },
  MODAL_IS_ACTIVE(state) {
    return state.modalIsActive;
  },
  MODAL_IMG_IS_ACTIVE(state) {
    return state.modalImgIsActive;
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
    state.galleryCursorActive = payload;
  },
  SET_CURSOR_VALUE(state, payload) {
    state.windowCursor.x = payload[0];
    state.windowCursor.y = payload[1];
  },
  SET_LOGO_START_HEIGHT(state, payload) {
    state.logoStartHeight = payload;
  },
  SET_HEADER_COMPONENT_HEIGHT(state, payload) {
    state.headerComponentHeight = payload;
  },
  SET_MODAL_IS_ACTIVE(state) {
    state.modalIsActive = !state.modalIsActive;
  },
  SET_MODAL_IMG_IS_ACTIVE(state) {
    state.modalImgIsActive = !state.modalImgIsActive;
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
  setCursorValue({commit}, value) {
    commit("SET_CURSOR_VALUE", value);
  },
  setLogoStartHeight({commit}, value) {
    commit("SET_LOGO_START_HEIGHT", value);
  },
  setHeaderComponentHeight({commit}, value) {
    commit("SET_HEADER_COMPONENT_HEIGHT", value);
  },
  setModalIsActive({commit}) {
    commit("SET_MODAL_IS_ACTIVE");
  },
  setModalImgIsActive({commit}) {
    commit("SET_MODAL_IMG_IS_ACTIVE");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
