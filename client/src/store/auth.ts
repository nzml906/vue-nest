/* eslint @typescript-eslint/no-explicit-any: 0 */
import { Module } from 'vuex';
import axios from 'axios';

const getToken = () => {
  return window.localStorage.getItem('id_token');
};

interface User {
  email: string;
  password: string;
  username: string;
  token: string;
}

interface RootState {
  version: string;
}

interface AuthState {
  loggingIn: boolean;
  loggedIn: boolean;
  user?: User;
  isAuthenticated: boolean;
  errors: any;
}

const initialState = {
  loggingIn: false,
  loggedIn: false,
  user: undefined,
  isAuthenticated: !!getToken(),
  errors: undefined,
};

const API_URL = 'http://localhost:3000/api';

const axiosClient = axios.create({
  baseURL: API_URL,
});

const saveToken = (token: string) => {
  window.localStorage.setItem('id_token', token);
};
const destroyToken = () => {
  window.localStorage.removeItem('id_token');
};

export const auth: Module<AuthState, RootState> = {
  namespaced: true,
  state: initialState,
  actions: {
    signup(context, credentials: User) {
      return new Promise((resolve, reject) => {
        axiosClient
          .post('users', { user: credentials })
          .then((user) => {
            context.commit('SET_AUTH', user);
            resolve(user);
          })
          .catch((error) => {
            context.commit('SET_ERROR', error);
            reject(error);
          });
      });
    },
    logout(context) {
      context.commit('PURGE_AUTH');
    },
    login(context, credentials: User) {
      return new Promise((resolve) => {
        axiosClient
          .post('users/login', { user: credentials })
          .then((user) => {
            context.commit('SET_AUTH', user);
            resolve(user);
          })
          .catch((error) => {
            context.commit('SET_ERROR', error);
          });
      });
    },
  },
  mutations: {
    SET_AUTH(state, user: User) {
      state.isAuthenticated = true;
      state.user = user;
      state.errors = null;
      saveToken(state.user.token);
    },
    SET_ERROR(state, errors: string) {
      state.errors = errors;
    },
    PURGE_AUTH(state) {
      state.isAuthenticated = false;
      state.errors = {};
      destroyToken();
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
};
