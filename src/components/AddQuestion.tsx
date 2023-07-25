import { RxPlusCircled } from 'react-icons/rx';
import style from './AddQuestion.module.css';
import { useDispatch } from 'react-redux';
import { add } from '../store/questionSlice';

const AddQuestion = () => {
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(add(1));
  };
  return (
    <button className={style.addQuestion} onClick={addHandler}>
      <RxPlusCircled className='iconBtn' />
    </button>
  );
};

export default AddQuestion;
