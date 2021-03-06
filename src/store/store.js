import Vuex from 'vuex'
import Vue from 'vue'
import admin from './modules/admin' //모듈내에 calendar를 가지고온다.
import articles from './modules/articles'
import comments from './modules/comments'
import alert from './modules/alert'
import vueMoment from 'vue-moment' 
//import createPersistedState from "vuex-persistedstate"

Vue.use(vueMoment);
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        comments,
        articles,
        admin,
        alert
    }
    /*,
    plugins: [ createPersistedState({ //주목! : 여기에 쓴 모듈만 저장됩니다. 
        paths: ["calendar"] })
    ]
    */
})