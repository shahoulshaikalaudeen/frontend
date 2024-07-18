import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchItemsFromAPI, createItemInAPI } from '../services/apiService';

// Définition de l'interface Item pour typer les items
interface Item {
  name: string;
}

// Définition de l'interface ItemState pour typer l'état du slice
interface ItemState {
  items: Item[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initialisation de l'état initial
const initialState: ItemState = {
  items: [],
  status: 'idle',
  error: null,
};

// Définition des thunks asynchrones

// Thunk pour récupérer les items depuis une API
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await fetchItemsFromAPI();
  return response; // Le payload de l'action est la réponse de l'API
});

// Thunk pour ajouter un nouvel item via une API
export const addItem = createAsyncThunk('items/addItem', async (item: Item) => {
  const response = await createItemInAPI(item);
  return response; // Le payload de l'action est la réponse de l'API
});

// Création du slice
const itemSlice = createSlice({
  name: 'items', // Nom du slice
  initialState, // État initial défini plus haut
  reducers: {}, // Pas de reducers synchrones définis ici
  extraReducers: (builder) => {
    // Gestion des actions créées par les thunks asynchrones
    builder
      .addCase(fetchItems.pending, (state) => {
        // Mise à jour de l'état lors de la requête en cours
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        // Mise à jour de l'état lors de la réussite de la requête
        state.status = 'succeeded';
        state.items = action.payload; // Mise à jour de la liste des items avec les données récupérées
      })
      .addCase(fetchItems.rejected, (state, action) => {
        // Mise à jour de l'état lors de l'échec de la requête
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch items'; // Enregistrement de l'erreur
      })
      .addCase(addItem.fulfilled, (state, action) => {
        // Mise à jour de l'état lors de l'ajout réussi d'un item
        state.items.push(action.payload); // Ajout de l'item à la liste des items
      });
  },
});

// Exportation du reducer du slice pour l'intégrer au store Redux
export default itemSlice.reducer;
