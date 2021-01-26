import Vue from "vue";
import Vuex from "vuex";
import app from './app'

Vue.use(Vuex);

new Vuex.Store({
  modules: {
    app,
  }
});
