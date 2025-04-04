import axios from "axios";
import { Module } from "vuex";

// Define the type of cards
interface Icon {
    id: number,
    title: string,
    link: string,
    componentName: string
}

interface footerNavItem {
    id: number;
    name: string,
    link: string
}

interface NewsLetter {
    id: number;
    title: string;
    content: string;
}

interface footerColumn {
    id: number,
    title: string,
    navItems: footerNavItem[]
}
// Define state type
interface FooterState {
    icons: Icon[];
    footerColumns: footerColumn[];
    newsLetter: NewsLetter;
}

// Initial State
const state: FooterState = {
    icons: [],
    footerColumns: [],
    newsLetter: {
        id: 0,
        title: '',
        content: ''
    }
}

// Define mutations
const mutations = {
    SET_ICONS(state: FooterState, payload: FooterState) {
        state.icons = payload.icons;
    },

    SET_COLUMN(state: FooterState, payload: FooterState) {
        state.footerColumns = payload.footerColumns
    },

    SET_NEWSLETTER(state: FooterState, payload: FooterState) {
        state.newsLetter.id = payload.newsLetter.id;
        state.newsLetter.title = payload.newsLetter.title;
        state.newsLetter.content = payload.newsLetter.content;
    }
}

// Define Actions
const actions = {
    async fetchIcons({ commit }: any) {
        try {
            await axios.get('http://localhost:3000/icons').then((res) => {
                commit('SET_ICONS', { icons: res.data })
            })
        } catch (error) {
            console.log('Error fetching cards', error)
        }
    },

    async fetchFooterColumns({ commit }: any) {
        try {
            await axios.get('http://localhost:3000/footerColumn-1').then((res) => {
                commit('SET_COLUMN', { footerColumns: res.data })
            })
        } catch (error) {
            console.error('Error fetching footer columns', error)
        }
    },

    async fetchNewsLetter({ commit }: any) {
        try {
            await axios.get('http://localhost:3000/newsLetter').then((res) => {
                commit('SET_NEWSLETTER', { newsLetter: res.data})
            })
        } catch (error) {
            console.error('Error fetching news letter', error)
        }
    }
}

// Define getters
const getters = {
    getIcons: (state: FooterState) => state.icons,
    getFooterColumns: (state: FooterState) => state.footerColumns,
    getNewsLetter: (state: FooterState) => state.newsLetter
}

// Vuex Module
const footerStore: Module<FooterState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}


export default footerStore;