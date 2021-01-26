export const state = () => ({
  currentScrollValue: "",
});

export const getters = {
  APP_SCROLL_VALUE(state) {
    return state.currentScrollValue;
  },
};

export const mutations = {
  SET_APP_SCROLL_VALUE(state, payload) {
      state.currentScrollValue = payload.value;
  },
};

export const actions = {
  updateScrollValue({ commit }, scrollValue) {
    commit("SET_APP_SCROLL_VALUE", scrollValue);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
