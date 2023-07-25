import { createSlice } from '@reduxjs/toolkit';

// type Answer = {};
export type QuestionType = {
  idx: number;
  type: string;
  // 'short' | 'paragraph' | 'multiple' | 'checkboxes' | 'dropdown'
  title: string;
  // answer 타입 좀 더 고민하기. 일단 임시로 string.
  options: string[];
  isEtc: boolean;
  isRequired: boolean;
};

const initialState: QuestionType[] = [
  {
    idx: 0,
    type: 'multiple',
    title: '',
    options: ['옵션1'],
    isEtc: false,
    isRequired: false,
  },
];

const questionSlice = createSlice({
  name: 'questionSlice',
  initialState,
  reducers: {
    // 질문 전체에 적용
    add: (state, action) => {
      const defaultValue = {
        idx: state.length,
        type: 'multiple',
        title: '',
        options: ['옵션1'],
        isEtc: false,
        isRequired: false,
      };
      state.push(defaultValue);
    },
    editType: (state, action) => {
      const { idx, type } = action.payload;
      state[idx].type = type;
    },
    copy: (state, action) => {
      const idx = action.payload;
      const copyQuestion = {
        ...state[idx],
        idx: idx + 1,
      };
      state.splice(idx + 1, 0, copyQuestion);
    },
    del: (state, action) => {
      const idx = action.payload;
      // 남은 질문이 하나밖에 없으면 삭제를 실행하지 않고 return
      if (state.length <= 1) {
        return;
      }
      state.splice(idx, 1);
    },
    editRequire: (state, action) => {
      const idx = action.payload;
      state[idx].isRequired = !state[idx].isRequired;
    },

    // 질문 타이틀 적용
    editTitle: (state, action) => {
      const { idx, value } = action.payload;
      state[idx].title = value;
    },

    // 옵션에 적용
    addOptions: (state, action) => {
      const { idx } = action.payload;
      state[idx].options.push(`옵션 ${state[idx].options.length + 1}`);
    },
    addEtcOption: (state, action) => {
      const { idx } = action.payload;
      state[idx].isEtc = true;
    },
    delEtcOption: (state, action) => {
      const { idx } = action.payload;
      state[idx].isEtc = false;
    },
    editOption: (state, action) => {
      // Qidx : 질문의 인덱스
      // Oidx : 옵션의 인덱스
      const { Qidx, Oidx, value } = action.payload;
      state[Qidx].options[Oidx] = value;
    },
    delOption: (state, action) => {
      const { Qidx, Oidx } = action.payload;
      // 남은 옵션이 하나밖에 없으면 삭제를 실행하지 않고 return
      if (state[Qidx].options.length <= 1) {
        return;
      }
      state[Qidx].options.splice(Oidx, 1);
    },
  },
});

export default questionSlice;
export const {
  add,
  editType,
  copy,
  del,
  editRequire,
  editTitle,
  addOptions,
  addEtcOption,
  delEtcOption,
  editOption,
  delOption,
} = questionSlice.actions;
