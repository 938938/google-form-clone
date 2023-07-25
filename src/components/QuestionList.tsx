import { useSelector } from 'react-redux';
import Question from './Question/Question';
import { RootState } from '../store/store';
import PreviewQuestion from './Preview/PreviewQuestion';
import { PreviewType } from '../model/Type';

const QuestionList: React.FC<PreviewType> = ({ preview }) => {
  const data = useSelector((state: RootState) => state.question);
  console.log(data);
  return (
    <div>
      {data.map((ele, idx) =>
        preview ? (
          <PreviewQuestion
            key={idx}
            idx={idx}
            type={ele.type}
            title={ele.title}
            options={ele.options}
            isEtc={ele.isEtc}
            isRequired={ele.isRequired}
            selected={ele.selected}
          />
        ) : (
          <Question
            key={idx}
            idx={idx}
            type={ele.type}
            title={ele.title}
            options={ele.options}
            isEtc={ele.isEtc}
            isRequired={ele.isRequired}
            selected={ele.selected}
          />
        )
      )}
    </div>
  );
};

export default QuestionList;
