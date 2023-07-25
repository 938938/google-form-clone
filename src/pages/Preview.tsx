import QuestionList from '../components/QuestionList';
import SideBtn from '../components/SideBtn';
import Title from '../components/Title';

const Preview = () => {
  return (
    <div>
      <Title preview={true} />
      <QuestionList preview={true} />
      <SideBtn preview={true} />
    </div>
  );
};

export default Preview;
