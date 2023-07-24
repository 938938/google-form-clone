import { configureStore } from '@reduxjs/toolkit';
import titleSlice from './titleSlice';
import questionSlice from './questionSlice';

const store = configureStore({
  reducer: {
    title: titleSlice.reducer,
    question: questionSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
