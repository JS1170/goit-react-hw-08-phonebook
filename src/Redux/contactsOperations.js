import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://634aa8e733bb42dca4085c94.mockapi.io';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const resultBackEnd = await axios.get('/contacts');
      return resultBackEnd.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (item, thunkAPI) => {
    try {
      const resultBackEnd = await axios.post('/contacts', item);
      return resultBackEnd.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const resultBackEnd = await axios.delete(`/contacts/${id}`);
      return resultBackEnd.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
