// src/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: null,
  chainID: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWallet(state, action) {
      state.address = action.payload.address;
      state.chainID = action.payload.chainID;
    },
    clearWallet(state) {
      state.address = null;
      state.chainID = null;
    },
  },
});

export const { setWallet, clearWallet } = walletSlice.actions;
export default walletSlice.reducer;
