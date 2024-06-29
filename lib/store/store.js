import { configureStore } from '@reduxjs/toolkit'
import walletReducer from '@/lib/store/features/walletSlice/walletSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      wallet: walletReducer,
    },
  })
}