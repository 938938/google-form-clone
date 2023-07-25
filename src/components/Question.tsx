import { ChangeEvent, useState } from 'react';
import { QuestionType, copy, editTitle } from '../store/questionSlice';
import style from './Question.module.css';
import Options from './Options';
import { useDispatch } from 'react-redux';
import {
  RxButton,
  RxTextAlignLeft,
  RxDisc,
  RxCheckbox,
  RxCheckCircled,
  RxCopy,
  RxTrash,
} from 'react-icons/rx';

const Question: React.FC<QuestionType> = ({
  idx,
  type,
  title,
  options,
  isEtc,
}) => {
  const dispatch = useDispatch();
  const [Qtype, setQType] = useState<string>('multiple');
  const [isRequired, setIsRequired] = useState<boolean>(false);
  const toggleHandler = () => {
    setIsRequired((prev) => !prev);
  };
  const editHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(editTitle({ idx, value }));
  };
  const copyHandler = () => {
    dispatch(copy(idx));
  };
  return (
    <form className={style.questionBox}>
      <div className={style.questionHeader}>
        <input placeholder='질문' value={title} onChange={editHandler} />
        <select
          defaultValue='multiple'
          onChange={(e) => setQType(e.target.value)}
        >
          <option value='short'>
            <RxButton />
            단답형
          </option>
          <option value='paragraph'>
            <RxTextAlignLeft />
            장문형
          </option>
          <hr />
          <option value='multiple'>
            <RxDisc />
            객관식 질문
          </option>
          <option value='checkboxes'>
            <RxCheckbox />
            체크박스
          </option>
          <option value='dropdown'>
            <RxCheckCircled />
            드롭박스
          </option>
        </select>
      </div>
      <div className={style.optionsBox}>
        <Options idx={idx} type={Qtype} options={options} isEtc={isEtc} />
      </div>
      <div className={style.btns}>
        <button onClick={copyHandler} type='button'>
          <RxCopy className='iconBtn' />
        </button>
        <button>
          <RxTrash className='iconBtn' type='button' />
        </button>
        <p>| 필수</p>
        <div className={style.toggle} onClick={toggleHandler}>
          <div
            className={`${style.toggleCircle} ${isRequired && style.toggleOn}`}
          />
        </div>
      </div>
    </form>
  );
};

export default Question;
