import { useDispatch } from 'react-redux';
import {
  addEtcOption,
  addOptions,
  delEtcOption,
  delOption,
  editOption,
} from '../../store/questionSlice';
import { ChangeEvent } from 'react';
import { RxCross2 } from 'react-icons/rx';
import style from './Options.module.css';

const Options: React.FC<{
  idx: number;
  type: string;
  options: string[];
  isEtc: boolean;
}> = ({ idx, type, options, isEtc }) => {
  const dispatch = useDispatch();
  const onAddHandler = () => {
    dispatch(addOptions({ idx }));
  };
  const onEtcAddHandler = () => {
    dispatch(addEtcOption({ idx }));
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, Oidx: number) => {
    const { value } = e.target;
    dispatch(editOption({ Qidx: idx, value, Oidx }));
  };
  const onDeleteHandler = (Oidx: number) => {
    dispatch(delOption({ Qidx: idx, Oidx }));
  };
  const onEtcDeleteHandler = () => {
    dispatch(delEtcOption({ idx }));
  };
  switch (type) {
    case 'short':
      return <p>단답형 텍스트</p>;
    case 'paragraph':
      return <p>장문형 텍스트</p>;
    case 'multiple':
      return (
        <ul>
          {options.map((ele, idx) => (
            <li key={idx}>
              <input type='radio' className={style.option} disabled />
              <input value={ele} onChange={(e) => onChangeHandler(e, idx)} />
              <RxCross2
                className='iconBtn'
                onClick={() => onDeleteHandler(idx)}
              />
            </li>
          ))}
          {isEtc && (
            <li className={style.etc}>
              <input type='radio' className={style.option} disabled />
              <span>기타...</span>
              <RxCross2 className='iconBtn' onClick={onEtcDeleteHandler} />
            </li>
          )}
          <li>
            <input type='radio' className={style.option} disabled />
            <input
              value='옵션 추가'
              className={style.addInput}
              onClick={onAddHandler}
              readOnly
            />
            {!isEtc && (
              <>
                <span>또는</span>
                <button className={style.addBtn} onClick={onEtcAddHandler}>
                  '기타' 추가
                </button>
              </>
            )}
          </li>
        </ul>
      );
    case 'checkboxes':
      return (
        <ul>
          {options.map((ele, idx) => (
            <li key={idx}>
              <input type='checkbox' className={style.option} disabled />
              <input value={ele} onChange={(e) => onChangeHandler(e, idx)} />
              <RxCross2
                className='iconBtn'
                onClick={() => onDeleteHandler(idx)}
              />
            </li>
          ))}
          {isEtc && (
            <li className={style.etc}>
              <input type='checkbox' className={style.option} disabled />
              <span>기타...</span>
              <RxCross2 className='iconBtn' onClick={onEtcDeleteHandler} />
            </li>
          )}
          <li>
            <input type='checkbox' className={style.option} disabled />
            <input
              value='옵션 추가'
              className={style.addInput}
              onClick={onAddHandler}
              readOnly
            />
            {!isEtc && (
              <>
                <span>또는</span>
                <button className={style.addBtn} onClick={onEtcAddHandler}>
                  '기타' 추가
                </button>
              </>
            )}
          </li>
        </ul>
      );
    case 'dropdown':
      return (
        <ol>
          {options.map((ele, idx) => (
            <li key={idx}>
              <span className={style.dropdownOption}>{idx + 1}.</span>
              <input value={ele} onChange={(e) => onChangeHandler(e, idx)} />
              <RxCross2
                className='iconBtn'
                onClick={() => onDeleteHandler(idx)}
              />
            </li>
          ))}
          <li>
            <input
              value='옵션 추가'
              className={style.addInput}
              onClick={onAddHandler}
              readOnly
            />
          </li>
        </ol>
      );
    default:
      return <></>;
  }
};

export default Options;
