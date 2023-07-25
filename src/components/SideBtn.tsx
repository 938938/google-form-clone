import { RxPlusCircled, RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import style from './SideBtn.module.css';
import { useDispatch } from 'react-redux';
import { add } from '../store/questionSlice';
import { Link } from 'react-router-dom';

const SideBtn: React.FC<{ preview: boolean }> = ({ preview }) => {
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(add(1)); // 임의의 변수 전달
  };
  return (
    <div className={style.btnBox}>
      {!preview && (
        <button className={style.btn} onClick={addHandler}>
          <RxPlusCircled className='iconBtn' />
        </button>
      )}
      {preview ? (
        <Link to='/' className={style.btn}>
          <RxEyeClosed className='iconBtn' />
        </Link>
      ) : (
        <Link to='preview' className={style.btn}>
          <RxEyeOpen className='iconBtn' />
        </Link>
      )}
    </div>
  );
};

export default SideBtn;
