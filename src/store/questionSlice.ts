import { createSlice } from '@reduxjs/toolkit';
import { QuestionType } from '../model/Type';

const initialState: QuestionType[] = [
  {
    idx: 0,
    type: 'multiple',
    title: '',
    options: ['옵션1'],
    isEtc: false,
    isRequired: false,
    selected: [],
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
        selected: [],
      };
      state.push(defaultValue);
    },
    editType: (state, action) => {
      const { idx, value } = action.payload;
      state[idx].type = value;
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

    // 답변 체크
    select: (state, action) => {
      const { idx, value } = action.payload;
      state[idx].selected[0] = value;
    },
    checkBoxSelect: (state, action) => {
      const { idx, value, checked } = action.payload;
      if (checked) {
        state[idx].selected.push(value);
      } else {
        const optionIdx = state[idx].selected.indexOf(value);
        state[idx].selected.splice(optionIdx, 1);
      }
    },
    reset: (state, action) => {
      state.forEach((ele) => (ele.selected = ['']));
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
  select,
  checkBoxSelect,
  reset,
} = questionSlice.actions;
