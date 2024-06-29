// src/filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: null,
  location: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPrice(state, action) {
      state.price = action.payload.price;
    },
    setLocation(state, action) {
      state.location = action.payload.location;
    },
    resetFilters(state) {
      state.price = null;
      state.location = '';
    },
  },
});

export const { setPrice, setLocation, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
