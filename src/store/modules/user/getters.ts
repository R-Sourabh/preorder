import { GetterTree } from 'vuex'
import UserState from './UserState'
import RootState from '../../RootState'

const getters: GetterTree <UserState, RootState> = {
    isAuthenticated (state) {
        return !!state.token;
    },
    isUserAuthenticated(state) {
        return state.token && state.current
    },
    getUserToken (state) {
        return state.token
    },
    getUserProfile (state) {
        return state.current
    },
    getInstanceUrl (state) {
        const baseUrl = process.env.VUE_APP_BASE_URL;
        return baseUrl ? baseUrl : state.instanceUrl;
    },
    getCurrentEComStore(state) {
        return state.currentEComStore
    },
    getVirtualFacilities(state) {
        return state.virtualFacilities
    },
    getCurrentOrderParking(state) {
        return state.currentOrderParking
    }
}
export default getters;