import { useDispatch } from 'react-redux';
import { addEtcOption, addOptions, editOption } from '../store/questionSlice';
import { ChangeEvent } from 'react';

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
            </li>
          ))}
          {isEtc && <p>기타...</p>}
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
            </li>
          ))}
          {isEtc && <p>기타...</p>}
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
