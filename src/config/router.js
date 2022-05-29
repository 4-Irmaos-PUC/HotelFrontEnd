import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Routes from './routes';
import axios from "axios";
import endPoints from "@config/endPoints";

Vue.use(VueRouter);

let router = new VueRouter({ mode: 'history', routes: Routes });

window.popStateDetected = false
window.addEventListener('popstate', () => {
    store.commit('menu/setPath', router.history.current.path)
    window.popStateDetected = true
})

router.beforeEach((to, from, next) => {
    const IsItABackButton = window.popStateDetected

    window.popStateDetected = false
    if (IsItABackButton) {
        store.commit('menu/setPath', to.path)
    }

    if (to.path == "/login") {
        if (store.getters["login/isLogged"]) {
            next('/')
        } else next()
    } else if (to.matched.some(record => record.meta.requiresAuth)) {

        if (store.getters["login/isLogged"]) {            
            let newtopath
            if (to.path.lastIndexOf('/') > 0) {
                let secondBar = to.path.lastIndexOf('/')
                newtopath = to.path.substring(0, secondBar)
            } else {
                newtopath = to.path
            }

            if (to.path != '/' && to.meta.disableProfleValidation != true) {
                let url = endPoints.menus + "/profile_permission" + newtopath
                axios.get(url).then((response) => {
                    if (response.data.permission == 1){
                        next()
                    } else {
                        next('/')
                    }
                })
            } else {
                next()
                return
            }
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router