import { QuestionType } from '../../model/Type';
import Container from '../common/Container';
import PreviewOptions from './PreviewOptions';
import style from './PreviewQuestion.module.css';

const PreviewQuestion: React.FC<QuestionType> = ({
  idx,
  type,
  title,
  options,
  isEtc,
  isRequired,
  selected,
}) => {
  return (
    <Container>
      <div className={style.previewHeader}>
        <p>
          {isRequired && <span className={style.required}>*</span>} {title}
        </p>
      </div>
      <div className={style.optionsBox}>
        <PreviewOptions
          idx={idx}
          type={type}
          options={options}
          isEtc={isEtc}
          isRequired={isRequired}
          selected={selected}
        />
      </div>
    </Container>
  );
};

export default PreviewQuestion;
