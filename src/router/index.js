import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Resume from '@/components/Resume'
import Main from '@/components/Main'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [{
            path: '/resume',
            name: 'Resume',
            component: Resume
        },
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
        // { path: '*', component: NotFoundComponent }
    ]
})