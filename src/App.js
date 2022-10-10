// import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';


function App() {
  let expense = [
    {
      id:'e1',
      title:'school fee',
      amount:200,
      date: new Date(2022,8,10)
    },
    {
      id:'e2',
      title:'bus fee',
      amount:700,
      date: new Date(2022,10,10)
    },
    {
      id:'e3',
      title:'rent',
      amount:1000,
      date: new Date(2022,12,10)
    }
  ]
  return (
    <div>
      <Expenses item={expense}></Expenses>
    </div>
  );
}

export default App;
