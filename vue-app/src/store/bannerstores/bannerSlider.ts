import axios from "axios";
import { Module } from "vuex";

// Define the type of cards
interface Slide {
    id: number,
    title: string,
    content: string,
    button: string,
    imageUrl: string
}
// Define state type
interface SlidesState {
    slides: Slide[]
}

// Initial State
const state: SlidesState = {
    slides: []
}

// Define mutations
const mutations = {
    SET_SLIDES(state: SlidesState, payload: SlidesState) {
        state.slides = payload.slides;
    }
}

// Define Actions
const actions = {
    async fetchSlides({ commit }: any) {
        try {
            await axios.get('http://localhost:3000/slides').then((res) => {
                commit('SET_SLIDES', { slides: res.data })
            })
        } catch (error) {
            console.log('Error fetching cards', error)
        }
    }
}

// Define getters
const getters = {
    getSlides: (state: SlidesState) => state.slides
}

// Vuex Module
const bannerSlides: Module<SlidesState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}


export default bannerSlides;