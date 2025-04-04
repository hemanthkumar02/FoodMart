import axios from "axios";
import { Module } from "vuex";

// Define the type of cards
interface Card {
    id: number,
    title: string,
    content: string,
    discountSale: string,
    imageUrl: string
}

// Define state type
interface CardsState {
    cards: Card[]
}

// Initial State
const state: CardsState = {
    cards: []
}

// Define mutations
const mutations = {
    SET_CARDS(state: CardsState, payload: CardsState) {
        state.cards = payload.cards;
    }
}

// Define Actions
const actions = {
    async fetchCards({ commit }: any) {
        try {
            await axios.get('http://localhost:3000/bannerCards').then((res) => {
                commit('SET_CARDS', { cards: res.data })
            })
        } catch (error) {
            console.log('Error fetching cards', error)
        }
    }
}

// Define getters
const getters = {
    getCards: (state: CardsState) => state.cards
}

// Vuex Module
const bannerCards: Module<CardsState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}


export default bannerCards;