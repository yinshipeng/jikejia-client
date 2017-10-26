import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login.vue'
import LoginMac from '../views/login/login.mac.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/login-mac/:mac',
            component: LoginMac
        }
    ]
})
