import axios from 'axios'
import { Module } from 'vuex';

// Define the type of each category
interface Category {
    id: number;
    name: string;
}

// Define the state type
interface CategoryState {
    categories: Category[];
}

// Initial state
const state: CategoryState = {
    categories: []
}

// Define mutations
const mutations = {
    SET_CATEGORIES(state: CategoryState, payload: CategoryState) {
        state.categories = payload.categories
    }
}

// Define Actions
const actions = {
    async fetchCategories({commit}: any) {
        try {
            await axios.get('http://localhost:3000/dropdownCategories').then((res) => {
                commit('SET_CATEGORIES', { categories: res.data})
            })
        } catch (error) {
            console.error('Error fetching categories', error)
        }
    }
}

// Define getters
const getters = {
    getCategories: (state: CategoryState) => state.categories
}

// Vuex Module
const headerCategories: Module<CategoryState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default headerCategories;

