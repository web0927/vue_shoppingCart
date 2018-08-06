import Vue from 'vue';
import  Vuex, {Store} from 'vuex';

import state from './rootState.js';
import getters from './rootGetters';
import actions from './rootActions.js';
import mutations from './rootMutations.js';
import modules from './modules/index.js';

Vue.use(Vuex);

const store = new Store({
    state,
    getters,
    mutations,
    actions,
    modules
});
window.store = store;

export default store;
