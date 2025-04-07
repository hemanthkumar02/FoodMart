import axios from 'axios'
import { Module } from 'vuex';

interface Card {
    id: number;
    title: string;
    content: string;
    buttonText: string;
    discountText: string;
    backgroundImage: string;
}

interface AboutUs {
    id: number,
    title: string,
    content: string,
    image: string,
    googlePlay: string,
    appStore: string
}

// Define the state type
interface CardState {
    cards: Card[];
    aboutUs: AboutUs
}

// Initial state
const state: CardState = {
    cards: [],
    aboutUs: {
        id: 0,
        title: '',
        content: '',
        image: '',
        googlePlay: '',
        appStore: ''
    }
}

// Define mutations
const mutations = {
    SET_CARDS(state: CardState, payload: CardState) {
        state.cards = payload.cards;
    },

    SET_ABOUTUS(state: CardState, payload: CardState) {
        state.aboutUs.id = payload.aboutUs.id
        state.aboutUs.title = payload.aboutUs.title
        state.aboutUs.content = payload.aboutUs.content
        state.aboutUs.image = payload.aboutUs.image
        state.aboutUs.googlePlay = payload.aboutUs.googlePlay
        state.aboutUs.appStore = payload.aboutUs.appStore
    }
}

// Define Actions
const actions = {
    async fetchCards({ commit }: any) {
        try {
            await axios.get('http://localhost:3000/cards').then((res) => {
                commit('SET_CARDS', { cards: res.data })
            })
        } catch (error) {
            console.error('Error fetching Sub-nav items', error)
        }
    },

    async fetchAboutUs({ commit }: any) {
        try {
            await axios.get('http://localhost:3000/aboutUs').then((res) => {
                console.log(res.data)
                commit('SET_ABOUTUS', { aboutUs: res.data[0]})
            })
        } catch (error) {
            console.log('Error fetching in About Us', error)
        }
    }
}

// Define getters
const getters = {
    getNavItems: (state: CardState) => state.cards
}

// Vuex Module
const cardStore: Module<CardState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default cardStore;