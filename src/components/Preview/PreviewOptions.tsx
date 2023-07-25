import style from './PreviewOptions.module.css';
import DropDown from '../common/DropDown';
import { OptionType } from '../../model/Type';
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';
import { checkBoxSelect, select } from '../../store/questionSlice';

const PreviewOptions: React.FC<OptionType> = ({
  idx,
  type,
  options,
  isEtc,
  isRequired,
  selected,
}) => {
  const dispatch = useDispatch();
  const selectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(select({ idx, value }));
  };
  const selectCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    dispatch(checkBoxSelect({ idx, value, checked }));
  };
  switch (type) {
    case 'short':
      return (
        <input
          placeholder='내 답변'
          className={style.short}
          required={isRequired}
          value={selected[0]}
          onChange={selectHandler}
        />
      );
    case 'paragraph':
      return (
        <input
          placeholder='내 답변'
          className={style.paragraph}
          required={isRequired}
          value={selected[0]}
          onChange={selectHandler}
        />
      );
    case 'multiple':
      return (
        <ul>
          {options.map((ele, idx) => (
            <li key={idx}>
              <input
                type='radio'
                className={style.option}
                name='radio'
                required={isRequired}
                onChange={selectHandler}
                value={ele}
              />
              <p>{ele}</p>
            </li>
          ))}
          {isEtc && (
            <li className={style.etc}>
              <input
                type='radio'
                className={style.option}
                name='radio'
                onChange={selectHandler}
                value='기타'
              />
              <span>기타...</span>
            </li>
          )}
        </ul>
      );
    case 'checkboxes':
      return (
        <ul>
          {options.map((ele, idx) => (
            <li key={idx}>
              <input
                type='checkbox'
                name='checkbox'
                className={style.option}
                onChange={selectCheckBoxHandler}
                value={ele}
              />
              <p>{ele}</p>
            </li>
          ))}
          {isEtc && (
            <li className={style.etc}>
              <input
                type='checkbox'
                name='checkbox'
                className={style.option}
                onChange={selectCheckBoxHandler}
                value='기타'
              />
              <span>기타...</span>
            </li>
          )}
        </ul>
      );
    case 'dropdown':
      return <DropDown idx={idx} defaultValue={options[0]} values={options} />;
    default:
      return <></>;
  }
};

export default PreviewOptions;
