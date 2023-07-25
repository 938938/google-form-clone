import { useSelector } from 'react-redux';
import Title from '../components/Title';
import Container from '../components/common/Container';
import { RootState } from '../store/store';

const Submit = () => {
  const data = useSelector((state: RootState) => state.question);
  return (
    <div>
      <Title preview={true} />
      {data &&
        data.map((ele, idx) => (
          <Container key={idx}>
            <h2>{ele.title}</h2>
            {ele.selected.map((select, index) => (
              <p key={index}>{select}</p>
            ))}
          </Container>
        ))}
    </div>
  );
};

export default Submit;
