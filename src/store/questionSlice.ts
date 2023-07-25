import { createSlice } from '@reduxjs/toolkit';

// type Answer = {};
export type QuestionType = {
  idx: number;
  type: 'short' | 'paragraph' | 'multiple' | 'checkboxes' | 'dropdown';
  title: string;
  // answer 타입 좀 더 고민하기. 일단 임시로 string.
  options: string[];
  isEtc: boolean;
};

const initialState: QuestionType[] = [
  {
    idx: 0,
    type: 'multiple',
    title: '질문',
    options: ['옵션1'],
    isEtc: false,
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

    // 답변에 적용
    addOptions: (state, action) => {
      const { idx } = action.payload;
      state[idx].options.push(`옵션 ${state[idx].options.length + 1}`);
    },
    addEtcOption: (state, action) => {
      const { idx } = action.payload;
      state[idx].isEtc = true;
    },
  },
});

export default questionSlice;
export const { add, addOptions, addEtcOption } = questionSlice.actions;
