import { useSelector } from 'react-redux';
import Question from './Question/Question';
import { RootState } from '../store/store';
import PreviewQuestion from './Preview/PreviewQuestion';

const QuestionList: React.FC<{ preview: boolean }> = ({ preview }) => {
  const data = useSelector((state: RootState) => state.question);
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
          />
        )
      )}
    </div>
  );
};

export default QuestionList;
