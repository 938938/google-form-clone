import QuestionList from '../components/QuestionList';
import Title from '../components/Title';

const Main = () => {
  return (
    <div>
      <Title preview={false} />
      <QuestionList preview={false} />
    </div>
  );
};

export default Main;
