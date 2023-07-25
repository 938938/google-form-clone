import { ChangeEvent, useState } from 'react';
import {
  copy,
  del,
  editRequire,
  editTitle,
  editType,
} from '../../store/questionSlice';
import style from './Question.module.css';
import Options from './Options';
import { useDispatch } from 'react-redux';
import { RxCopy, RxTrash } from 'react-icons/rx';
import Container from '../common/Container';
import { QuestionType } from '../../model/Type';

const Question: React.FC<QuestionType> = ({
  idx,
  type,
  title,
  options,
  isEtc,
  isRequired,
  selected,
}) => {
  const dispatch = useDispatch();
  const [Qtype, setQType] = useState<string>(type);
  const toggleHandler = () => {
    dispatch(editRequire(idx));
  };
  const editHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(editTitle({ idx, value }));
  };
  const editTypeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setQType(value);
    dispatch(editType({ idx, value }));
  };
  const copyHandler = () => {
    dispatch(copy(idx));
  };
  const delHandler = () => {
    dispatch(del(idx));
  };

  return (
    <Container>
      <div className={style.questionHeader}>
        <input
          placeholder='질문'
          value={title}
          onChange={editHandler}
          required
        />
        <select defaultValue={type} onChange={editTypeHandler}>
          <option value='short'>단답형</option>
          <option value='paragraph'>장문형</option>
          <hr />
          <option value='multiple'>객관식 질문</option>
          <option value='checkboxes'>체크박스</option>
          <option value='dropdown'>드롭박스</option>
        </select>
      </div>
      <div className={style.optionsBox}>
        <Options
          idx={idx}
          type={Qtype}
          options={options}
          isEtc={isEtc}
          isRequired={isRequired}
          selected={selected}
        />
      </div>
      <div className={style.btns}>
        <button onClick={copyHandler} type='button'>
          <RxCopy className='iconBtn' />
        </button>
        <button onClick={delHandler} type='button'>
          <RxTrash className='iconBtn' />
        </button>
        <p>| 필수</p>
        <div className={style.toggle} onClick={toggleHandler}>
          <div
            className={`${style.toggleCircle} ${isRequired && style.toggleOn}`}
          />
        </div>
      </div>
    </Container>
  );
};

export default Question;
