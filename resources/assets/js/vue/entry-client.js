import app from './app';

app.$store.commit('setPackages', { packages: window.packages });

app.$mount('#app');
