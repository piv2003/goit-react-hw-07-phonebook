import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};