import { useDispatch } from 'react-redux';
import { reset } from '../../store/questionSlice';
import { ModalType } from '../../model/Type';
import style from './Modal.module.css';

const Modal: React.FC<ModalType> = ({ state, setState }) => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    setState(false);
  };
  const resetSelectedHandler = () => {
    dispatch(reset('')); // 임의의 변수 전달
    setState(false);
  };
  return (
    <div className={style.bg} onClick={closeModalHandler}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <h1>양식을 지우시겠습니까?</h1>
        <p>모든 질문에서 답변이 삭제되며 되돌릴 수 없습니다.</p>
        <div className={style.btns}>
          <button type='button' onClick={closeModalHandler}>
            취소
          </button>
          <button type='button' onClick={resetSelectedHandler}>
            양식 지우기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
