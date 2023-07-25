import { useSelector } from 'react-redux';
import Question from './Question';
import { RootState } from '../store/store';

const QuestionList = () => {
  const data = useSelector((state: RootState) => state.question);
  return (
    <div>
      {data.map((ele, idx) => (
        <Question
          key={idx}
          idx={idx}
          type={ele.type}
          title={ele.title}
          options={ele.options}
          isEtc={ele.isEtc}
        />
      ))}
    </div>
  );
};

export default QuestionList;
