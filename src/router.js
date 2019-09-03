import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ('./views/login.vue')
        },
        {
            path: '/cad-clinica',
            name: 'cad-clinica',
            component: () =>
                import ('./views/cad-clinica.vue')
        },
        {
            path: '/cad-user',
            name: 'cad-user',
            component: () =>
                import ('./views/cad-user.vue')
        }
    ]
})