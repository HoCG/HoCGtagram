import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import store from './store/store' 


Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    
    // 이곳에 router 를 등록할 것 입니다.
    {
        path: '/',
        component: () => import ('./views/StartPage.vue')
    }, {
        path: '/LoginPage',
        component: () => import ('./views/LoginPage.vue')
    }, {
        path: '/CreateArticlePage',
        component: () => import ('./views/CreateArticlePage.vue')
    }, {
        path: '/CreateAdminPage',
        component: () => import ('./views/CreateAdminPage.vue')
    }, {
        path: '/ArticleDetailPage',
        component: () => import ('./views/ArticleDetailPage.vue')
    }, {
        path: '/AdminOwnPage',
        component: () => import ('./views/AdminOwnPage.vue')
    }, {
        path: '/UserInfoUpdatePage',
        component: () => import ('./views/UserInfoUpdatePage.vue')
    }
];

// router 객체생성
const router = new VueRouter({routes});

new Vue({
    store,
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
