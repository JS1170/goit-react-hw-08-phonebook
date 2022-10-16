import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const baseContacts = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: baseContacts,
  reducers: {

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]({ contacts }) {
      contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]({ contacts }, action) {
      contacts.isLoading = false;
      contacts.error = null;
      contacts.items = action.payload;
    },
    [fetchContacts.rejected]({ contacts }, action) {
      contacts.isLoading = false;
      contacts.error = action.payload;
    },


// addContact ---->

    [addContact.pending]({ contacts }) {
      contacts.isLoading = true;
    },
    [addContact.fulfilled]({ contacts }, action) {
      contacts.isLoading = false;
      contacts.error = null;
      contacts.items = [...contacts.items, action.payload];
    },
    [addContact.rejected]({ contacts }, action) {
      contacts.isLoading = false;
      contacts.error = action.payload;
    },


// deleteContact ---> 
    
    [deleteContact.pending]({ contacts }) {
      contacts.isLoading = true;
    },
    [deleteContact.fulfilled]({ contacts }, action) {
      contacts.isLoading = false;
      contacts.error = null;
      contacts.items = contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]({ contacts }, action) {
      contacts.isLoading = false;
      contacts.error = action.payload;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
