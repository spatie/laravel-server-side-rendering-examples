import Vue from 'vue';
import uniq from 'lodash/uniq';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

export default new Store({
    state: {
        packages: [],
    },

    getters: {
        types: state => uniq(state.packages.map(p => p.type)).sort(),

        packagesWithType: state => type => state.packages.filter(p => p.type === type),
    },

    mutations: {
        setPackages(state, { packages }) {
            state.packages = packages;
        },
    },
});
