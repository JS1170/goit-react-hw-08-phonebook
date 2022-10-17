import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [register.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    // Log in ----->

    [logIn.pending](state) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logIn.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    // Log out ---->

    [logOut.pending](state) {
      state.isLoading = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [logOut.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    // Refresh ------>
    [fetchCurrentUser.pending](state) {
      state.isLoading = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.fulfilled](state, {payload}) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isFetchingCurrentUser = true;
      state.error = null;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      state.isFetchingCurrentUser = true;
    },
  },
});

export const authReducer = authSlice.reducer;
