import app from './app';
import store from './store';

app.$store.commit('setPackages', { packages: window.packages });

app.$mount('#app');
