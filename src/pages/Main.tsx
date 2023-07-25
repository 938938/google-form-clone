import AddQuestion from '../components/AddQuestion';
import QuestionList from '../components/Question/QuestionList';
import Title from '../components/Title';

const Main = () => {
  return (
    <div>
      <Title />
      <QuestionList />
      <AddQuestion />
    </div>
  );
};

export default Main;
