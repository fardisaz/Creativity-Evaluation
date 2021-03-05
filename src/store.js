import Vue from "vue";
import Vuex from "vuex";
import IdeaServices from "./services/IdeaServices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: [],
    idea: {},
  },
  mutations: {
    SET_IDEAS(state, ideas) {
      state.ideas = ideas;
    },
    CHANGE_IDEAS(state, idea) {
      const oldIdea = state.ideas.find((item) => {
        item.id === idea.id;
      });
    },
  },
  actions: {
    fetchIdeas({ commit }) {
      IdeaServices.getIdeas()
        .then((response) => {
          commit("SET_IDEAS", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
});
