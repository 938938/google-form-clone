import { createSlice } from '@reduxjs/toolkit';

// type Answer = {};
export type QuestionType = {
  type: 'short' | 'paragraph' | 'multiple' | 'checkboxes' | 'dropdown';
  title: string;
  // answer 타입 좀 더 고민하기. 일단 임시로 string.
  options: string[];
};

const initialState: QuestionType[] = [
  {
    type: 'multiple',
    title: '질문',
    options: ['옵션1'],
  },
];

const questionSlice = createSlice({
  name: 'questionSlice',
  initialState,
  reducers: {
    // 질문 전체에 적용
    add: (state, action) => {
      state = [...state, action.payload];
    },
  },
});

export default questionSlice;
export const { add } = questionSlice.actions;
