import Vue from 'vue';
import store from './store';
import router from './router';
import App from './components/App';

export default new Vue({
    store,

    router,

    render: h => h(App),
});
