import { Link } from 'react-router-dom';
import QuestionList from '../components/QuestionList';
import Title from '../components/Title';
import style from './Preview.module.css';
import Modal from '../components/Preview/Modal';
import { useState } from 'react';

const Preview = () => {
  const [onModal, setOnModal] = useState<boolean>(false);
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
        <button
          type='button'
          className={style.delBtn}
          onClick={() => setOnModal(true)}
        >
          양식 지우기
        </button>
        {onModal && <Modal state={onModal} setState={setOnModal} />}
      </div>
    </form>
  );
};

export default Preview;
