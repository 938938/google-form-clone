import './App.css';
import AddQuestion from './components/AddQuestion';
import QuestionList from './components/QuestionList';
import Title from './components/Title';

function App() {
  return (
    <div className='App'>
      <Title />
      <QuestionList />
      <AddQuestion />
    </div>
  );
}

export default App;
