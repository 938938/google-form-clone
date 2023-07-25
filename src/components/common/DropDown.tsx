import { useState } from 'react';
import { RxChevronDown, RxChevronUp } from 'react-icons/rx';
import style from './DropDown.module.css';
import { useDispatch } from 'react-redux';
import { select } from '../../store/questionSlice';

const DropDown: React.FC<{
  idx: number;
  defaultValue: string;
  values: string[];
}> = ({ idx, defaultValue, values }) => {
  const dispatch = useDispatch();
  const [view, setView] = useState<boolean>(false);
  const [dropdownValue, setDropdownValue] = useState<string>(defaultValue);
  const onClickHandler = (ele: string) => {
    setDropdownValue(ele);
    setView(false);
    dispatch(select({ idx, value: ele }));
  };

  return (
    <div className={style.dropdown}>
      <button onClick={() => setView((prev) => !prev)} type='button'>
        {dropdownValue} {view ? <RxChevronUp /> : <RxChevronDown />}
      </button>
      <ul className={`${view ? style.open : style.close}`}>
        {values.map((ele, idx) => (
          <li key={idx} onClick={() => onClickHandler(ele)}>
            {ele}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
