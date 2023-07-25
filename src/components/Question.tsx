import { ChangeEvent, useState } from 'react';
import { QuestionType, editTitle } from '../store/questionSlice';
import style from './Question.module.css';
import Options from './Options';
import { useDispatch } from 'react-redux';

const Question: React.FC<QuestionType> = ({
  idx,
  type,
  title,
  options,
  isEtc,
}) => {
  const dispatch = useDispatch();
  const [Qtype, setQType] = useState<string>('multiple');
  const editHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(editTitle({ idx, value }));
  };
  return (
    <form className={style.questionBox}>
      <div className={style.questionHeader}>
        <input placeholder='질문' value={title} onChange={editHandler} />
        <select
          defaultValue='multiple'
          onChange={(e) => setQType(e.target.value)}
        >
          <option value='short'>단답형</option>
          <option value='paragraph'>장문형</option>
          <hr />
          <option value='multiple'>객관식 질문</option>
          <option value='checkboxes'>체크박스</option>
          <option value='dropdown'>드롭박스</option>
        </select>
      </div>
      <div className={style.optionsBox}>
        <Options idx={idx} type={Qtype} options={options} isEtc={isEtc} />
      </div>
      <div className={style.btns}>
        <button>복사</button>
        <button>삭제</button>
        <button>토글</button>
      </div>
    </form>
  );
};

export default Question;
