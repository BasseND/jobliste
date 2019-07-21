export const state = () => ({
  locale: "en"
})

export const mutations = {
  locale: function (state, payload) {
    state.locale = payload;
  }

}

export const actions = {



}

export const getters = {
  locale: function (state) {
    return state.locale;
  },

}



