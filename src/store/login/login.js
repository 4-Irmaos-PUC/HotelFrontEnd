import axios from 'axios';
import { getField, updateField } from 'vuex-map-fields';
import endPoints from '../../config/endPoints';
import router from '../../config/router';

export default {
    namespaced: true,
    state: {
        default_password: 0,
        accessToken: '',
        accessToken_expire: '',
        errorNotification: false,
        errorMessage: '',
        newMessage: false,
        showNotification: false,
        notificationType: '',
        notificationMessage: '',
        user: {},
        userData: {}
    },
    mutations: {
        setAccessToken: (state, accessToken) => state.accessToken = accessToken,
        setAccessTokenExpire: (state, expire) => state.accessToken_expire = expire,
        setErrorMessage: (state, message) => state.errorMessage = message,
        setUserData: (state, userData) => state.userData = userData,
        showErrorNotification: (state, show) => state.errorNotification = show,
        showNotification: (state, payload) => {
            state.showNotification = payload.show,
                state.notificationMessage = payload.message,
                state.notificationType = payload.type
        },
        setDefaultPassword: (state, payload) => {
            state.default_password = payload;
        },
        updateField,
    },
    getters: {
        getField,
        getUserId: state => {
            return state.userData.id
        },
        getUserName: state => {
            return state.userData.name
        },
        getAccessToken: state => {
            return state.accessToken
        },
        getRole: state => {
            return state.userData.role
        },
        getInstanceId: state => {
            return state.userData.instance_id
        },
        isLogged: state => {
            return !!(state.accessToken)
        },
        getDefaultPassword: state => {
            return (state.default_password)
        }
    },
    actions: {
        getUser: ({ commit, dispatch }, accessToken) => {
            axios.get(endPoints.users + "/user/" + accessToken.user_id).then((user) => {
                dispatch('menu/buildMenu', {}, {root: true})
                commit('setUserData', user.data)
                commit('setAccessTokenExpire', accessToken.expire)
                localStorage.setItem('stars_tk', accessToken.access_token)
                if (user.data.default_password == 1) {
                    commit("setDefaultPassword", user.data.default_password)
                    router.push("/profile_edit")
                } else if (router.history.current.path == "/login") {
                    commit("setDefaultPassword", user.data.default_password)
                    router.push("/")
                }
                dispatch('profile/getProfilePermissions', { user: user.data }, { root: true })
            })
        },
        tryLogin: ({ commit, dispatch, state }) => {
            let loginData = state.user
            loginData.grant_type = "password"
            axios.post(endPoints.login, state.user).then((response) => {
                commit('setAccessToken', response.data.access_token)
                dispatch('getUser', response.data)
            }, () => {
                let notification = {
                    show: true,
                    message: "Usuário ou senha inválidos",
                    type: "error"
                }
                commit('showNotification', notification) 
            })
        },
        logout: ({ commit, state }) => {
            axios.delete(endPoints.login + "/" + state.accessToken).then(() => {
                commit('setAccessToken', '')
                if (router.history.current.path != "/login") {
                    commit('menu/setPath', { path: '/logout' }, { root: true })
                    router.push("/login")
                }
            }).catch(() => {
                commit('setAccessToken', '')
                if (router.history.current.path != "/login") {
                    commit('menu/setPath', { path: '/logout' }, { root: true })
                    router.push("/login")
                }
            });

        },
        getAccessTokenFromLocalStorage: ({ commit, dispatch, state }) => {

            if (!state.accessToken) {
                let token = localStorage.getItem('stars_tk')
                if (token) {
                    commit('setAccessToken', token)
                    axios.get(endPoints.login + "/" + token).then((response) => {
                        dispatch('getUser', response.data)
                    })
                }
            }

        },
        unauthenticated: ({ commit }) => {
            commit('setAccessToken', '')
            router.push("/login")
        }
    }
}