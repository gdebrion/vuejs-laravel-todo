require('./bootstrap');

window.Vue = require('vue');
const axios = require('axios');

axios.defaults.headers.common['Authorization'] = 'Bearer ' + apiToken;

import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('pagination', require('./components/Pagination.vue').default);

const TodoList = Vue.component('todolist', require('./components/Todolist.vue').default);
const AddForm  = Vue.component('add-form', require('./components/AddForm.vue').default);
const EditForm = Vue.component('add-form', require('./components/EditForm.vue').default);

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
        },
        updateThing(state, thing) {
            axios.put(`/api/things/${thing.id}`, { title: thing.title})
                .then(res => {
                    this.commit('fetchThings');
                    router.push('/');
                })  
                .catch(err => console.error(err));
        }
    },
    getters: {
        
    }
});

const routes = [
    {path: '/', component: TodoList},
    {path: '/add', component: AddForm},
    {path: '/edit/:id', component: EditForm}
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
