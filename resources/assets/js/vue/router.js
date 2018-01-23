import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Packages from './components/Packages';

Vue.use(VueRouter);

const routes = [
    { path: '/vue/', name: 'home', component: Home },
    { path: '/vue/packages/:type', name: 'packages', component: Packages },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
