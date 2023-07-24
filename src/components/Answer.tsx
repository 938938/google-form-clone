const Answer: React.FC<{ type: string; answer: string[] }> = ({
  type,
  answer,
}) => {
  switch (type) {
    case 'short':
      return <p>단답형 텍스트</p>;
    case 'paragraph':
      return <p>장문형 텍스트</p>;
    case 'multiple':
      return (
        <ul>
          {answer.map((ele, idx) => (
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
          {answer.map((ele, idx) => (
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
          {answer.map((ele, idx) => (
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

export default Answer;
