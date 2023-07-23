import { configureStore } from '@reduxjs/toolkit';
import titleSlice from './titleSlice';

const store = configureStore({
  reducer: {
    title: titleSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
