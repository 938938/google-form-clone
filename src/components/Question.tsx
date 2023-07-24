import { useState } from 'react';
import { QuestionType } from '../store/questionSlice';
import style from './Question.module.css';
import Answer from './Answer';

const Question: React.FC<QuestionType> = ({ type, title, answer }) => {
  const [answerType, setAnswerType] = useState<string>('multiple');
  return (
    <form className={style.questionBox}>
      <div className={style.questionHeader}>
        <input placeholder='질문' />
        <select
          defaultValue='multiple'
          onChange={(e) => setAnswerType(e.target.value)}
        >
          <option value='short'>단답형</option>
          <option value='paragraph'>장문형</option>
          <hr />
          <option value='multiple'>객관식 질문</option>
          <option value='checkboxes'>체크박스</option>
          <option value='dropdown'>드롭박스</option>
        </select>
      </div>
      <div className={style.answerBox}>
        <Answer type={answerType} answer={answer} />
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
