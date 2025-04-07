import axios from 'axios'
import { Module } from 'vuex';

interface User {
    id: number;
    name: string;
    email: string;
    subscribe: boolean;
}

interface FormFields {
    id: number;
    label: string;
    type: string;
    class: string;
    name: string;
    placeHolder: string;
}

interface ButtonType {
    type: string;
    class: string;
    text: string;
}

interface ContactUs {
    id: number;
    title: string;
    content: string;
    formFields: FormFields[];
    buttonType: ButtonType
}

// Define the state type
interface ContactUsState {
    contactData: ContactUs
}

// Initial state
const state: ContactUsState = {
    contactData: {
        id: 0,
        title: '',
        content: '',
        formFields: [],
        buttonType: {
            type: '',
            class: '',
            text: ''
        }
    }
}

// Define mutations
const mutations = {
    SET_CONTACT(state: ContactUsState, payload: ContactUsState) {
        state.contactData = payload.contactData;
    }
}

// Define Actions
const actions = {
    async fetchContactItem({ commit }: any) {
        try {
            await axios.get('http://localhost:3000/contactData').then((res) => {
                commit('SET_CONTACT', { contactData: res.data })
            })
        } catch (error) {
            console.error('Error fetching contact us', error)
        }
    },

    async addUserData({ commit }: any, payload: User) {
        payload.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
        try {
            await axios.post('http://localhost:3000/users', payload).then((res) => {
                console.log(res.status)
                return true;
            })
        } catch (error) {
            console.error('Error sending in user details', error)
        }
    }
}

// Define getters
const getters = {
    getBlogItems: (state: ContactUsState) => state.contactData
}

// Vuex Module
const blogStore: Module<ContactUsState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default blogStore;