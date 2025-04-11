import axios from "axios";
import { Module } from "vuex";

const SECRET_KEY = "abcdef";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface UsersState {
  users: User[];
}

const header = {
  alg: "HS256",
  typ: "JWT",
};

const state: UsersState = {
  users: [],
};

const mutations = {
  SET_USER(state: UsersState, payload: User) {
    state.users.push(payload);
  },

  REMOVE_USER(state: UsersState) {
    const popedUser = state.users.pop()
    console.log(popedUser)
  }
};

const actions = {
  async signUp({ commit }: any, payload: User) {
    payload.id = Math.floor(Math.random() * 101);
    try {
      const response = await axios.post("http://localhost:3000/users", payload);
      if(response.status === 201) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error with the authentication", error);
    }
  },

  async login({ commit }: any, payload: User) {
    try {
      const user = (
        await axios.get(`http://localhost:3000/users?email=${payload.email}`)
      ).data[0];
      if (user.email === payload.email && user.password === payload.password) {
        console.log(user)
        commit('SET_USER', user)
        return true;
      } else {
        return false;
      }
    } catch (error) {}
  },

  async logout({ commit }: any) {
    commit('REMOVE_USER')
  }
};

const getters = {
  findUserEmail: (state: UsersState) => (email: string) =>
    state.users.find((user) => user.email === email),

  isAuthenticated: (state: UsersState) => state.users
};

const userStore: Module<UsersState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default userStore;
