import QuestionList from '../components/QuestionList';
import Title from '../components/Title';
import SideBtn from '../components/SideBtn';

const Main = () => {
  return (
    <div>
      <Title preview={false} />
      <QuestionList preview={false} />
      <SideBtn preview={false} />
    </div>
  );
};

export default Main;
