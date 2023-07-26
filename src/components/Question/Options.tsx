import { useDispatch } from 'react-redux';
import {
  addEtcOption,
  addOptions,
  delEtcOption,
  delOption,
  editOption,
  listSort,
} from '../../store/questionSlice';
import { ChangeEvent, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import style from './Options.module.css';
import { OptionType } from '../../model/Type';

const Options: React.FC<OptionType> = ({ idx, type, options, isEtc }) => {
  const dispatch = useDispatch();
  const [drag, setDrag] = useState<boolean>(false);

  const onAddHandler = () => {
    dispatch(addOptions({ idx }));
  };
  const onEtcAddHandler = () => {
    dispatch(addEtcOption({ idx }));
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, Oidx: number) => {
    const { value } = e.target;
    dispatch(editOption({ Qidx: idx, value, Oidx }));
  };
  const onDeleteHandler = (Oidx: number) => {
    dispatch(delOption({ Qidx: idx, Oidx }));
  };
  const onEtcDeleteHandler = () => {
    dispatch(delEtcOption({ idx }));
  };

  // 드래그를 시작할 때 발생
  const onDragHandler = (
    e: React.DragEvent<HTMLDivElement>,
    itemIdx: number
  ) => {
    e.dataTransfer.setData('itemIdx', `${itemIdx}`);
    setDrag(true);
  };
  // 아이템을 놓았을 때 발생
  const onDropHandler = (e: React.DragEvent<HTMLDivElement>, Oidx: number) => {
    e.preventDefault();
    const itemIdx = e.dataTransfer.getData('itemIdx');
    dispatch(listSort({ Qidx: idx, Oidx, itemIdx }));
    e.dataTransfer.clearData();
    setDrag(false);
  };
  // 드래그 요소가 드롭 타겟 위에있을 때 발생
  const overDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  // 드래그 요소가 드롭 타겟 위를 떠났을 때 발생
  const leaveDragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  switch (type) {
    case 'short':
      return <p>단답형 텍스트</p>;
    case 'paragraph':
      return <p>장문형 텍스트</p>;
    case 'multiple':
      return (
        <ul>
          {options.map((ele, idx) => (
            <div key={idx} className={style.dndBox}>
              <div draggable onDragStart={(e) => onDragHandler(e, idx)}>
                <input type='radio' className={style.option} disabled />
                <input value={ele} onChange={(e) => onChangeHandler(e, idx)} />
                <RxCross2
                  className='iconBtn'
                  onClick={() => onDeleteHandler(idx)}
                />
              </div>
              <div
                className={drag ? style.onDrag : style.drag}
                onDragOver={overDropHandler}
                onDragLeave={leaveDragHandler}
                onDrop={(e) => onDropHandler(e, idx)}
              />
            </div>
          ))}
          {isEtc && (
            <div className={style.etc}>
              <input type='radio' className={style.option} disabled />
              <span>기타...</span>
              <RxCross2 className='iconBtn' onClick={onEtcDeleteHandler} />
            </div>
          )}
          <div>
            <input type='radio' className={style.option} disabled />
            <input
              value='옵션 추가'
              className={style.addInput}
              onClick={onAddHandler}
              readOnly
            />
            {!isEtc && (
              <>
                <span>또는</span>
                <button className={style.addBtn} onClick={onEtcAddHandler}>
                  '기타' 추가
                </button>
              </>
            )}
          </div>
        </ul>
      );
    case 'checkboxes':
      return (
        <ul>
          {options.map((ele, idx) => (
            <div key={idx} className={style.dndBox}>
              <div draggable>
                <input type='checkbox' className={style.option} disabled />
                <input value={ele} onChange={(e) => onChangeHandler(e, idx)} />
                <RxCross2
                  className='iconBtn'
                  onClick={() => onDeleteHandler(idx)}
                />
              </div>
              <div
                className={drag ? style.onDrag : style.drag}
                onDragOver={overDropHandler}
                onDragLeave={leaveDragHandler}
                onDrop={(e) => onDropHandler(e, idx)}
              />
            </div>
          ))}
          {isEtc && (
            <div className={style.etc}>
              <input type='checkbox' className={style.option} disabled />
              <span>기타...</span>
              <RxCross2 className='iconBtn' onClick={onEtcDeleteHandler} />
            </div>
          )}
          <div>
            <input type='checkbox' className={style.option} disabled />
            <input
              value='옵션 추가'
              className={style.addInput}
              onClick={onAddHandler}
              readOnly
            />
            {!isEtc && (
              <>
                <span>또는</span>
                <button className={style.addBtn} onClick={onEtcAddHandler}>
                  '기타' 추가
                </button>
              </>
            )}
          </div>
        </ul>
      );
    case 'dropdown':
      return (
        <ol>
          {options.map((ele, idx) => (
            <div key={idx} className={style.dndBox}>
              <div draggable>
                <span className={style.dropdownOption}>{idx + 1}.</span>
                <input value={ele} onChange={(e) => onChangeHandler(e, idx)} />
                <RxCross2
                  className='iconBtn'
                  onClick={() => onDeleteHandler(idx)}
                />
              </div>
              <div
                className={drag ? style.onDrag : style.drag}
                onDragOver={overDropHandler}
                onDragLeave={leaveDragHandler}
                onDrop={(e) => onDropHandler(e, idx)}
              />
            </div>
          ))}
          <div>
            <input
              value='옵션 추가'
              className={style.addInput}
              onClick={onAddHandler}
              readOnly
            />
          </div>
        </ol>
      );
    default:
      return <></>;
  }
};

export default Options;
