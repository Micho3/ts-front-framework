import * as VueRouter from 'vue-router'
import {RouteRecordRaw} from "vue-router";

const index = import('../views/index.vue')

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: index
    }
];
export default VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes
})