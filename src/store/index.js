import Vue from 'vue'
import Vuex from 'vuex'

import blogLists from '../mock/blogs';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        blogLists,
        isLogin: false
    },
    mutations:{
        SET_LOGIN (state, isLogin = false ) {
            state.isLogin = isLogin;
        } 
    },
    actions: {
        actionLogin({ commit }, data) {
            if (data.email == 'admin@gmail.com' && data.password == 'admin') {
                commit('SET_LOGIN', true);
                return true;
            } else {
                commit('SET_LOGIN');
                return false;
            }
        },
        actionLogout({ commit }) {
            commit('SET_LOGIN');
        }
    }
})

export default store;