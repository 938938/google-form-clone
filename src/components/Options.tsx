import { useDispatch } from 'react-redux';

const Options: React.FC<{ type: string; options: string[] }> = ({
  type,
  options,
}) => {
  const dispatch = useDispatch();
  switch (type) {
    case 'short':
      return <p>단답형 텍스트</p>;
    case 'paragraph':
      return <p>장문형 텍스트</p>;
    case 'multiple':
      return (
        <ul>
          {options.map((ele, idx) => (
            <li key={idx}>
              <input value={ele} />
            </li>
          ))}
          <li>
            <input value='옵션 추가' />
            <span>또는</span>
            <button>'기타' 추가</button>
          </li>
        </ul>
      );
    case 'checkboxes':
      return (
        <ul>
          {options.map((ele, idx) => (
            <li key={idx}>
              <input value={ele} />
            </li>
          ))}
          <li>
            <input value='옵션 추가' />
            <span>또는</span>
            <button>'기타' 추가</button>
          </li>
        </ul>
      );
    case 'dropdown':
      return (
        <ol>
          {options.map((ele, idx) => (
            <li key={idx}>
              <input value={ele} />
            </li>
          ))}
          <li>
            <input value='옵션 추가' />
          </li>
        </ol>
      );
    default:
      return <></>;
  }
};

export default Options;
