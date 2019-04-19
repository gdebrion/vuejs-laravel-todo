
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
const axios = require('axios');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.component('navbar', require('./components/Navbar.vue').default);
const TodoList = Vue.component('todolist', require('./components/Todolist.vue').default);
const AddForm = Vue.component('add-form', require('./components/AddForm.vue').default);
Vue.component('pagination', require('./components/Pagination.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const store = new Vuex.Store({
    state: {
        things: [],
        pagination: {}
    },
    mutations: {
        fetchThings(state, url) {
            var url = url || '/api/things';

            axios.get(url)
                .then(res => res.data)
                .then(res => {
                    this.state.things = [];

                    for(var item of res.data) {
                        this.state.things.push(item);
                    }

                    this.state.pagination = {
                        prev: res.links.prev,
                        next: res.links.next,
                        first: res.links.first,
                        last: res.links.last,
                        current_page: res.meta.current_page,
                        last_page: res.meta.last_page,
                        total: res.meta.total,
                    };
                });
        },
        deleteThing(state, id) {
            axios.delete(`/api/things/${id}`)
                .then(res => {
                    this.commit('fetchThings');
                })
                .catch(err => console.error(err));
        },
        addThing(state, title) {
            axios.post(`/api/things`, { title: title})
                .then(res => {
                    this.commit('fetchThings');
                    router.push('/');
                })  
                .catch(err => console.error(err));
        }
    }
});

const routes = [
    {path: '/', component: TodoList},
    {path: '/add', component: AddForm}
];

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    store,
    router
});
