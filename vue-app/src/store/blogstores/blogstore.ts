import axios from 'axios'
import { Module } from 'vuex';

interface Blog {
    id: number;
    title: string;
    content: string;
    date: string;
    categories: string;
    image: string;
}

// Define the state type
interface BlogState {
    blogs: Blog[]
}

// Initial state
const state: BlogState = {
    blogs: []
}

// Define mutations
const mutations = {
    SET_BLOGITEMS(state: BlogState, payload: BlogState) {
        state.blogs = payload.blogs;
    }
}

// Define Actions
const actions = {
    async fetchBlogItems({ commit }: any) {
        try {
            await axios.get('http://localhost:3000/blogs').then((res) => {
                commit('SET_BLOGITEMS', { blogs: res.data })
            })
        } catch (error) {
            console.error('Error fetching Blog items', error)
        }
    }
}

// Define getters
const getters = {
    getBlogItems: (state: BlogState) => state.blogs
}

// Vuex Module
const blogStore: Module<BlogState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default blogStore;