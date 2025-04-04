import axios from 'axios'
import { Module } from 'vuex';

interface dropdownItems {
    id: number;
    name: string,
    link: string
}

// Define the type of each nav items
interface navItem {
    id: number;
    name: string,
    link: string,
    isDropdown: boolean,
    dropdownItems: dropdownItems[]
}

// Define the state type
interface navItemsState {
    navItems: navItem[]
}

// Initial state
const state: navItemsState = {
    navItems: []
}

// Define mutations
const mutations = {
    SET_NAVITEMS(state: navItemsState, payload: navItemsState) {
        state.navItems = payload.navItems;
    }
}

// Define Actions
const actions = {
    async fetchNavItems({ commit }: any) {
        try {
            await axios.get('http://localhost:3000/navItems').then((res) => {
                commit('SET_NAVITEMS', { navItems: res.data })
            })
        } catch (error) {
            console.error('Error fetching Sub-nav items', error)
        }
    }
}

// Define getters
const getters = {
    getNavItems: (state: navItemsState) => state.navItems
}

// Vuex Module
const subnavitems: Module<navItemsState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default subnavitems;