import { useSelector } from 'react-redux';
import Question from './Question';
import { RootState } from '../store/store';

const QuestionList = () => {
  const data = useSelector((state: RootState) => state.question);
  console.log(data);
  return (
    <div>
      {data.map((ele, idx) => (
        <Question
          key={idx}
          type={ele.type}
          title={ele.title}
          answer={ele.answer}
        />
      ))}
    </div>
  );
};

export default QuestionList;
