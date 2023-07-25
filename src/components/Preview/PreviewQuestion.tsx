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
}) => {
  return (
    <Container>
      <div className={style.previewHeader}>
        <p>{title}</p>
      </div>
      <div className={style.optionsBox}>
        <PreviewOptions idx={idx} type={type} options={options} isEtc={isEtc} />
      </div>
    </Container>
  );
};

export default PreviewQuestion;
