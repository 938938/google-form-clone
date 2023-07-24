import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ChangeEvent } from 'react';
import { setSub, setTitle } from '../store/titleSlice';
import style from './Title.module.css';

const Title = () => {
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
        <input
          className={style.title}
          name='title'
          value={title}
          onChange={changeHandler}
        />
      </label>
      {/* focus 이벤트가 일어났을 때 글자 꾸미는 버튼 표시 */}
      <label>
        <input
          name='sub'
          value={sub}
          placeholder='설문지 설명'
          onChange={changeHandler}
        />
      </label>
    </div>
  );
};

export default Title;
