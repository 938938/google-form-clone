import { useDispatch, useSelector } from 'react-redux';
import Question from './Question/Question';
import { RootState } from '../store/store';
import PreviewQuestion from './Preview/PreviewQuestion';
import { PreviewType } from '../model/Type';
import style from './QuestionList.module.css';
import { dndSort } from '../store/questionSlice';
import { useState } from 'react';

const QuestionList: React.FC<PreviewType> = ({ preview }) => {
  const data = useSelector((state: RootState) => state.question);
  const dispatch = useDispatch();
  const [drag, setDrag] = useState<boolean>(false);

  // 드래그를 시작할 때 발생
  const onDragHandler = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    e.dataTransfer.setData('idx', `${idx}`);
    setDrag(true);
  };
  // 아이템을 놓았을 때 발생
  const onDropHandler = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    e.preventDefault();
    const itemIdx = e.dataTransfer.getData('idx');
    dispatch(dndSort({ idx, itemIdx }));
    setDrag(false);
  };
  // 드래그 요소가 드롭 타겟 위에있을 때 발생
  const overDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  // 드래그 요소가 드롭 타겟 위를 떠났을 때 발생
  const leaveDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      {data.map((ele, idx) =>
        preview ? (
          <PreviewQuestion
            key={idx}
            idx={idx}
            type={ele.type}
            title={ele.title}
            options={ele.options}
            isEtc={ele.isEtc}
            isRequired={ele.isRequired}
            selected={ele.selected}
          />
        ) : (
          <div key={idx}>
            <Question
              idx={idx}
              type={ele.type}
              title={ele.title}
              options={ele.options}
              isEtc={ele.isEtc}
              isRequired={ele.isRequired}
              selected={ele.selected}
              onDragHandler={onDragHandler}
            />
            <div
              className={drag ? style.onDrag : style.drag}
              onDragOver={overDropHandler}
              onDragLeave={leaveDragHandler}
              onDrop={(e) => onDropHandler(e, idx)}
            />
          </div>
        )
      )}
    </div>
  );
};

export default QuestionList;
