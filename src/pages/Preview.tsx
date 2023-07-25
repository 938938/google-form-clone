import { Link } from 'react-router-dom';
import QuestionList from '../components/QuestionList';
import Title from '../components/Title';
import style from './Preview.module.css';

const Preview = () => {
  return (
    <form>
      <Title preview={true} />
      <QuestionList preview={true} />
      <div className={style.btns}>
        <Link to='/submit'>
          <button className={style.submitBtn} type='submit'>
            제출
          </button>
        </Link>
        <button className={style.delBtn}>양식 지우기</button>
      </div>
    </form>
  );
};

export default Preview;
