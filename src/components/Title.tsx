import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ChangeEvent } from 'react';
import { setSub, setTitle } from '../store/titleSlice';
import style from './Title.module.css';
import { PreviewType } from '../model/Type';
import SideBtn from './SideBtn';

const Title: React.FC<PreviewType> = ({ preview }) => {
  const dispatch = useDispatch();
  const { title, sub } = useSelector((state: RootState) => state.title);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        return dispatch(setTitle(value));
      case 'sub':
        return dispatch(setSub(value));
      default:
        return;
    }
  };

  return (
    <div className={style.titleBox}>
      <label>
        {preview ? (
          <p className={style.title}>{title}</p>
        ) : (
          <input
            className={style.title}
            name='title'
            value={title}
            onChange={changeHandler}
          />
        )}
      </label>
      {/* focus 이벤트가 일어났을 때 글자 꾸미는 버튼 표시 */}
      <label>
        {preview ? (
          <p>{sub}</p>
        ) : (
          <input
            name='sub'
            value={sub}
            placeholder='설문지 설명'
            onChange={changeHandler}
          />
        )}
      </label>
      {preview && (
        <p className={style.required}>
          <span>*</span> 표시는 필수 질문입니다.
        </p>
      )}
      <SideBtn preview={preview} />
    </div>
  );
};

export default Title;
