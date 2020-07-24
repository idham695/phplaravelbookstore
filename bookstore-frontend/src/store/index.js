import Vue from "vue";
import Vuex from "vuex";
import cart from "../store/cart";
import alert from "../store/alert";
import dialog from "../store/dialog";
import auth from "../store/auth";
import region from "../store/region";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBar: false,
    prevUrl: "",
    payment: [],
  },
  mutations: {
    setSideBar: (state, value) => {
      state.sideBar = value;
    },
    setPrevUrl: (state, value) => {
      state.PrevUrl = value;
    },
    setPayment: (state, value) => {
      state.payment = value;
    },
  },
  actions: {
    setSideBar: ({ commit }, value) => {
      commit("setSideBar", value);
    },
    setPrevUrl: ({ commit }, value) => {
      commit("setPrevUrl", value);
    },
    setPayment: ({ commit }, value) => {
      commit("setPayment", value);
    },
  },
  getters: {
    sideBar: (state) => state.sideBar,
    prevUrl: (state) => state.prevUrl,
    payment: (state) => state.payment,
  },
  modules: { cart, alert, dialog, auth, region },
});
