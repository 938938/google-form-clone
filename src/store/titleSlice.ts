import { createSlice } from '@reduxjs/toolkit';
import { TitleType } from '../model/Type';

const initialState: TitleType = {
  title: '제목 없는 설문지',
  sub: '',
};

const titleSlice = createSlice({
  name: 'titleSlice',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setSub: (state, action) => {
      state.sub = action.payload;
    },
  },
});

export default titleSlice;
export const { setTitle, setSub } = titleSlice.actions;
