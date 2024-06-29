import { configureStore } from '@reduxjs/toolkit'
import walletReducer from '@/lib/store/features/walletSlice/walletSlice';
import filterReducer from '@/lib/store/features/filterSlice/filterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      wallet: walletReducer,
      filter: filterReducer,
    },
  })
}