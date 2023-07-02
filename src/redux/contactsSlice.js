import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const { createSlice } = require('@reduxjs/toolkit');
const { nanoid } = require('nanoid'); // defaults to localStorage for web

const contactsInitialState = {
  value: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.value.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { id: nanoid(), name, number } };
      },
    },

    deleteContact(state, action) {
      state.value = state.value.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const localStorageReducer = persistReducer(persistConfig, contactsReducer);
export const getContacts = state => state.contacts.value;
