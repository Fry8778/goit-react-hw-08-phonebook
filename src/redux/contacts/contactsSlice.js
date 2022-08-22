import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, removeContacts } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    handlechangeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [getContacts.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [addContacts.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [addContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [removeContacts.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [removeContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [removeContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { handlechangeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;