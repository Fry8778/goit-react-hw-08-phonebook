import { createSlice } from '@reduxjs/toolkit';
import { getUserThunk, loginUserThunk, logoutUserThunk, registerUserThunk } from './userOperations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [loginUserThunk.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.token = null;
      state.email = null;
      state.error = payload;
    },
    [loginUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
      state.email = payload.email;
    },
    [registerUserThunk.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.token = null;
      state.email = null;
      state.error = payload;
    },
    [registerUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
      state.email = payload.email;
    },
    [logoutUserThunk.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.token = null;
      state.email = null;
      state.error = payload;
    },
    [logoutUserThunk.fulfilled]: (state, _) => {
      state.isLoading = false;
      state.token = null;
      state.email = null;
    },
    [getUserThunk.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [getUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.token = null;
      state.email = null;
      state.error = payload;
    },
    [getUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.email = payload.email;
    },
  },
});

export default userSlice.reducer;