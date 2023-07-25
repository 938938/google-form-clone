import { useDispatch } from 'react-redux';
import {
  addEtcOption,
  addOptions,
  delEtcOption,
  delOption,
  editOption,
} from '../store/questionSlice';
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
              <input value={ele} onChange={(e) => onChangeHandler(e, idx)} />
              <RxCross2
                className={style.delBtn}
                onClick={() => onDeleteHandler(idx)}
              />
            </li>
          ))}
          {isEtc && (
            <li className={style.etc}>
              <span>기타...</span>
              <RxCross2 className={style.delBtn} onClick={onEtcDeleteHandler} />
            </li>
          )}
          <li>
            <input value='옵션 추가' onClick={onAddHandler} readOnly />
            {!isEtc && (
              <>
                <span>또는</span>
                <button onClick={onEtcAddHandler}>'기타' 추가</button>
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
              <input value={ele} onChange={(e) => onChangeHandler(e, idx)} />
              <RxCross2
                className={style.delBtn}
                onClick={() => onDeleteHandler(idx)}
              />
            </li>
          ))}
          {isEtc && (
            <li className={style.etc}>
              <span>기타...</span>
              <RxCross2 className={style.delBtn} onClick={onEtcDeleteHandler} />
            </li>
          )}
          <li>
            <input value='옵션 추가' onClick={onAddHandler} readOnly />
            {!isEtc && (
              <>
                <span>또는</span>
                <button onClick={onEtcAddHandler}>'기타' 추가</button>
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
              <input value={ele} onChange={(e) => onChangeHandler(e, idx)} />
              <RxCross2
                className={style.delBtn}
                onClick={() => onDeleteHandler(idx)}
              />
            </li>
          ))}
          <li>
            <input value='옵션 추가' onClick={onAddHandler} readOnly />
          </li>
        </ol>
      );
    default:
      return <></>;
  }
};

export default Options;
