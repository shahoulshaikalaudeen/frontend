import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './itemSlice';

// Configuration du store Redux en utilisant configureStore de Redux Toolkit
export const store = configureStore({
  reducer: {
    items: itemReducer, // Ajout du reducer itemReducer sous la clé 'items'
  },
});

// Définition du type RootState qui représente l'état global du store
export type RootState = ReturnType<typeof store.getState>;

// Définition du type AppDispatch qui représente la fonction dispatch du store
export type AppDispatch = typeof store.dispatch;
