import Vue from 'vue'
import VueRouter from 'vue-router'
import "./index.less"
import Home from './home'
import Products from './products'
import About from './about'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/Products',
            component: Products
        },
        {
            path: '/About',
            component: About
        },
    ]
})

new Vue({
    el: "#app",
    router,
})