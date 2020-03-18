import Vue from 'vue'
import Vuex from 'vuex'

import blogLists from '../mock/blogs';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        blogLists
    }
})

export default store;