import style from './PreviewOptions.module.css';
import DropDown from '../common/DropDown';
import { OptionType } from '../../model/Type';

const PreviewOptions: React.FC<OptionType> = ({
  idx,
  type,
  options,
  isEtc,
}) => {
  switch (type) {
    case 'short':
      return <input placeholder='내 답변' className={style.short} />;
    case 'paragraph':
      return <input placeholder='내 답변' className={style.paragraph} />;
    case 'multiple':
      return (
        <ul>
          {options.map((ele, idx) => (
            <li key={idx}>
              <input type='radio' className={style.option} name='radio' />
              <p>{ele}</p>
            </li>
          ))}
          {isEtc && (
            <li className={style.etc}>
              <input type='radio' className={style.option} name='radio' />
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
              <input type='checkbox' className={style.option} />
              <p>{ele}</p>
            </li>
          ))}
          {isEtc && (
            <li className={style.etc}>
              <input type='checkbox' className={style.option} />
              <span>기타...</span>
            </li>
          )}
        </ul>
      );
    case 'dropdown':
      return <DropDown defaultValue={options[0]} values={options} />;
    default:
      return <></>;
  }
};

export default PreviewOptions;
