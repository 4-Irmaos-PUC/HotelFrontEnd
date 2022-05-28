import Vue from 'vue'
import Vuex from 'vuex'


// Internal
import absences from './absences/absences'
import subagents from './commercial/subagents'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        absences,
        subagents
    }
})