import QuestionList from '../components/QuestionList';
import Title from '../components/Title';

const Preview = () => {
  return (
    <div>
      <Title preview={true} />
      <QuestionList preview={true} />
    </div>
  );
};

export default Preview;
