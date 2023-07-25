import { useState } from 'react';
import { RxChevronDown, RxChevronUp } from 'react-icons/rx';
import style from './DropDown.module.css';

const DropDown: React.FC<{ defaultValue: string; values: string[] }> = ({
  defaultValue,
  values,
}) => {
  const [view, setView] = useState<boolean>(false);
  const [dropdownValue, setDropdownValue] = useState<string>(defaultValue);
  const onClickHandler = (ele: string) => {
    setDropdownValue(ele);
    setView(false);
  };

  return (
    <div className={style.dropdown}>
      <button onClick={() => setView((prev) => !prev)}>
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
